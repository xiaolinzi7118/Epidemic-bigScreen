
import React from 'react';

export const Chart3 = () => {
    return (
        <div className="chart chart3">
            <h2>广东省风险区域情况</h2>
            <table>
                <thead>
                    <tr>
                        <th>等级</th><th>广州</th><th>东莞</th><th>深圳</th><th>佛山</th>
                        <th>合计</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>低风险</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
                    </tr>
                    <tr>
                        <td>中风险</td><td>3</td><td>2</td><td>1</td><td>2</td><td>9</td>
                    </tr>
                    <tr className='danger'>
                        <td>高风险</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};