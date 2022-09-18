/* silder images */

let imgCollection = document.getElementsByClassName('product');
let images = [];

_.each(imgCollection, element => {
    images.push(element.src);
});


let products = document.querySelector('.slider-images');


function changeImg() {

    let nextImg = document.querySelector('.fa-circle-chevron-right');
    let prevImg = document.querySelector('.fa-circle-chevron-left');

    let imageIndex = 1;

    nextImg.addEventListener('click', () => {
        imageIndex++;
        if(imageIndex === images.length) {
            imageIndex = 1;
        }
        products.innerHTML = `<img src = '${images[imageIndex]}' alt = "Product Image" class = "product">`;
    });
    
    
    
    prevImg.addEventListener('click', () => {
        imageIndex--;
        if(imageIndex <= 0) {
            imageIndex = images.length - 1;
        }
        products.innerHTML = `<img src = '${images[imageIndex]}' alt = "Product Image" class = "product">`;
    
    });

}

changeImg();


/* number of items for adding to cart */

let itemNumber = document.querySelector('.item-number');

let increaseItems = document.querySelector('.add');

increaseItems.addEventListener('click', () => {
    let itemValue = Number(itemNumber.innerText);
    itemValue++;
    itemNumber.innerText = itemValue;
});

let decreaseItems = document.querySelector('.reduce');

decreaseItems.addEventListener('click', () => {
    let itemValue = Number(itemNumber.innerText);
    itemValue--;
    if(itemValue < 0) {
        return;
    }
    itemNumber.innerText = itemValue;
});

/* sidebar */

let dropdown = document.querySelector('.dropdown');

let sidebar = document.querySelector('.mobile-hidden');

let overlay = document.querySelector('.overlay');


dropdown.addEventListener('click', () => {
    sidebar.style.display = "block";
    overlay.style.display = "block";
})

let closeDropdown = document.querySelector('.close-dropdown');

closeDropdown.addEventListener('click', () => {
    sidebar.style.display = "none";
    overlay.style.display = "none";
});

/* shopping cart */


let getNo = document.querySelector('.number');

let addPrice = document.querySelector('.your-item');

let addToCart = document.querySelector('.add-to-cart');

let getPrice = document.querySelector('.total-price');

let checkout = document.querySelector('.checkout');

let showCart = document.querySelector('.show-cart');

let text = document.querySelector('.empty-cart');
text.style.display = 'none';

function updateCart() {
    let itemNo = Number(itemNumber.innerText);

    if(itemNo > 0) {
        text.style.display = 'none';
        addPrice.style.display = 'flex';
        checkout.style.display = 'flex';
        getPrice.innerHTML = `$125 x ${itemNo} <span class = 'bold'> $${125 * itemNo}</span>`;
        getNo.style.display = "inline";
        getNo.innerText = `${itemNo}`;
     } else {
        text.style.display = 'block';
        addPrice.style.display = 'none';
        checkout.style.display = 'none';
        getNo.style.display = 'none';
    }
}

addToCart.addEventListener('click', () => {
    updateCart();
})

let deleteItems = document.querySelector('.delete');

deleteItems.addEventListener('click', () => {
    text.style.display = 'block';
    addPrice.style.display = 'none';
    checkout.style.display = 'none';
    getNo.style.display = 'none';
    itemNumber.innerText = '0';
})

let cartIcon = document.querySelector('.fa-cart-shopping');

let count = 0;

cartIcon.addEventListener('click', ()=> {
    count++;    
    if(count % 2 !== 0) {
        showCart.style.display = 'flex';
    } else {
        showCart.style.display = 'none';
    }
    updateCart();
});


/* setting up height for responsive screen */

let vh = document.documentElement.scrollHeight;


// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);




window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = document.documentElement.scrollHeight;


    /* remove desktop overlay if width is less than 1000px */
    let width = document.documentElement.scrollWidth;
    if(width < 1000) {
        closingFunc();
    }

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });



  /* desktop */

  let desktopOverlay = document.querySelector('.desktop-overlay');

  let getImages = document.getElementsByClassName('hidden-pic');

  let desktopSlider = document.querySelector('.desktop-slider');

  let closeOverlay = document.querySelector('.fa-xmark');

  let leftDesktop = document.getElementById('desktop-left');

  let rightDesktop = document.getElementById('desktop-right');

  closeOverlay.style.display = 'none';

  let storeElements = [];

  let imgIndex;
  _.each(getImages, element => {
    element.addEventListener('click', () => {
        desktopOverlay.style.display = 'flex';
        closeOverlay.style.display = 'block';
        desktopSlider.style.display = 'flex';
        leftDesktop.style.display = 'block';
        rightDesktop.style.display = 'block';
        desktopOverlay.innerHTML += `<img src = "${element.src}" class = "overlay-img">`;
        storeElements.push(element);
        imgIndex = Number(storeElements[storeElements.length-1].id);
 
       
    });

  });

function closingFunc() {
    desktopOverlay.style.display = 'none';
    leftDesktop.style.display = 'none';
    rightDesktop.style.display = 'none';
    desktopOverlay.innerHTML = `<span class="fa-solid fa-xmark" onclick = "closingFunc()"></span>`;
}


rightDesktop.addEventListener('click', () => {
    imgIndex++;
    let imgClass = document.getElementsByClassName('overlay-img');
    _.each(imgClass, img => {
        img.style.display = 'none';
    });

    if(imgIndex >= images.length) {
        imgIndex = 1;
    }
    desktopOverlay.innerHTML += `<img src = "${images[imgIndex]}" class = "overlay-img">`;
});

leftDesktop.addEventListener('click', () => {
    imgIndex--;
    let imgClass = document.getElementsByClassName('overlay-img');
    _.each(imgClass, img => {
        img.style.display = 'none';
    });

    if(imgIndex <=  0) {
        imgIndex = 4;
    }
    desktopOverlay.innerHTML += `<img src = "${images[imgIndex]}" class = "overlay-img">`;
});






  




