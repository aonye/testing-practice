//try and use an array method and not a for loop

const reverseString = (str) => {
    if (isString(str) && str) {
        let arr = str.split('');
        arr = arr.reduce((newArr, currentVal) => {
            return [currentVal].concat(newArr);
        }, []);
        return arr.join('');
    } else {
        return str;
    }
};

function isString(str) {
    if (typeof str === 'string') {
        return true;
    } else {
        return false;
    }
}

module.exports = reverseString;