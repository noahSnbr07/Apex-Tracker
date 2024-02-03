export default function copyClipboard(obj) {
    JSON.parse(obj);
    navigator.clipboard.writeText(obj).catch((error) => {
        console.error('Error copying array to clipboard:', error);
    });
}