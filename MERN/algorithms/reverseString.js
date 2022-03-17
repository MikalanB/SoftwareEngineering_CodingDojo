//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!


const includesOverride = (arr, char) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === char){
            return true;
        }
    }
    return false;
}

const dedupe = (str) => {
    let newStr = "";
    for (let i = str.length-1; i >= 0; i--){
        if(!includesOverride(newStr,str[i])){
            newStr = str[i] + newStr;
        }
    }
    return newStr;
}

console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));

