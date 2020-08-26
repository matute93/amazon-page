let addToCart = document.querySelector('.add');
let cartnum = document.querySelector('.cartNum');

function counter(){
    cartnum.textContent++
}
addToCart.addEventListener('click', counter)

