//clock angles!!!!

//given a number of minutes past midnight, determine
//the angle between the hour and minute hands at that point in time
//keep in mind that on an analog clock, the hour hand is
//not perfectly aligned with the number hour
//e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5

const clockAngles = (minutes) => {
    let hour = minutes/60;

    let left = minutes%60; 

    let hourdeg = hour30; //3

    let mindeg = left6; //5

    // console.log(hourdeg, mindeg)

    let value = Math.abs((hourdeg-mindeg))%360;

    return value;

}
// each hour is 30 deg, adn each min is 6 deg 

console.log(clockAngles(360));
console.log(clockAngles(180));
console.log(clockAngles(210));
console.log(clockAngles(588));
console.log(clockAngles(980));
console.log(clockAngles(361));