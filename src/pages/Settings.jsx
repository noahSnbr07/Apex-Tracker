import React, { useState, useEffect } from 'react'
import '../styles/settings.css';
import Navbar from '../utils/components/Navbar';
import Icon from '../utils/components/Icon';
import writeNewList from '../utils/functions/writeNewList';
import copyClipboard from '../utils/functions/copyClipboard';
import themes from '../assets/libs/themes.json';
export default function Settings() {
    const [localProfile] = useState(JSON.parse(localStorage.getItem('userList')));
    const [currentColor, setCurrentColor] = useState(localStorage.getItem('theme'));

    useEffect(() => {
        localStorage.setItem("theme", currentColor);
        document.documentElement.style.setProperty('--accent', themes[currentColor].color);
    }, [currentColor]);

    const PortProfile = ({ name, ...props }) => {
        return (
            <div {...props} onCanPlay={() => { evalState(icon) }} className='portprofile'>
                <p>{name}</p>
            </div>
        );
    }

    const ThemePicker = () => {
        const cycleTheme = () => { setCurrentColor((prevIndex) => (prevIndex + 1) % themes.length); };

        return (
            <div onClick={() => { cycleTheme(currentColor + 1) }} className='theme-picker'>
                <p>  theme: {themes[currentColor].name}  ({themes[currentColor].id + 1} / {themes.length}) </p>
            </div>
        );
    }

    return (
        <div className='settings-page'>
            <Navbar title={'Settings'} />
            <main className='settings-main'>
                <PortProfile onClick={() => { writeNewList() }} name={'Import Profile'} />
                <PortProfile onClick={() => { copyClipboard(JSON.stringify(localProfile)) }} name={'Export Profile'} />
                <ThemePicker />
            </main>
        </div>
    );
}