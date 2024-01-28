import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Icon from '../utils/components/Icon.jsx';
import { BarLoader } from 'react-spinners';
import '../styles/home.css';
import Invalid from '../utils/components/Invalid.jsx';

export default function Home() {
    const { user, platform } = useParams();
    const key = import.meta.env.VITE_API_KEY;
    const [data, setData] = useState(null);

    function getDataFromAPI() {
        setData(null);
        try {
            fetch(`https://api.mozambiquehe.re/bridge?auth=${key}&player=${user}&platform=${platform}`)
                .then((res) => res.json())
                .then((response) => {
                    setData(response);
                })
                .catch((e) => {
                    console.error(e);
                });
        } catch (error) {
            return 'hiii'
        }
    }

    useEffect(() => {
        getDataFromAPI();
    }, [user, platform]);

    const TopNavBar = () => (
        <nav className='top-nav-bar'>
            <header className='nav-header'>{user}</header>
            <div>
                <Icon onClick={getDataFromAPI} className='nav-link' icon={'refresh'} />
                <Link to='/login'>
                    <Icon className='nav-link' icon={'logout'} />
                </Link>
            </div>
        </nav>
    );

    const Stat = ({ name, value }) => (
        <div className='listedStat'>
            <p>{name}</p>
            <p>{value}</p>
        </div>
    );

    return (
        <div className='home-page'>
            <TopNavBar />
            <main className='home-main'>
                {data ? (
                    <>
                        <Stat name='State' value={data.realtime.currentStateAsText || ''} />
                        <Stat name='Legend' value={data.realtime.selectedLegend || ''} />
                        <Stat name='Level' value={data.global.level || ''} />
                        <Stat name='Rank' value={data.global.rank.rankName || ''} />
                        <Stat name='Ranked Score' value={data.global.rank.rankScore || ''} />
                        <Stat name='Ranked Division' value={data.global.rank.rankDiv || ''} />
                        <Stat name='Time taken' value={data.processingTime ? data.processingTime.toFixed(2) : ''} />
                    </>
                ) : (
                    <BarLoader color='white' className='loader' />
                )}
            </main>
        </div>
    );
}
