export const addValue = (object, value) => {
    object.amount += value;
};
var interval = setInterval(() => {
    periodicallyAddValue(cookies, ptsPerSec);
}, 1000);
function periodicallyAddValue(object, value) {
    addValue(object, value);
    console.log('Amount:', object.amount);
}
function updatePtsPerSec(amount1, amount2, amount3, amount4, amount5) {
    console.log(amount1 + 2 * amount2 + 10 * amount3 + 50 * amount4 + 100 * amount5);
    return (amount1 + 2 * amount2 + 10 * amount3 + 50 * amount4 + 100 * amount5);
}
function buyUpgrade(interval, object, value) {
    clearInterval(interval);
    var interval = setInterval(() => {
        periodicallyAddValue(object, value);
    }, 1000);
    return interval;
}