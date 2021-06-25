import React from "react";
import { Chart51 } from "./chart51";
import { Chart52 } from "./chart52";
import { Chart53 } from "./chart53";

export const Chart5 = () => {
    return (
        <div className='chart'>
            <h2>确诊病例性别年龄段分布</h2>
            <div className='chart-content'>
                <Chart51 />
                <Chart52 />
                <Chart53 />
            </div>
        </div>
    )
}