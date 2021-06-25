
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';

export const Chart53 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption({
            textStyle: {
                fontSize: px(12),
                color: '#79839E'
            },
            title: { show: false },
            legend: { show: false },
            color: '#F7A110',
            grid: {
                x: 10,
                y: 30,
                x2: 20,
                y2: 0,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [0, 18, 28, 38, 48, 58, 68, 78],
                splitLine: { show: true, lineStyle: { color: '#073E78' } },
                axisTick: { show: false },
                axisLine: { show: false },
            },
            yAxis: {
                type: 'value',
                splitLine: { lineStyle: { color: '#073E78' } },
                axisLabel: {
                    formatter(val) {
                        return val * 100 + '%';
                    }
                }
            },
            series: [{
                type: 'line',
                data: [
                    0.07, 0.08, 0.16,
                    0.25, 0.26, 0.35,
                    0.28, 0.16
                ],
                symbol: 'circle',
                symbolSize: px(12),
                lineStyle: { width: px(2) },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#F7A110'
                    }, {
                        offset: 1,
                        color: '#1B1D52'
                    }]),
                }
            }]
        });
    }, []);

    return (
        <div className="chart5-3">
            <div ref={divRef} className="chart-wrapper">
            </div>
            <div className='text5-3'>年龄趋势图</div>
        </div>
    );
};