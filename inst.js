function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}
let value = generateRandomInteger(3);
let result1 = null;
let result2 = null;
let result3 = null;
if (value === 3) {
    result1 = "congratulations";
} else if (value === 2) {
    result2 = "congratulations";
} else {
    result3 = "congratulations";
}
function premium_1() {
    document.getElementById("display").innerHTML = result1;
}
function premium_2() {
    document.getElementById("display").innerHTML = result2;
}
function premium_3(){
    document.getElementById("display").innerHTML = result3;
}
