const products = [
    { name: "Laptop", category: "Electronics", price: 1000, stock: 4 },
    { name: "Shirt", category: "Apparel", price: 20, stock: 10 },
    { name: "Coffee Maker", category: "Appliances", price: 100, stock: 3 },
    { name: "Book", category: "Stationery", price: 15, stock: 20 },
    { name: "Mobile", category: "Electronics", price: 2000, stock: 5},
    { name: "Refrigerator", category: "Appliances", price: 5000, stock: 0}
    ];


//1. **Filter by Category**:    
let catFilteredArray = products.filter(function(product){
    return product.category.includes('Electronics');
});

console.log(catFilteredArray);

//2. **Filter by Price Range**:
let priceFilteredArray = products.filter(function(product){
    return product.price >= 1000 && product.price <= 2500;  //return products whose price is between 1000 and 2500

console.log(priceFilteredArray);

//3. **Filter Out of Stock Products**:

let instockfilteredlist = products.filter(function(product){
    return product.stock > 0; //retruns products which are in stock
});

console.log(instockfilteredlist);