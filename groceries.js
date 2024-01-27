	

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},

	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.35
	},

	{
		name: "pizza",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 2.35
	},

	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.35
	},

	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.35
	},

	{
		name: "kibbeh",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 2.35
	},

	{
		name: "shawarma",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 2.35
	},

	{
		name: "eggplants",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.35
	},

	{
		name: "Steak",
		vegetarian: false,
		glutenFree: false,
		organic: true,
		price: 20.35
	},

	{
		name: "Cola",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.35
	},

	{
		name: "Tuna",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00
	}
];
	


function restrictListProducts(prods, restriction) {
    let product_names = [];

    for (let i = 0; i < prods.length; i += 1) {
        if (restriction === "Vegetarian" && prods[i].vegetarian === true) {
            product_names.push(prods[i].name);
        } else if (restriction === "GlutenFree" && prods[i].glutenFree === true) {
            product_names.push(prods[i].name);
        } else if (restriction === "organic" && prods[i].organic === true) {
            product_names.push(prods[i].name);
        } else if (restriction === prods[i].organic === false) {
            product_names.push(prods[i].name);
        } if (restriction === "None") {
            product_names.push(prods[i].name);
        }
    }

    return product_names;
}




function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
