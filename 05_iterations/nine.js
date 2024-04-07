
const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//      return acc * currval
// } , 1)

const myTotal = myNums.reduce( (acc, curr) => acc * curr, 1 )

// console.log(myTotal);




const ShoppingCart = [
    {
        itemName: "iPhone",
        price: 148000
    },
    {
        itemName: "Jordans",
        price: 50000
    },
    {
        itemName: "T-shirts",
        price: 4999
    },
]

const priceToShopppingCart = ShoppingCart.reduce( (acc, item) => acc + item.price ,0 )

console.log(priceToShopppingCart);