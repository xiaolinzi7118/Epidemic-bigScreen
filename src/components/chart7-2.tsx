import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';

export const Chart72 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption({
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    name: '确诊病例占比',
                    type: 'pie',
                    radius: '60%',
                    data: [
                        { value: 0.01, name: '未来' },
                        { value: 0.14, name: '2021年' },
                        { value: 0.6, name: '2020年' },
                        { value: 0.25, name: '2019年' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }, []);

    return (
        <div className='chart7-2' ref={divRef} />
    );
};