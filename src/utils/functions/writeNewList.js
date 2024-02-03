export default function writeNewList() {
    navigator.clipboard.readText()
        .then((copied) => {
            localStorage.setItem('userList', copied);
        }).catch((error) => {
            console.error('Error reading from clipboard:', error);
        });
}