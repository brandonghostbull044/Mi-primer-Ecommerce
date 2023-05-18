const emailsel = document.querySelector('.emailsel');
const menuEmail = document.querySelector('.desktop__menu--container')
const HamMsel = document.querySelector('.menu-Hamburger');
const menuMobile = document.querySelector('.categories__list--container')
const closeMsel = document.querySelector('.close-menu');
const itemsContainerCards = document.querySelector('.items__container--cards');
const productList = [];
const iconShopCart = document.querySelector('#icon-shop-cart');
const shopCart = document.querySelector('.shopCart');
const itemInfoContainer = document.querySelector('.product__info--container');




function toggleShopCart() {
    if (!menuMobile.classList.contains('inactive')) {
        menuMobile.classList.add('inactive')
    } else if (!menuEmail.classList.contains('inactive')) {
        menuEmail.classList.add('inactive');
    } else if (!itemInfoContainer.classList.contains('inactive')) {
        itemInfoContainer.classList.add('inactive');
    }
    shopCart.classList.toggle('inactive');
}
function toggleMobileMenu() {
    if (!shopCart.classList.contains('inactive')) {
        shopCart.classList.add('inactive')
    }
    menuMobile.classList.toggle('inactive');
}




emailsel.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    if (!shopCart.classList.contains('inactive')) {
        shopCart.classList.add('inactive');
    } else if (!itemInfoContainer.classList.contains('inactive')) {
        itemInfoContainer.classList.add('inactive');
    }
     menuEmail.classList.toggle('inactive');
}


HamMsel.addEventListener('click', toggleMobileMenu);



closeMsel.addEventListener('click', removeMobileMenu);
function removeMobileMenu() {
    menuMobile.classList.add('inactive');
}


iconShopCart.addEventListener('click', toggleShopCart);



productList.push({
    namme: "refrigerator",
    precio: 120,
    image: "/images/retro-refrigerator.jpg"
});
productList.push({
    namme: "computador",
    precio: 500,
    image: "/images/retro-refrigerator.jpg"
});
productList.push({
    namme: "auto",
    precio: 5000,
    image: "/images/retro-refrigerator.jpg"
});
productList.push({
    namme: "refrigerator",
    precio: 120,
    image: "/images/retro-refrigerator.jpg"
});
productList.push({
    namme: "computador",
    precio: 500,
    image: "/images/retro-refrigerator.jpg"
});
productList.push({
    namme: "auto",
    precio: 5000,
    image: "/images/retro-refrigerator.jpg"
});
for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('card__item--container');
    

    const img = document.createElement('div');
    img.classList.add('card__item--image');
    img.addEventListener('click', toggleProductInfo)
    function toggleProductInfo() {
        if (!shopCart.classList.contains('inactive')) {
            shopCart.classList.add('inactive');
        } else if (!menuMobile.classList.contains('inactive')) {
            menuMobile.classList.add('inactive');
        } else if (!menuEmail.classList.contains('inactive')) {
            menuEmail.classList.add('inactive');
        }
        console.log('sirve');
        itemInfoContainer.classList.toggle('inactive');
    }

    const sect = document.createElement('section');
    sect.classList.add('card__item--details');
    

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.precio;

    const productName = document.createElement('span');
    productName.innerText = product.namme;

    const productButton = document.createElement('button');
    
    sect.appendChild(productPrice);
    sect.appendChild(productName);
    sect.appendChild(productButton);
    productCard.appendChild(img);
    productCard.appendChild(sect);
    itemsContainerCards.appendChild(productCard);
}


