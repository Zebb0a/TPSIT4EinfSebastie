let value1;
let value2;
let operator;

function getValues() {
    value1 = parseFloat(document.getElementById("value1").value)
    value2 = parseFloat(document.getElementById("value2").value)
}

function add() {
    getValues()
    document.getElementById("result").innerHTML = String(value1 + " + " + value2 + " = " + parseFloat(value1+value2))
}

function sott() {
    getValues()
    document.getElementById("result").innerHTML = String(value1 + " - " + value2 + " = " + parseFloat(value1-value2))
}

function molt() {
    getValues()
    document.getElementById("result").innerHTML = String(value1 + " * " + value2 + " = " + parseFloat(value1*value2))
}

function divi() {
    getValues()
    document.getElementById("result").innerHTML = String(value1 + " / " + value2 + " = " + parseFloat(value1/value2))
}
