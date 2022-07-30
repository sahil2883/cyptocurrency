import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Detail = (props) => {

    const [bit, setbit] = useState([]);
    const [bits, setbits] = useState({});
    const [des, setdes] = useState({});
    const { id } = useParams();
    const [loading, setloading] = useState(true);

    const mode = props.mode;
    const fetch = () => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}?sparkline=true`).then((res) => {
            setbit(res.data.market_data.sparkline_7d.price);
            setbits(res.data.image)
            setdes(res.data);
            setloading(false)
        })
    }

    console.log(des)


    useEffect(() => {
        setTimeout(() => {
            fetch()
        }, 1000)
    }, [])
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: id,
            },
        }, scales: {
            x: {
                grid: {
                    color: 'rgba(255,0,0,0.1)',
                    borderColor: 'red'
                }
            },
            y: {
                grid: {
                    color: 'rgba(0,255,0,0.1)',
                    borderColor: 'green'
                }
            }
        }

    };

    const labels = bit.map((e) => (e).toFixed(2))

    const data = {
        labels,
        datasets: [
            {
                label: id,
                data: bit.map((e) => e),
                borderColor: 'rgb(29, 48, 110)',
                backgroundColor: 'rgb(29, 48, 110)',
                color: 'white',
                showLine: true,
            },

        ],
    };

    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">

            <div className={mode ? 'container-fluid white-color' : 'container-fluid back-color'}>

                <div className=' pt-3 '>
                    <div className='row'>
                        <div className="d-flex align-items-center justify-content-between">
                            <p className={mode ? 'text-dark' : 'text-white'}><GoHome className='icons-3' />{id}</p>
                            <img src={bits.thumb} className="img-fluid" />
                        </div>
                    </div>
                </div>
                {loading ? <Skeleton height={'500px'} /> :
                    <div className="row">

                        <div className={`col-md-3 mt-5 text-center ${mode ? 'text-dark' : 'text-white'}`}>
                            <img src={bits.small} className="img-fluid" />
                            <p className={mode ? 'text-dark' : 'text-white'}>{des.name}</p>
                            <ul className=" mt-2 lol">
                                <li>name : {id}</li>
                                <li>market_cap_rank : {des.market_cap_rank}</li>
                                <li>public_interest_score: {des.public_interest_score}</li>
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <Line options={options} data={data} />
                        </div>
                    </div>}
            </div>
        </SkeletonTheme>
    )
}

export default Detail;