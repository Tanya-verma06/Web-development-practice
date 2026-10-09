// function sayMyName(){
//     console.log("T")
//     console.log("A")
//     console.log("N")
//     console.log("Y")
//     console.log("A")
// }
// sayMyName()

// function sum(num1 , num2){
//     console.log(num1+num2)
    
// }
// sum(5,10)

// function sum(num1 , num2){
//     let result = num1 + num2
//     return result
    
// }
// const result = sum(5,8)
// console.log("Result:" , result)

function loginUser(username = "Naman"){
    if(!username){
        console.log("Please enter a username")
        return

    }
    return `${username} just logged in`
}
console.log(loginUser())






