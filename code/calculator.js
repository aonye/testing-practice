const calculator = {
    add: function (a, b) {
        if (this.isNum(a, b)) {
            return parseFloat(a) + parseFloat(b);
        }
    },
    subtract: function (a, b) {
        if (this.isNum(a, b)) {
            return a - b;
        }
    },
    multiply: function (a, b) { //no rounding, let tests check
        if (this.isNum(a, b)) {
            return a * b;
        }
    },
    divide: function (a, b) { //no rounding
        if (this.isNum(a, b)) {
            return a / b;
        }
    },
    isNum: function (a, b) {
        if (parseFloat(a) == a && parseFloat(b) == b) {
            return true;
        } else {
            return false;
        }
    }
};

module.exports = calculator;