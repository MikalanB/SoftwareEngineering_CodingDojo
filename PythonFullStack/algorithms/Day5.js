// var money = 100
function convertCoinChange(money) {
    var quarter = 25
    var penny = 1
    var dime = 10
    var nickel = 5
    totalCoinChange = []
    if (Number.isInteger(money) == true && money % 1 == 0) {
        var largest_convert = Math.floor(money/quarter);
        var remainder = money % quarter;
        totalCoinChange.push("Quarters: " + largest_convert)
        if (remainder != 0) {
            numDimes = Math.floor(remainder / dirdime);
            remainder_dime = remainder % dime;
            totalCoinChange.push("Dime: " + numDimes)
            if (remainder_dime != 0) {
                numNickels = Math.floor(remainder_dime / nickel);
                remainder_nickel = remainder_dime % nickel;
                totalCoinChange.push("Nickel: " + numNickels)
                if (remainder_nickel != 0) {
                    numPenny = Math.floor(remainder_nickel / penny); 
                    totalCoinChange.push("Penny: " + numPenny)    
                } 
            }
        }
        return totalCoinChange  
    }
    return "Error, you did not enter an integer! Please try again!"
}

console.log(convertCoinChange(621))