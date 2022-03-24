// Code your solution in this file!
const ft = 43
function distanceFromHqInBlocks(headQuarter) {
    return Math.abs(42-headQuarter)
}
function distanceFromHqInFeet(headQuarter) {
    const blocks = distanceFromHqInBlocks(headQuarter);
    return blocks * 264;
}
function distanceTravelledInFeet(begin, last) {
    const distance = Math.abs(begin-last)
    return distance * 264;
}
function calculatesFarePrice(begin, last) {
    const travelled = distanceTravelledInFeet(begin, last);
    if (travelled > 400 && travelled < 2000){
        console.log(travelled)
        return (travelled - 400) * 2 / 100
    }   else if (travelled > 2000 && travelled < 2500) {
        return 25;
    }   else if (travelled < 400) {
        return 0;
    }   else if (travelled > 2500) {
        return "cannot travel that far";
    }
}