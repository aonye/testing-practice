//write a function that takes an array of numbers and returns an object

const analyze = (arr) => {
    if (checkArr(arr)) {
        let average = calcAvg(arr);
        let min = calcMin(arr);
        let max = calcMax(arr);
        let length = arr.length;
        return {
            average,
            min,
            max,
            length,
        };
    }
    return;
}

function checkArr(arr) {
    if (Array.isArray(arr)) { //must be an array
        for (let i = 0; i < arr.length; i++) { //erroneous vals in arr
            if (parseFloat(arr[i]) != arr[i]) {
                return false;
            }
        }
        if (arr.length === 0) { //must not be empty
            return false;
        }

        return true;
    }
    return false;
}

function calcAvg(arr) {
    return arr.reduce((accumulator, currentVal) => {
        return accumulator + (currentVal / arr.length);
    }, 0);
}

function calcMax(arr) {
    return arr.reduce((acc, currentVal) => {
        if (isNaN(parseFloat(acc))) {
            acc = currentVal;
        }
        return currentVal > acc ? currentVal : acc;
    }, NaN);
}

function calcMin(arr) {
    return arr.reduce((acc, currentVal) => {
        if (isNaN(parseFloat(acc))) {
            acc = currentVal;
        }
        return currentVal < acc ? currentVal : acc;
    }, NaN);
}

export default analyze;