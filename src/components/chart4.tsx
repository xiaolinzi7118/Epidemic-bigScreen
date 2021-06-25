import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
// @ts-ignore
import china from '../geo/china.json';
import { px } from '../shared/px';

export const Chart4 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(divRef.current);
        // @ts-ignore
        echarts.registerMap('CN', china);
        myChart.setOption({
            textStyle: {
                fontSize: px(6),
                color: '#79839E'
            },
            title: { show: false },
            legend: { show: false },
            grid: {
                x: 20,
                y: 50,
                x2: 20,
                y2: 0,
                containLabel: true
            },
            color: ['#97cbce', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059', '#fdfdfd'],
            xAxis: { show: false },
            yAxis: { show: false },
            series: [
                {
                    type: 'map',
                    mapType: 'CN',
                    data: [
                        { name: '广东省', value: 1 },
                    ],
                    label: { show: false, color: 'white' },
                    itemStyle: {
                        areaColor: 'rgba(28, 36, 86,0.5)',
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: { color: 'white' },
                            areaColor: '#5470C6',
                        },
                    }
                },
            ]
        });
    }, []);
    return (
        <div className="chart">
            <div ref={divRef} className="chart-content">
            </div>
            <p className='text1'>数据实时监控中</p>
            <p className='text2'>该地图仅显示中国部分地区</p>
        </div>
    );
};