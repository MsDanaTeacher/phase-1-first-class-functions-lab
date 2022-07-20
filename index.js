const returnFirstTwoDrivers = array => {
    return array.slice(0,2);
}

const returnLastTwoDrivers = array => {
    return array.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (integer) {
    return function price(fare) {
        return fare * integer;
    }
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(array, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(array);
}