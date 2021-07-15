const capitalize = (str) => {
    if (isString(str) && str) { //must be a string and not empty
        let arr = str.split('');
        arr[0] = arr[0].toUpperCase();
        str = arr.join('');
        return str;
    } else {
        return str;
    }
}

function isString(str) {
    if (typeof str === 'string') {
        return true;
    } else {
        return false;
    }
}

module.exports = capitalize;