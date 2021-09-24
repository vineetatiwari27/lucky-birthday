var day = document.querySelector("#bday");
var lucky = document.querySelector("#num");
var inputGiven = document.querySelector("#check");
var conc = document.querySelector("#conclusion");
inputGiven.addEventListener("click", function luckyOrNot() {
    hiddenMessage();
    var input = day.value;
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        const numB = parseInt(input.charAt(i));
        if (!isNaN(numB)) {
            sum += numB;
        }
    }
    var luckyNumber = lucky.value;
    if (sum % luckyNumber == 0) {
        finalMessgae(luckyNumber + " is a lucky number!!")
    }
    else {
        finalMessgae("Not that lucky :(")
    }
})
function hiddenMessage() {
    conc.style.display = "none";
}
function finalMessgae(msg) {
    conc.style.display = "block";
    conc.innerText = msg;
}