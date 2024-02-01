export default function makeReadable(string) {
    let newStr = string.replace(/_/g, ' ');
    newStr = newStr[0].toUpperCase() + newStr.slice(1);
    return newStr;
}