import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const px = (n) => n / 2420 * (window as any).pageWidth;
export const Chart1 = () => {
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
            xAxis: {
                data: ['广州', '深圳', '四川', '云南', '福建', '浙江', '北京'],
                axisTick: { show: false },
                axisLine: {
                    lineStyle: { color: '#083B70' }
                },
                axisLabel: {
                    fontSize: px(12),
                    formatter(val) {
                        if (val.length > 2) {
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('');
                        } else {
                            return val;
                        }
                    }
                },
            },
            grid: {
                x: 50,
                y: 25,
                x2: 20,
                y2: 25
            },
            yAxis: {
                splitLine: { show: false },
                axisLine: {
                    show: true,
                    lineStyle: { color: '#083B70' }
                },
                axisLabel: {
                    fontSize: px(6)
                }
            },
            series: [{
                type: 'bar', itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#83bff6' },
                            { offset: 0.5, color: '#188df0' },
                            { offset: 1, color: '#188df0' }
                        ]
                    )
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#ef6666' },
                                { offset: 0.7, color: '#ef6666' },
                                { offset: 1, color: '#83bff6' }
                            ]
                        )
                    }
                },
                data: [120, 44, 42, 42, 46, 48, 14]
            }]
        });
    }, []);

    return (
        <div className="chart1">
            <h2>各省市现有确诊统计</h2>
            <div ref={divRef} className="chart">
            </div>
        </div>
    );
};