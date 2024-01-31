import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
export default function Navbar({ title, action }) {
    return (
        <nav className='top-nav-bar'>
            <header className='nav-header'>{title}</header>
            <div>
                <Icon className={'nav-link'} icon={'refresh'} onClick={action} />
                <Link to={'/login'}>
                    <Icon className={'nav-link'} icon={'login'} />
                </Link>
            </div>
        </nav>
    );
}