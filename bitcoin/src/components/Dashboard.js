import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GoHome } from 'react-icons/go';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'


function Dashboard(props) {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);
    const [search, setsearch] = useState('');
    const mode = props.mode;

    const fetch = () => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=200&page=1&sparkline=true').then((res) => {
            setdata(res.data);
            setloading(false);
        })
    }

    useEffect(() => {
        setTimeout(()=>{
            fetch()
        },2000)
    }, [])

    const handleChange = (e) => {
        setsearch(e.target.value);
    }

    const handleKey = (e) => {
        if (search === '') {
            fetch();
        } else {
            if (e.key === 'Enter') {
                const fil = data.filter((e) => e.name.toLowerCase() === search);
                if (fil.length === 0) {
                    alert('no data found');
                    fetch();
                } else {
                    setdata(fil);
                }
            }
        }
    }
    return (

        <SkeletonTheme baseColor="#202020" highlightColor="#444">

            <div className={mode ? 'container-fluid white-color' : 'container-fluid back-color'}>
                <div className=' pt-3 '>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p className={mode ? 'text-dark' : 'text-white'}><GoHome className='icons-3' />Dashboard</p>
                        </div>
                        <div className='col-md-6'>
                            <input className='form-control' value={search} onChange={handleChange} placeholder="search here by name" onKeyPress={handleKey} />
                        </div>
                    </div>
                    <div className=''>
                        <div className='row'>
                            {loading ? <Skeleton count={1} height={'500px'} /> :

                                <Table responsive className={mode ? 'text-dark' : 'text-white'}>

                                    <thead className='bg-success'>
                                        <tr>
                                            <th>Coin</th>
                                            <th>Price</th>
                                            <th>24h Change</th>
                                            <th>Market Cap</th>
                                            <th>name</th>
                                            <th>Symbol</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((e, index) => {
                                            return (

                                                <tr className={mode ? 'text-dark' : 'text-white'} key={index}>

                                                    <td><Link to={`/${e.id}`}><img src={e.image} className="img-9" />
                                                    </Link></td>
                                                    <td>Rs.{e.current_price}</td>
                                                    <td className={e.market_cap_change_percentage_24h < 1 ? "text-danger" : "text-success"}>{e.market_cap_change_percentage_24h.toFixed(2)}%</td>
                                                    <td>{e.market_cap}M</td>
                                                    <td>{e.name}</td>
                                                    <td>{e.symbol}</td>

                                                </tr>

                                            )

                                        })}

                                    </tbody>
                                </Table>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default Dashboard;