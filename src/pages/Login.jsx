import React, { useState } from 'react'
import '../styles/login.css';
import { Link } from 'react-router-dom';
import Icon from '../utils/components/Icon';
import playstation from '../assets/images/playstation.png';
import pc from '../assets/images/pc.png';
import xbox from '../assets/images/xbox.png';
export default function Login() {
    const [usersList, setUsersList] = useState(JSON.parse(localStorage.getItem('userList')) || []);

    const removePlayer = (e, player) => {
        let oldList = usersList;
        let newList = [...oldList]; newList.splice(player, 1);
        localStorage.setItem('userList', JSON.stringify(newList));
        setUsersList(JSON.parse(localStorage.getItem('userList')) || []);
    }

    const UserDropdown = () => {
        return (
            <div className='users-select-dropdown'>
                <Link to={'/new'} className='user-listed-new'>
                    <Icon icon={'add_circle'} />
                </Link>
                {usersList.map((user, index) => {
                    return (
                        <div
                            key={user.id}

                            className='user-listed'>

                            <Link
                                to={`/home/${user.name}/${user.platform}`}
                                className='user-data'>
                                <img className='user-platform'
                                    src={user.platform === 'PS4' ? playstation :
                                        user.platform === 'PC' ? pc : xbox} />

                                {user.name}
                            </Link>

                            <Icon
                                className={'user-remove'}
                                icon={'delete'}
                                onClick={(e) => { removePlayer(e, index); }} />

                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className='login-page'>
            <header className='login-header'> Apex Tracker </header>
            <UserDropdown />
        </div>
    );
}


