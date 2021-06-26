import React from 'react';
import './home.scss';
import { Chart1 } from '../components/chart1';
import { Chart2 } from '../components/chart2';
import { Chart3 } from '../components/chart3';
import { Chart4 } from '../components/chart4';
import { Chart5 } from '../components/chart5';
import { Chart7 } from '../components/chart7';
import { Chart6 } from '../components/chart6';

export const Home = () => {

    return (
        <div className="home">
            <header>
                <div className='caption'>——数据来源于UC,统计截至6月26日24时</div>
                <div className="title">全国疫情数据一览平台</div>
                <div className='info'>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-fixed"></use>
                    </svg>
                    <span> ShenZhen，28℃ </span>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-cloudy"></use>
                    </svg>
                </div>
            </header>
            <main>
                <section className="bordered section1">
                    <Chart1 />
                </section>
                <section className="bordered section2">
                    <Chart2 />
                </section>
                <section className="bordered section3">
                    <Chart3 />
                </section>
                <section className="bordered section4">
                    <Chart4 />
                    <div className="ring">
                        <div className="radar" />
                    </div>
                </section>
                <section className="bordered section5">
                    <Chart5 />
                </section>
                <section className="bordered section6">
                    <Chart6 />
                </section>
                <section className="bordered section7">
                    <Chart7 />
                </section>
            </main>
        </div>
    );
};