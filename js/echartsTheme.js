var theme = {
    backgroundColor : "#fff",
    // 默认色板
    color: ["#5e93c1", "#f58383", "#f9d725", "#59ffc5", "#16b6cc", "#f85252", "#ffc11c", "#00dd69", "#05c1f1", "#f52121", "#ff960b", "#1ac902", "#0ca6f0", "#e01111", "#fb853a", "#009e29", "#0283de", "#bb0505", "#e08725", "#007e5c", "#0366c3", "#9a0303", "#c67401", "#026643", "#183a6a", "#750a0a", "#a46f00", "#034d24"],
    noDataLoadingOption:{
      text :"暂无数据",
      effect : function(params){
        params.start = function  (h) {//无数据时的回调
          h._bgDom.style.backgroundColor = '#fff';
        }
        params.stop  = function  () {//解除无数据状态时的回调
        }
        return params;
      },
      effectOption:{
      backgroundColor:"#fff"
      },
      textStyle : {
          fontSize : 20
      }
    },
    // 图表标题
    title: {
        textStyle: {
            fontWeight: 'normal',
            color: '#1790cf'
        }
    },

    // 值域
    dataRange: {
        x: 'left',
        y: 'bottom',
        text:['高','低'],
        calculable : true,
        color:['#1178ad','#72bbd0']
    },

    // 工具箱
    toolbox: {
        color : ['#1790cf','#1790cf','#1790cf','#1790cf']
    },

    // 提示框
    tooltip: {
        backgroundColor:"#fff",
        borderColor:"#474747",
        borderRadius:0,
        padding:5,
        textStyle: {
            color:"#474747",
            fontFamily:"微软雅黑,Arial, Verdana, sans-serif",
            fontSize:12},
        borderWidth:1,
        borderColor:"#b6b6b6",
        axisPointer:{
            type: 'line',
                lineStyle: {
                    color: '#48b',
                    width: 2,
                    type: 'solid',
                    shadowColor:"rgba(0,0,0,.4)",
                    shadowBlur:5
                }
        }
    },

    // 区域缩放控制器
    dataZoom: {
//        dataBackgroundColor: 'rgba(222,222,222,1)',            // 数据颜色
        fillerColor: 'rgba(222,222,222,.3)',   // 填充颜色
        handleColor: '#b5b5b5'     // 手柄颜色
    },

    // 网格
    grid: {
        borderWidth: 0
    },

    // 类目轴
    categoryAxis: {
        axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#d1d1d1'
            }
        },
        splitLine: {           // 分隔线
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: ['#ccc']
            }
        }
    },

    // 数值型坐标轴默认参数
    valueAxis: {
        axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#1790cf'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
            }
        },
        splitLine: {           // 分隔线
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: ['#ccc']
            }
        }
    },

    timeline : {
        lineStyle : {
            color : '#1790cf'
        },
        controlStyle : {
            normal : { color : '#1790cf'},
            emphasis : { color : '#1790cf'}
        }
    },
    pie:{
         itemStyle:{
            normal:{
                  label:{
                    show: true,
                    formatter: '{b}({d}%)'
                  },
                  labelLine :{show:true}
                }
            }
    },

    // K线图默认参数
    k: {
        itemStyle: {
            normal: {
                color: '#1bb2d8',          // 阳线填充颜色
                color0: '#99d2dd',      // 阴线填充颜色
                lineStyle: {
                    width: 1,
                    color: '#1c7099',   // 阳线边框颜色
                    color0: '#88b0bb'   // 阴线边框颜色
                }
            }
        }
    },

    map: {
        itemStyle: {
            normal: {
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            },
            emphasis: {                 // 也是选中样式
                areaStyle: {
                    color: '#99d2dd'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            }
        }
    },

    force : {
        itemStyle: {
            normal: {
                linkStyle : {
                    color : '#1790cf'
                }
            }
        }
    },

    chord : {
        padding : 4,
        itemStyle : {
            normal : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            },
            emphasis : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            }
        }
    },

    gauge : {
        axisLine: {            // 坐标轴线
            show: true,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle控制线条样式
                color: [[0.2, '#1bb2d8'],[0.8, '#1790cf'],[1, '#1c7099']],
                width: 8
            }
        },
        axisTick: {            // 坐标轴小标记
            splitNumber: 10,   // 每份split细分多少段
            length :12,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto'
            }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: 'auto'
            }
        },
        splitLine: {           // 分隔线
            length : 18,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
            }
        },
        pointer : {
            length : '90%',
            color : 'auto'
        },
        title : {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#333'
            }
        },
        detail : {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: 'auto'
            }
        }
    },

    textStyle: {
        color:"#474747",
        fontFamily:"微软雅黑,Arial, Verdana, sans-serif",
        fontSize:12
    }

};