const myCheckBox = document.getElementById("myCheckBox");
const visaCard = document.getElementById("visaCard");
const masterCard = document.getElementById("masterCard");
const paypal = document.getElementById("paypal");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function (){
    if(myCheckBox.checked){
        subResult.textContent = "You have subscribed to the channel";
    }else {
        subResult.textContent = "You have not subscribed to the channel";
    }

    //for the radio buttons..

    if(visaCard.checked){
        paymentResult.textContent = "You choose VISA for payment";
    }else if(masterCard.checked){
        paymentResult.textContent = "You choose MasterCard for payment";
    }else if(paypal.checked){
        paymentResult.textContent = "You choose paypal for payment";
    }else{
        paymentResult.textContent = "You should choose payment method";
    }
}
