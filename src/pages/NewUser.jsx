import React, { useState } from 'react';
import '../styles/newuser.css';
import Icon from '../utils/components/Icon';
import { Link } from 'react-router-dom';
export default function NewUser() {
    const platforms = [
        {
            "short": "PS4",
            "long": "PlayStation 4 / 5"
        }, {
            "short": "X1",
            "long": "Xbox"
        }, {
            "short": "PC",
            "long": "PC"
        }
    ];
    const [userName, setuserName] = useState('');
    const [userPlat, setUserPlat] = useState('');
    const [platIndex, setPlatIndex] = useState(0);

    const updateUsername = (e) => { setuserName(e.target.value); }
    const cyclePlat = (index) => {
        if (index >= platforms.length) { setPlatIndex(0); }
        else {
            setPlatIndex(pI => pI + 1);
            setUserPlat(platforms[index]);
            setUserPlat(platforms)
        }
    }

    const addUser = () => {
        const oldList = JSON.parse(localStorage.getItem('userList'));
        const newList = [...oldList];
        newList.push({ id: oldList.length, name: userName, platform: platforms[platIndex].short });
        localStorage.setItem('userList', JSON.stringify(newList));
    }

    return (
        <div className='newuser-page'>
            <header className='newuser-header'> Add New User </header>
            <input
                autoFocus
                className='newuser-tab'
                type='text'
                placeholder='username'
                value={userName}
                onChange={(e) => updateUsername(e)}
            />
            <div
                className='newuser-tab'
                onClick={() => { cyclePlat(platIndex + 1) }}>
                {platforms[platIndex].long}
            </div>
            <Link
                to={'/login'}
                onClick={() => { addUser(); }}
                className='newuser-tab'
            >
                <Icon icon={'add_circle'} />
            </Link>
        </div>
    );
}