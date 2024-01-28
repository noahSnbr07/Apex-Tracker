import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../styles/home.css';
import '../utils/components/Icon.jsx';
import Icon from '../utils/components/Icon.jsx';
import { BarLoader } from 'react-spinners';
export default function Home() {
    const { user } = useParams();
    let key = import.meta.env.VITE_API_KEY
    const [data, setData] = useState();

    function getDataFromAPI() {
        setData(null);
        fetch(`https://api.mozambiquehe.re/bridge?auth=${key}&player=${user}&platform=PS4`)
            .then((res) => res.json())
            .then((response) => {
                setData(response);
            }).catch((e) => {
                console.error(e);
            });
    }

    useEffect(() => { getDataFromAPI() }, []);

    const TopNavBar = () => {
        return (
            <nav className='top-nav-bar'>
                <header className='nav-header'> {user} </header>
                <Link to={'/login'}>
                    <Icon className='nav-link' icon={'logout'} />
                </Link>
            </nav>
        );
    }

    const Stat = ({ name, value }) => {
        return (
            <div className='listedStat'>
                <p>{name}</p>
                <p>{value}</p>
            </div>
        );
    }

    return (
        <div className='home-page'>
            <TopNavBar />
            <main className='home-main'>
                <button
                    onClick={getDataFromAPI}
                    className='main-refresh-button'> <Icon icon={'refresh'} /> </button>
                {
                    data ?
                        <>
                            <Stat name={'State'} value={data && data.realtime.currentStateAsText} />
                            <Stat name={'Legend'} value={data && data.realtime.selectedLegend} />
                            <Stat name={'Level'} value={data && data.global.level} />
                            <Stat name={'Rank'} value={data && data.global.rank.rankName} />
                            <Stat name={'Ranked Score'} value={data && data.global.rank.rankScore} />
                            <Stat name={'Ranked Division'} value={data && data.global.rank.rankDiv} />
                            <Stat name={'Time taken'} value={data && (data.processingTime).toFixed(2)} />
                        </>
                        : <BarLoader color='white' className='loader' />
                }
            </main>
        </div>
    );
}