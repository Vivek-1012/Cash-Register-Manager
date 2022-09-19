const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const availableNotes = [2000, 500, 100, 20,10,5,1];
const noOfNotes = document.querySelectorAll(".no-of-notes")
checkButton.addEventListener("click", function validateBillAndCashAmount() {
   
   hideMessage();
   if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
            showMessage("Total change to be returned : " + amountToBeReturned )
        } else {
            showMessage(
                "Do you wanna wash plates?");
   } } else {
       showMessage("Invalid Bill Amount");
   } 
});
// processing part
 function calculateChange(amountToBeReturned) {
    //go all the availabe 
     for(let i = 0; i < availableNotes.length; i++) {
       // no over all the available for the denomination
        const numberOfNotes = Math.trunc(
        amountToBeReturned / availableNotes[i])
     ;
    // amount left after cal the number of notes needed
     amountToBeReturned = amountToBeReturned % availableNotes[i];
     noOfNotes[i].innerText = numberOfNotes; 
     }
 
    }

 function hideMessage () {
    message.style.display = "none";
 }

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

// 
