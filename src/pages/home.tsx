import React, { useEffect, useRef } from 'react';
import './home.scss';
import { Chart1 } from '../components/chart1';
import { Chart2 } from '../components/chart2';

export const Home = () => {

    return (
        <div className="home">
            <header>
                <div className="clock">时间</div>
                <div className="title">全国疫情数据一览平台</div>
                <div className='info'>shengzhen</div>
            </header>
            <main>
                <section className="bordered section1">
                    <Chart1 />
                </section>
                <section className="bordered section2">
                    <Chart2 />
                </section>
                <section className="bordered section3"></section>
                <section className="bordered section4"></section>
                <section className="bordered section5"></section>
                <section className="bordered section6"></section>
                <section className="bordered section7"></section>
            </main>
        </div>
    );
};