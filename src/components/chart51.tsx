import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';

export const Chart51 = () => {
    const divRef = useRef(null);
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
            color: ['#8D70F8', '#33A4FA'],
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
                            return options.value * 100 + '%';
                        }
                    },
                    labelLine: { show: false },
                    itemStyle: {
                        borderColor: '#0F113A',
                        borderWidth: px(4)
                    },
                    data: [
                        { value: 0.4, name: '女' },
                        { value: 0.6, name: '男' },
                    ]
                }
            ]
        });
    }, []);

    return (
        <div className="chart5-1">
            <div className="chart-yuan">
                <div className="main" ref={divRef} />
                <div className="text">性别</div>
            </div>
            <div className="legend">
                <span className="male" /> 男
                <span className="female" /> 女
            </div>
        </div>
    );
};