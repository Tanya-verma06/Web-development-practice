const coding = ["js" ,"ruby","java","py"]

// coding.forEach( function (item) {
//     console.log(item)
// })

// coding.forEach( (item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr)
// })

const myCoding = [
    {
        langaugeName: "java",
        languageFileName:"java"
    },
    {
        langaugeName:"python",
        languageFileName:"python"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.langaugeName)
})