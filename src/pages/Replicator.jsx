import React, { useEffect, useState } from 'react'
import '../styles/replicator.css';
import { BarLoader } from 'react-spinners';
import Navbar from '../utils/components/Navbar';
import Icon from '../utils/components/Icon';
import makeReadable from '../utils/functions/makeReadable';
import '../styles/components/navbar.css';
export default function Replicator() {
    const key = import.meta.env.VITE_API_KEY;
    const [data, setData] = useState(null);

    function getDataFromAPI() {
        setData(null);
        try {
            fetch(`https://api.mozambiquehe.re/crafting?auth=${key}`)
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



    useEffect(() => { getDataFromAPI(); }, []);

    const Bundle = ({ type, name, start, end, imgAsset, cost, item, rarity }) => {
        return (
            <div className='bundleContainer'>
                <section>
                    <h1> {makeReadable(name)} </h1>
                    {item && <div><p>item:</p> <p> {makeReadable(item)}</p></div>}
                    {cost && <div><p>cost:</p> <p> {cost}</p></div>}
                    {rarity && <div><p>rarity:</p><p>{rarity}</p></div>}
                    {type && <div><p>type:</p> <p> {makeReadable(type)}</p></div>}
                    {start && <div><p>start:</p> <p> {start}</p></div>}
                    {end && <div><p>end:</p> <p> {end}</p></div>}
                </section>
                <section>
                    <img src={imgAsset} loading='lazy' />
                </section>
            </div>
        );
    }

    return (
        <div className='replicator-page'>
            <Navbar
                title={'Replicator'}
                action={() => { getDataFromAPI(); }}
            />
            {/* <pre style={{ overflowY: 'scroll' }}>{JSON.stringify(data, undefined, 2)}</pre> */}
            {
                data ? (
                    <>
                        <Bundle
                            type={data[0].bundleType}
                            name={data[0].bundle}
                            content={data[0].bundleContent}
                            start={data[0].startDate}
                            end={data[0].endDate}
                            imgAsset={data[0].bundleContent[0].itemType.asset}
                            cost={data[0].bundleContent[0].cost}
                            item={data[0].bundleContent[0].itemType.name}
                            rarity={data[0].bundleContent[0].itemType.rarity}
                        />
                        <Bundle
                            type={data[0].bundleType}
                            name={data[0].bundle}
                            content={data[0].bundleContent}
                            start={data[0].startDate}
                            end={data[0].endDate}
                            imgAsset={data[0].bundleContent[1].itemType.asset}
                            cost={data[0].bundleContent[1].cost}
                            item={data[0].bundleContent[1].itemType.name}
                            rarity={data[0].bundleContent[1].itemType.rarity}
                        />
                        <Bundle
                            type={data[1].bundleType}
                            name={data[1].bundle}
                            content={data[1].bundleContent}
                            start={data[1].startDate}
                            end={data[1].endDate}
                            imgAsset={data[1].bundleContent[1].itemType.asset}
                            cost={data[1].bundleContent[1].cost}
                            item={data[1].bundleContent[1].itemType.name}
                            rarity={data[1].bundleContent[1].itemType.rarity}
                        />
                        <Bundle
                            type={data[1].bundleType}
                            name={data[1].bundle}
                            content={data[1].bundleContent}
                            start={data[1].startDate}
                            end={data[1].endDate}
                            imgAsset={data[1].bundleContent[0].itemType.asset}
                            cost={data[1].bundleContent[0].cost}
                            item={data[1].bundleContent[0].itemType.name}
                            rarity={data[1].bundleContent[0].itemType.rarity}
                        />
                        <Bundle
                            type={data[2].bundleType}
                            name={data[2].bundle}
                            content={data[2].bundleContent}
                            start={data[2].startDate}
                            end={data[2].endDate}
                            imgAsset={data[2].bundleContent[0].itemType.asset}
                            cost={data[2].bundleContent[0].cost}
                            item={data[2].bundleContent[0].itemType.name}
                            rarity={data[2].bundleContent[0].itemType.rarity}
                        />
                        <Bundle
                            type={data[3].bundleType}
                            name={data[3].bundle}
                            content={data[3].bundleContent}
                            start={data[3].startDate}
                            end={data[3].endDate}
                            imgAsset={data[3].bundleContent[0].itemType.asset}
                            cost={data[3].bundleContent[0].cost}
                            item={data[3].bundleContent[0].itemType.name}
                            rarity={data[3].bundleContent[0].itemType.rarity}
                        />
                        <Bundle
                            type={data[4].bundleType}
                            name={data[4].bundle}
                            content={data[4].bundleContent}
                            start={data[4].startDate}
                            end={data[4].endDate}
                            imgAsset={data[4].bundleContent[0].itemType.asset}
                            cost={data[4].bundleContent[0].cost}
                            item={data[4].bundleContent[0].itemType.name}
                            rarity={data[4].bundleContent[0].itemType.rarity}
                        />
                        <Bundle
                            type={data[5].bundleType}
                            name={data[5].bundle}
                            content={data[5].bundleContent}
                            start={data[5].startDate}
                            end={data[5].endDate}
                            imgAsset={data[5].bundleContent[0].itemType.asset}
                            cost={data[5].bundleContent[0].cost}
                            item={data[5].bundleContent[0].itemType.name}
                            rarity={data[5].bundleContent[0].itemType.rarity}
                        />
                        <Bundle
                            type={data[6].bundleType}
                            name={data[6].bundle}
                            content={data[6].bundleContent}
                            start={data[6].startDate}
                            end={data[6].endDate}
                            imgAsset={data[6].bundleContent[0].itemType.asset}
                            cost={data[6].bundleContent[0].cost}
                            item={data[6].bundleContent[0].itemType.name}
                            rarity={data[6].bundleContent[0].itemType.rarity}
                        />
                        <Bundle
                            type={data[7].bundleType}
                            name={data[7].bundle}
                            content={data[7].bundleContent}
                            start={data[7].startDate}
                            end={data[7].endDate}
                            imgAsset={data[7].bundleContent[0].itemType.asset}
                            cost={data[7].bundleContent[0].cost}
                            item={data[7].bundleContent[0].itemType.name}
                            rarity={data[7].bundleContent[0].itemType.rarity}
                        />
                    </>
                ) : (<BarLoader color='white' />)
            }
            {/* <pre> {JSON.stringify(data, undefined, 2)} </pre> */}
        </div>
    );
}