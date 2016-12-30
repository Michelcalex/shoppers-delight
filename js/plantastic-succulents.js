// THINGS TO KEEP IN MIND
// #1-Keep track of an array of all items in the shop, and generate all of the DOM elements using this array. 
//    This will help make useful click listeners on your 'add to cart' buttons.
// #2-Keep track of another array of items that are in the cart. When someone clicks 'add to cart', 
//    push to this array and render the 'cart' section of the page.
// #3-We're adding to arrays here so that its easy to find totals, etc. Find the total using the information 
//    in the cart array;
// #4-don't try to make the 'subtotal', 'tax', and 'total' fields harder than they have to be. Use the array.


let productItems = [
     {img: 'assets/succulent-1.jpeg',
     name: 'White Ursula',
     price: 7.99,
     id: 0},
     {img: 'assets/succulent-2.jpeg',
     name: 'Black Vader',
     price: 7.99,
     id: 1},
     {img: 'assets/succulent-3.jpeg',
     name: 'Yellow Armadillo',
     price: 7.99,
     id: 2},
     {img: 'assets/succulent-4.jpeg',
     name: 'Navi Cati-sailor',
     price: 8.99,
     id: 3},
     {img: 'assets/succulent-5.jpeg',
     name: 'Wood Planty-pot',
     price: 10.99,
     id: 4},
     {img: 'assets/succulent-6.jpeg',
     name: 'Stone Jone',
     price: 9.99,
     id: 5},
     {img: 'assets/succulent-7.jpeg',
     name: 'Wood Stumpy',
     price: 7.99,
     id: 6},
     {img: 'assets/succulent-8.jpeg',
     name: 'Stone Moon',
     price: 8.99,
     id: 7},
     {img: 'assets/succulent-9.jpeg',
     name: 'Stone Bloom',
     price: 10.99,
     id: 8},
]




window.addEventListener('load', function() {
    showProducts();
});



function showProducts() {
    let productContainer = document.querySelector('#products-container');
    let row;
    
    for (let i=0; i < productItems.length; i++) {

        if (i % 3 === 0) {
            row = document.createElement('div');
            row.classList.add('row-items');
            productContainer.appendChild(row);
        }
        
        let itemContainer = document.createElement('div');
        itemContainer.classList.add('items');

        itemContainer.innerHTML = Mustache.render (
            document.querySelector('#merchandise-template').innerHTML, 
            { imgsrc: productItems[i].img, productName: productItems[i].name, productPrice: productItems[i].price}
            );

        row.appendChild(itemContainer);
    }  
}