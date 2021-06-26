import React, { useEffect, useState } from "react"
export const Chart6 = () => {
    const [num1, setNum1] = useState('103171');
    const [num2, setNum2] = useState('4759');
    useEffect(() => {
        setInterval(() => {
            setNum1(n => {
                if (n === '107930') {
                    return '103171'
                }
                return (Number(n) + 1).toString()
            });
            setNum2(n => {
                if (n === '0') {
                    return '4759'
                }
                return (Number(n) - 1).toString()
            })
        }, 300)
    }, [])
    return (
        <div className="chart">
            <h2>疫情数据统计</h2>
            <div className="chart-content">
                <ul>
                    <li>
                        <div className='title-6'>累计确诊</div>
                        <div className='text-6 one'>118145</div>
                    </li>
                    <li>
                        <div className='title-6'>累计治愈</div>
                        <div className='text-6 two'>{num1}</div>
                    </li>
                    <li>
                        <div className='title-6'>累计死亡</div>
                        <div className='text-6 three'>5456</div>
                    </li>
                    <li>
                        <div className='title-6'>现有确诊</div>
                        <div className='text-6 four'>{num2}</div>
                    </li>
                    <li>
                        <div className='title-6'>境外输入确诊</div>
                        <div className='text-6 five'>6526</div>
                    </li>
                    <li>
                        <div className='title-6'>现有疑似</div>
                        <div className='text-6 six'>0</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}