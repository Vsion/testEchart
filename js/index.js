  // 汇总曲线图
  var sumLineChartOpt = {
      title: {
            text: ''
        },
        tooltip : {
            trigger: 'axis',
            padding:0,
            // formatter: function(){
            //     return _self.sumLineTipFmt.apply(_self,arguments)
            // }
        },
        legend: {
          top: '6%',
            data:['双向速率', '上行速率','下行速率']
        },
        grid: {
            left: '3%',
            right: '8%',
            bottom: '48px',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : []
            }
        ],
        yAxis : [
            {
                type : 'value',
                name: '速率'
            }
        ],
        dataZoom: [
            {
                type: 'inside',
                show: true,
                xAxisIndex: [0],
                start: 1,
                end: 32
            },
            {
                type: 'slider',
                xAxisIndex: [0],
                start: 1,
                end: 32
            }],
        series : [
        {
            name:'双向速率',
            type:'line',
            data:[]
        },
            {
                name:'上行速率',
                type:'line',
                data:[]
            },
            {
                name:'下行速率',
                type:'line',
                data:[]
            }
        ]
  }
  // 分项对比曲线图
  function getItemLineOpt(title){
    return {
      title: {
          text: title
      },
      tooltip : {
          trigger: 'axis',
          padding:0,
              // formatter: function(){
              //   return _self.itemTipFmt.apply(_self,arguments)
              // }
      },
      legend: {
        orient: 'vertical',
            itemGap : 15,
            left:'left',
            top : '50px',
            data: []
      },
      dataZoom: [
             {
                 type: 'inside',
                 show: true,
                 xAxisIndex: [0],
                 start: 1,
                 end: 32
             },
             {
                 type: 'slider',
                 xAxisIndex: [0],
                 start: 1,
                 end: 32
             }],
      grid: {
          left: '130px',
          top:'15%',
          right: '8%',
          bottom: '48px',
          containLabel: true
      },
      xAxis : [
          {
            name: "时间",
              type : 'category',
              boundaryGap : false,
              data : []
          }
      ],
      yAxis : [
          {
              type : 'value',
              name: '速率'
          }
      ],
      series : []
    }
}
var totalLineChartOpt = getItemLineOpt('双向速率对比');
var upLineChartOpt = getItemLineOpt('上行速率对比');
var dnLineChartOpt = getItemLineOpt('下行速率对比');
var graphOpt = {
  ele : {
    $wraper : $("#sumLineChart").parents(".hhPanel-content"),
    $saveChart : $("#saveChart")
  },
  options : [
             {ele : $("#sumLineChart")[0], opts : sumLineChartOpt},
             {ele : $("#totalLineChart")[0], opts : totalLineChartOpt},
             {ele : $("#upLineChart")[0], opts : upLineChartOpt},
             {ele : $("#dnLineChart")[0], opts : dnLineChartOpt}
  ]
}

$(function(){
  $("#tabCharts").tabs({activate: function( event, ui ) {
    $(window).trigger('resize');
  }});
  initEcharts(graphOpt.options);
  setTimeout(function(){
    getSumLineChart(totalData);
    getItemLineChart(data);
  }, 1000);
});
var charts = [];
function initEcharts(opts){
  $.each(opts,function(i,opt){
      var chart = echarts.init(opt.ele,theme);
      chart.setOption(opt.opts);
      charts.push(chart);
  })
  $(window).on('resize',function(){
      _.forEach(charts,function(c){
        if(!!c.resize && !c.isDisposed()) {
          c.resize();
        }
      })
  })
}
function getSumLineChart(chartLineData, chartId){
    var totalBpsLineData = _.map(chartLineData,'totalBpsVv');//上行
    var upBpsLineData = _.map(chartLineData,'upBpsVv');//上行
    var dnBpsLineData = _.map(chartLineData,'dnBpsVv');//下行
    var timeLineList = _.map(chartLineData,'timeVv');//时间
    sumLineChartOpt.xAxis[0].data = timeLineList.slice(3);
    sumLineChartOpt.series[0].data = totalBpsLineData.slice(3);
    sumLineChartOpt.series[1].data = upBpsLineData.slice(3);
    sumLineChartOpt.series[2].data = dnBpsLineData.slice(3);

    getChartByDom($("#sumLineChart")).setOption(sumLineChartOpt);
}
/**
   * 获得分项线图
   */
function getItemLineChart(chartLineData){
      var index = 0;
      var totalLineChartOptFinal = _.cloneDeep(totalLineChartOpt);
      var upLineChartOptFinal = _.cloneDeep(upLineChartOpt);
      var dnLineChartOptFinal = _.cloneDeep(dnLineChartOpt);
      _.forEach(chartLineData, function(item) {//forOwn --> forEach ,value --> item.data ,key --> item.name
          var _s = {name: item.name,type: 'line',data:[]};

          totalLineChartOptFinal.legend.data.push({name:item.name, icon:'bar'});
          totalLineChartOptFinal.series.push(_.cloneDeep(_s));

          upLineChartOptFinal.legend.data.push({name:item.name, icon:'bar'});
          upLineChartOptFinal.series.push(_.cloneDeep(_s));

          dnLineChartOptFinal.legend.data.push({name:item.name, icon:'bar'});
          dnLineChartOptFinal.series.push(_.cloneDeep(_s));

          var lineData = item.data.slice(3);
          for(var i=0;i<lineData.length; i++){
              var lineValue = lineData[i];
              totalLineChartOptFinal.series[index].data.push(lineValue.totalBpsVv);
              upLineChartOptFinal.series[index].data.push(lineValue.upBpsVv);
              dnLineChartOptFinal.series[index].data.push(lineValue.dnBpsVv);

              if (index == 0){
                  totalLineChartOptFinal.xAxis[0].data.push(lineValue.timeVv);
                  upLineChartOptFinal.xAxis[0].data.push(lineValue.timeVv);
                  dnLineChartOptFinal.xAxis[0].data.push(lineValue.timeVv);
              }
          }
          index++;
      });

      getChartByDom($("#totalLineChart")).clear()
      getChartByDom($("#totalLineChart")).setOption(totalLineChartOptFinal);
      getChartByDom($("#upLineChart")).clear();
      getChartByDom($("#upLineChart")).setOption(upLineChartOptFinal);
      getChartByDom($("#dnLineChart")).clear();
      getChartByDom($("#dnLineChart")).setOption(dnLineChartOptFinal);
  }
  function getChartByDom($ele){
    return echarts.getInstanceByDom($ele[0]);
  }
