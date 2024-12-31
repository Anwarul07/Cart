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


// Making Function ready   
function ready() {
    console.log('Hey Anwarul Bhai');
    let removeCartItemButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartItemButtons);
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem);
    }

    //Quantity Change Function in ready function
    let quantityInputs = document.getElementsByClassName('cart-quantity')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged);
    }

    // Add to cart in ready function
    let addToCartButtons = document.getElementsByClassName('cart-icon');
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked);
    }
    // Purchase Button in ready function
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
}

// Purchase Button Function
function buyButtonClicked() {
    let cartItems = document.getElementsByClassName('cart-content')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
    alert('Thank you for your purchase');
}


// individual function addToCartClicked
function addToCartClicked(event) {
    let button = event.target;
    let shopItem = button.parentElement;
    let title = shopItem.getElementsByClassName("product-title")[0].innerText;
    let price = shopItem.getElementsByClassName('price')[0].innerText;
    let imageSrc = shopItem.getElementsByClassName('product-img')[0].src
    console.log(title, price, imageSrc);
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}


// updateCartTotal Function indivisual
function updateCartTotal() {
    let cartContent = document.getElementsByClassName('cart-content')[0];
    let cartBoxes = cartContent.getElementsByClassName('cart-box');
    let total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName('cart-price')[0];
        let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;
        total = total + price * quantity;

        total = Math.round(total * 100) / 100;
        console.log(price * quantity);
        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
    }
    if (total == 0) {
        document.getElementsByClassName('total-price')[0].innerText = '$0';
    }
}






// Remove Cart Item Function indivisual    
function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateCartTotal()
}

// Quantity Change Function indivisual
function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}



// Add Item to Cart Function with price an dimage , tag indivisual
function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div');
    cartRow.classList.add('cart-box');
    let cartItems = document.getElementsByClassName('cart-content')[0];
    let cartItemNames = cartItems.getElementsByClassName('product-title');
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart');
            return;
        }
    }

    //in additemtocart function
    let cartRowContents = `<img src="${imageSrc}" alt="" class="cart-img">
                           <div class="detail-box">
                                <div class="product-title">${title}</div>
                                <div class="cart-price">${price}</div>
                                <input type="number" name="" id="" class="cart-quantity" value="1">
                            </div>
                            <!-- Remove cart  -->
                            <i class='bx bxs-trash-alt cart-remove'></i>`;


    //in additemtocart function
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);

}












