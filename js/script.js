function calculateTip() {
    var billAmt = document.getElementById("billAmt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    //validate input
    if (billAmt === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }
    //Calculate tip
    var total = (billAmt * serviceQual);
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};