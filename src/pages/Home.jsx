import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Icon from '../utils/components/Icon.jsx';
import { BarLoader } from 'react-spinners';
import Navbar from '../utils/components/Navbar.jsx';
import '../styles/home.css'
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
                    console.log(data);
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


    const Stat = ({ name, value }) => (
        <div className='listedStat'>
            <p>{name}</p>
            <p>{value}</p>
        </div>
    );

    const getLevel = () => {
        if (data.global.levelPrestige === 1) {
            return (data.global.level + 500);
        }
        else {
            return data.global.level
        }
    }

    return (
        <div className='home-page'>
            <Navbar
                title={user}
                action={() => { getDataFromAPI(); }}
            />
            <main className='home-main'>
                {data ? (
                    <>
                        <Stat name='State' value={data.realtime.currentStateAsText || ''} />
                        <Stat name='Legend' value={data.realtime.selectedLegend || ''} />
                        <Stat name='Level' value={getLevel() || ''} />
                        <Stat name='Rank' value={data.global.rank.rankName || ''} />
                        <Stat name='Ranked Score' value={data.global.rank.rankScore || ''} />
                        <Stat name='Ranked Division' value={data.global.rank.rankDiv || ''} />
                    </>
                ) : (
                    <BarLoader color='white' className='loader' />
                )}
            </main>
        </div>
    );
}
