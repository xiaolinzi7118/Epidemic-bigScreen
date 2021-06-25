import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';

export const Chart52 = () => {
    const divRef = useRef(null);
    const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C'];
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption({
            textStyle: {
                fontSize: px(12),
                color: '#79839E'
            },
            title: { show: false },
            grid: {
                x: px(20),
                y: px(20),
                x2: px(20),
                y2: px(20),
                containLabel: true
            },
            color: colors,
            xAxis: { show: false },
            yAxis: { show: false },
            legend: { show: false },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['75%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true, position: 'inside', textStyle: { color: 'white', fontSize: px(20) },
                        formatter(options) {
                            return (options.value * 100).toFixed(0) + '%';
                        }
                    },
                    labelLine: { show: false },
                    itemStyle: {
                        borderColor: '#0F113A',
                        borderWidth: px(4)
                    },
                    data: [
                        { value: 0.07, name: '5-15' },
                        { value: 0.23, name: '15-30' },
                        { value: 0.22, name: '30-45' },
                        { value: 0.48, name: '45-60' },
                    ]
                }
            ]
        });
    }, []);

    return (
        <div className="chart5-2">
            <div className="chart-yuan">
                <div className="main" ref={divRef} />
                <div className="text">年龄段</div>
            </div>
            <div className="legend">
                <div><span style={{ background: colors[0] }} /> 5-15 </div>
                <div><span style={{ background: colors[1] }} /> 15-30 </div>
                <div><span style={{ background: colors[2] }} /> 30-45 </div>
                <div><span style={{ background: colors[3] }} /> 45-60 </div>
            </div>
        </div>
    );
};