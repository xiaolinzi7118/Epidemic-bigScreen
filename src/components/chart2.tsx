import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';


export const Chart2 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption({
            textStyle: {
                fontSize: px(6),
                color: '#79839E'
            },
            title: { show: false },
            legend: { show: false },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                x: 50,
                y: 25,
                x2: 20,
                y2: 25
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                splitLine: { show: false },
                axisLabel: { show: false }
            },
            yAxis: {
                axisTick: { show: false },
                type: 'category',
                data: ['广州', '深圳', '四川', '云南', '福建', '浙江', '北京']
            },
            series: [
                {
                    name: '境外输入',
                    type: 'bar',
                    data: [100, 32, 28, 41, 38, 42, 8],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#B92AE8'
                            }, {
                                offset: 1,
                                color: '#6773E7'
                            }]),
                        }
                    }
                },
                {
                    name: '本土输入',
                    type: 'bar',
                    data: [20, 12, 14, 1, 8, 6, 6],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#2034F9'
                            }, {
                                offset: 1,
                                color: '#04A1FF'
                            }]),
                        }
                    }
                },
            ]
        });
    }, []);

    return (
        <div className="chart">
            <h2>各省市境外本土病例统计对比</h2>
            <div ref={divRef} className="chart-content">
            </div>
            <div className="legend">
                <span className="first" /> 境外输入
                <span className="second" /> 本土案例
            </div>
        </div>
    );
};