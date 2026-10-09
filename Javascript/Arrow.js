// const user = {
//     username: "Tanya",
//     price:900,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`)
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username = "Naman"
// user.welcomeMessage()
// console.log(this)


// function chai(){
//     let username = "Tanu"
//     console.log(this.username)
// }
// chai()

// const user = () =>{
//     let username = "Tanya"
//     console.log(this)
// }
// user()


// const add = (num1,num2) => {
//     return num1 + num2
// }


// const add = (num1,num2) => (num1 + num2)

// const addTwo = (num1,num2) => ({username:"Tanu"})

// console.log(add(5,6))
// console.log(addTwo(4,5))

(function IIFE(){
    console.log(`DB Connected`)
})();

(function chai(){
    console.log(`DNS Connected`)
})();

( (name) => {
    console.log(`DNS Connected ${name}`)
})("Tanu")