/*const newArray = array.map((currentValue, index, array) => {
    // return element for newArray, based on currentValue
  });
*/
const vanmanShop = [
    {
        name : "Gift Card",
        price : 1400,
    },
    {
        name : "Cotton Hat",
        price : 4000,
    },
    {
        name : "Jumbo 6 oz",
        price : 8800,
    },
    {
        name : "Beeswax Lip Balm",
        price : 700,
    },
    {
        name : "Honey Soap",
        price : 1900,
    },
    {
        name : "Protection Oils Hair Serum",
        price : 2300,
    },
    {
        name : "Peppermint Aloe Mouth Rinse 8oz",
        price : 2000,
    },
    {
        name : "Miracle Tooth Powder",
        price : 2100,
    }
];
let discountOnProducts = vanmanShop.map((product) => ({
    name : product.name,
    discountedPrice : product.price - (product.price*0.15),
}))
console.log(vanmanShop);
console.log(discountOnProducts);
//console.table([vanmanShop, discountOnProducts], ['Name', 'Original Price', 'Discounted Price']);

