const movie ={
    customerName: "Tanya" ,
    movieName: "Dhurandhar",
    ticketPrice: 200 ,
    quantity: 5 ,

    customerDetails:{
        email: "khushi@gmail.com" ,
        city :"Kanpur" ,
    },
    seats: ["A1" , "B1" , "C1"],

    calculateTotalAmount : function(){
        return this.ticketPrice*this.quantity;
    }
}

console.log(movie.movieName);

//customers city
console.log(movie.customerDetails.city);


movie.ticketPrice=250;
movie.bookingStatus ="confirmed";

console.log(Object.keys(movie));

let { movieName, quantity } = movie;
console.log(movieName, quantity);
console.log(movie.calculateTotalAmount());