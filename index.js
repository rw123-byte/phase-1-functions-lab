// Code your solution in this file!
// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    var distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) {
        return 'cannot travel that far';
    }
    if (distance < 400) {
        return 0;
    } else if (distance < 2000) {
        return (distance - 400) * 0.02;
    } else {
        return 25;
    }
}