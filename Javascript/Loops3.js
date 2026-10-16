// Arrays Loop

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num)
    
// }

// const greetings = "Hello world"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
    
// }

//Maps

// const map = new Map()
// map.set('IN',"India")
// map.set('EN',"England")
// map.set('AU',"AUSTRALIA")

//console.log(map)

// for (const [key,value] of map) {
//     console.log(key, ':' ,value)
    
// }


// let branch = ["CSS","IT","ECE"]
// branch.newbranch = "AIML"
// for (const b of branch) {
//     console.log(b);
    
// }



const myobj = {
    name:{
        firstname:"Tanya",
        lastname:"Verma"
    },
    subjects:{
        sub1:"DSA",
        sub2:"fullstack",
        sub3:"cloud",
    },
    course:"Btech CSE",
    College:"GLA University",
    email:"tannuverma@gmail.com",
    Rollno:2415001674,
    Address:"Mathura",

}

for (let key in myobj) {
    console.log(key, ":", myobj[key]);
}
