
let dollars = 100;
let quarters = 25;
let dimes = 10;
let nickels = 5;

function calculateChange(){
    
    const salesPrice = document.getElementById("amount-due").value;
    let amountPaid = document.getElementById("amount-received").value;
    let changeGiven = (amountPaid - salesPrice) *100;

    dollars = Math.floor(changeGiven/100);
    changeGiven %= 100;
    document.getElementById("dollars-output").innerHTML = dollars;

    quarters = Math.floor(changeGiven/ 25);
    changeGiven %= 25;
    document.getElementById("quarters-output").innerHTML = quarters;

    dimes = Math.floor(changeGiven/10);
    changeGiven %= 10;
    document.getElementById("dimes-output").innerHTML = dimes;

    nickels = Math.floor(changeGiven/ 5);
    changeGiven %= 5;
    document.getElementById("nickels-output").innerHTML = nickels;

    let pennies = changeGiven >= 0 ? Math.round(changeGiven) : 0;
    document.getElementById("pennies-output").innerHTML = pennies;
    

}
document.getElementById("calculate-change").addEventListener("click", calculateChange);