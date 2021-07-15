const caesarCipher = (str, shiftAmt) => {
    let arr = [];
    //use ascii table
    if (str && shiftAmt) {
        for (let i = 0; i < str.length; i++) {
            let asciiVal = str.charCodeAt(i);
            let type = shiftByType(asciiVal, shiftAmt);
            arr.push(String.fromCharCode(type));
        }
        return arr.join('');
    }
    return;
};

function shiftByType(val, shift) {
    if (val >= 97 && val <= 122) { //lowercase
        return processShift(97, 122, val, shift, 'letter');
    }
    else if (val >= 65 && val <= 90) { //uppercase
        return processShift(65, 90, val, shift, 'letter');
    }
    else if (val >= 48 && val <= 57) { //number
        return processShift(45, 57, val, shift, 'number');
    } else {
        return val;
    }
}

function processShift(botLim, topLim, val, shift, type) {
    val = val + shift;
    while (!(val >= botLim && val <= topLim)) {
        if (type === 'letter') {
            val -= 26;
        }
        else if (type === 'number') {
            val -= 10;
        }
    }
    return val;
}

module.exports = caesarCipher;
