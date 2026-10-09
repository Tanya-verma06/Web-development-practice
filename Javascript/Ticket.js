let tickets = 5;
let age = 20;
let price = 1000;


let amount = tickets*price

function checkBooking(){
    if(age > 18){
        if(tickets > 3){
            amount = amount - 50;
        }
        console.log("You are eligible")
    }
    else{
        console.log("You are not  eligible")
    }  
     
}
