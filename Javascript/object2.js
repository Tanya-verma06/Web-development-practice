const prsn1 = {
    username:"Tanya",
    email:"tanu12@gmail.com",
    subscription:{
        netflix : "Gold",
        amazonprime : "basic",
        age:20
    },

    show:function showDetails(){
    return this.age
    }

}
console.log(prsn1.show())
const userInfo = prsn2.show()
console.log("This is prsn2 info : , userInfo")
prsn1.address="Agra"
console.log(prsn1.email)

delete prsn1.username
console.log(username)