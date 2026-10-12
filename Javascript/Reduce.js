const mynums = [1,2,3,4,5]

// const mytotal = mynums.reduce(function (acc,currval) {
//     return acc + currval
// },0)

// console.log(mytotal)


// const mytotal = mynums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// },2)

//console.log(mytotal)

const mytotal = mynums.reduce( (acc,curr) => acc+curr , 0)

console.log(mytotal)

const shoppingcart = [
    {
        itemName:"js course",
        price:10000
    },

     {
        itemName:"AI course",
        price:4999
    },

     {
        itemName:"dev course",
        price:12999
    }
]

const pricetopay = shoppingcart.reduce( (acc,item) => acc + item.price , 0)

console.log(pricetopay)