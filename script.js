// console.log('Hello, world!');

// cart active 

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cartt');
let closeCart = document.querySelector('.close-cart');


cartIcon.onclick = function () {
    cart.classList.add('active');
}


closeCart.onclick = function () {
    cart.classList.remove('active');
}

// cart working js  
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}















