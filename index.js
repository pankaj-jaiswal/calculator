debugger;
var emptyValue = "";
const useinp = document.getElementById('useinp');
const  compout= document.getElementById('compout');
function cal(value) {
    emptyValue += value;
    useinp.value = emptyValue;
}
function removech() {
    emptyValue = emptyValue.substring(0, emptyValue.length - 1);
    useinp.value = emptyValue;
}
function equalbtn() {
    if (emptyValue.length == 0 || emptyValue == "") {
        alert("Needs a input");
        return;
    }
    try {
        ans = eval(emptyValue);
        compout.value = ans;
    }
    catch (err) {
        alert("Invalid Input");
    }
}
function reset() {
    useinp.value = "";
    compout.value = "";
    emptyValue = "";
}