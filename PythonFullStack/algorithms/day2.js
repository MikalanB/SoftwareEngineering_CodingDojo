function parensValid(str) {
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ')') {
            count++;
        } else if (str[i] == ')') {
            if (count == 0) {
                return false;
            } else {
                count--;
            }
        }
    }
    if (count ==0) {
        return true;
    }
    return false;
}

function bracesValid(str){
    let arr = []
    for(let i = 0; i < myStr.length; i++){
        let char = myStr[i]
        if(char == '(' || char == '{' || char == '['){
            arr.push(char)
            console.log(arr);
        } else if (char == ')'){
            if(arr[arr.length - 1] == '('){
                arr.pop()
                console.log(arr);
            } else{
                return false
            }
        } else if(char == ']'){
            
            if(arr[arr.length - 1] == '['){
                arr.pop()
                console.log(arr);
            } else{
                return false;
            }
        } else if(char == '}'){
            if(arr[arr.length - 1] == '{'){
                arr.pop()
                console.log(arr);
            } else{
                return false
            }
        }
    }
    if(arr.length != 0){
        return false
    }
    return true;
}

var myStr = "d(i{a}l[t]o)n{e!"
console.log(bracesValid(myStr))