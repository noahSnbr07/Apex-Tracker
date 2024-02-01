import React, { useEffect, useState } from 'react'
import BarLoader from 'react-spinners/BarLoader';
import Navbar from '../utils/components/Navbar';
import '../styles/rotation.css';
export default function Rotation() {
    const [data, setData] = useState();
    const key = import.meta.env.VITE_API_KEY;

    const getCurrentMap = () => {
        setData(null);
        try {
            fetch(`https://api.mozambiquehe.re/maprotation?auth=${key}&version=1`)
                .then((res) => res.json())
                .then((response) => {
                    setData(response);
                })
                .catch((e) => {
                    console.error(e);
                });
        } catch (error) {
            return console.error(error);
        }
    }
    useEffect(() => {
        getCurrentMap();
    }, []);

    const MapBox = ({ asset, name, type, remaining }) => {
        const [map, setMap] = useState(true);
        return (
            <div
                style={{ backgroundImage: `url(${map ? asset[0] : asset[1]})` }}
                onClick={() => { setMap((map) => !map); }}
                className='map-box'>
                <h1>{type}</h1>
                <h3> {remaining} min left </h3>
                <h3> {map ? name[0] : name[1]} </h3>
                <h3> {map ? 'current' : 'next'} </h3>
            </div>
        );
    }

    return (
        <div className='rotation-page'>
            <Navbar title={'Rotation'} action={getCurrentMap} />
            <main className='rotation-main'>
                {
                    data ? (
                        <>
                            <MapBox
                                type={'Battle Royale'}
                                remaining={data.battle_royale.current.remainingTimer}
                                name={[
                                    data.battle_royale.current.map,
                                    data.battle_royale.next.map]}
                                asset={[
                                    data.battle_royale.current.asset,
                                    data.battle_royale.next.asset]} />

                            <MapBox
                                type={'Arenas'}
                                remaining={data.arenas.current.remainingTimer}
                                name={[
                                    data.arenas.current.map,
                                    data.arenas.next.map]}
                                asset={[
                                    data.arenas.current.asset,
                                    data.arenas.next.asset]} />

                            <MapBox
                                type={'Ranked'}
                                remaining={data.ranked.current.remainingTimer}
                                name={[
                                    data.ranked.current.map,
                                    data.ranked.next.map]}
                                asset={[
                                    data.ranked.current.asset,
                                    data.ranked.next.asset]} />

                            <MapBox
                                type={'Limited Time Mode (LTM)'}
                                remaining={data.ltm.current.remainingTimer}
                                name={[
                                    data.ltm.current.map,
                                    data.ltm.next.map]}
                                asset={[
                                    data.ltm.current.asset,
                                    data.ltm.next.asset]} />
                        </>
                    ) : (<BarLoader color='red' />)
                }
            </main>
        </div>
    );
}