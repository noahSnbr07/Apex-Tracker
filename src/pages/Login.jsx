import React from 'react'
import '../styles/login.css';
import users from '../assets/libs/users.json'
import { Link } from 'react-router-dom';
export default function Login() {
    const usersList = [...users];
    console.log(usersList);
    const UserDropdown = (users) => {

        return (
            <div className='users-select-dropdown'>
                {usersList.map((user) => {
                    return (
                        <Link
                            key={user.id}
                            to={`/home/${user.name}`}
                            className='user-listed'
                        >
                            {user.name}
                        </Link>
                    )
                })}
            </div>
        )
    }
    return (
        <div className='login-page'>
            <header className='login-header'> Apex Tracker </header>
            <UserDropdown />
        </div>
    );
}
