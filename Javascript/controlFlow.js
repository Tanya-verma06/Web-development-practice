// const score = 200

// if(score > 100){
//     var power = "Fly"
//     console.log(`User power : ${power}`)
// }
// console.log(`User power : ${power}`)

// const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2")


// const balance = 1000

// if(balance < 500){
//     console.log("greater than 500")
// }
// else if(balance < 750){
//     console.log("less than 750")

// }
// else{
//     console.log("less than 1200")
// }

const userLogged = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLogged && debitCard){
    console.log("Allow to buy dress")
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}