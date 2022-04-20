//take in a string representing an int in hexadecimal 
//notation and return the value in decimal notation
// given "1D2", return 466
const hexStrToDec = (str) => {
    power = 0
    decimal = 0
    var obj = {
        A : 10,
        B: 11,
        C: 12,
        D : 13,
        E : 14,
        F: 15,
    }
    for (var i = str.length-1; i >= 0; i--) { 
        if(str[i] in obj) {
            decimal += obj[str[i]] * Math.pow(16, power);
            power++;
            // console.log(str)
        } else {
            decimal += parseInt(str[i]) * Math.pow(16, power);
            power++;
        }
    }
    return decimal;
}

console.log(hexStrToDec("1D2"));
console.log(hexStrToDec("2C1"));
// console.log(hexStrToDec("3B5"));
// console.log(hexStrToDec("FFF"));

//given an integer, return a string representing the 
//hexadecimal value
//given 108, return "6C"
const decToHexStr = (val) => {
    var obj = {
        A : 10,
        B: 11,
        C: 12,
        D : 13,
        E : 14,
        F: 15,
    }
}

// console.log(decToHexStr(108));
// console.log(decToHexStr(420));