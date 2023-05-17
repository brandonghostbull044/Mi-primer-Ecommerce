const emailsel = document.querySelector('.emailsel');

const menuEmail = document.querySelector('.desktop__menu--container')

const HamMsel = document.querySelector('.menu-Hamburger');

const menuMobile = document.querySelector('.categories__list--container')

const closeMsel = document.querySelector('.close-menu');

const itemsContainerCards = document.querySelector('.items__container--cards');



emailsel.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
     menuEmail.classList.toggle('inactive');
}


HamMsel.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    menuMobile.classList.toggle('inactive');
}


closeMsel.addEventListener('click', removeMobileMenu);

function removeMobileMenu() {
    menuMobile.classList.add('inactive');
}

const productList = [];


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

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('card__item--container');
        
    
        const img = document.createElement('div');
        img.classList.add('card__item--image');
    
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
}