import themes from '../../assets/libs/themes.json';
export default function setTheme(theme) {
    document.documentElement.style.setProperty('--accent', themes[theme].color);
}