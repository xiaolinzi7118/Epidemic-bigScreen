import React from 'react';
import { Chart71 } from './chart7-1';
import { Chart72 } from './chart7-2';

export const Chart7 = () => {
    return (
        <div className="chart chart7">
            <h2>新增病例年月分析</h2>
            <div className="chart-content">
                <Chart72 />
                <Chart71 />
            </div>
        </div>
    );
};