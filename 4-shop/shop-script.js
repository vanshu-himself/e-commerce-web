
const URL = "https://fakestoreapi.com/";
const URL1 = "https://fakestoreapi.com/products";


// Containers

const mensContianer = document.getElementById('mens-container');
const womensContianer = document.getElementById('womens-container');
const jeweleryContianer = document.getElementById('jewelery-container');
const electronicsContianer = document.getElementById('electronics-container');

// Switch Buttons

const allBtn = document.getElementById('all-btn')
const menBtn = document.getElementById('men-btn')
const womenBtn = document.getElementById('women-btn')
const jeweleryBtn = document.getElementById('jewellery-btn')
const electronicsBtn = document.getElementById('electronics-btn');

// Cart Button

let addToCart = document.getElementById('addTo-cart');
// console.log(addToCart.parentElement.parentElement.className);

// Heading div's

let h2Mens = document.getElementById('h2-mens');
let h2Womens = document.getElementById('h2-womens');
let h2Jewelery = document.getElementById('h2-jewelery');
let h2Electronics = document.getElementById('h2-electronics');

// Badges

let countBadge = document.getElementById('count-badge');

// Section-Wise Arrays
let totalArray = [];
let mensArray = [];
let womensArray = [];
let jeweleryArray = [];
let electronicsArray = [];

// Kebab-Menu

const kebabBtn = document.getElementById('kebeb-bar');
const menu = document.getElementById('menu');

kebabBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("clicked")
  if (menu.style.display == "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
})



async function fetchDetails() {
  try {
    let response = await fetch(URL1);
    let data = await response.json();
    // console.log(data)

    data.forEach((v, i) => {
      totalArray.push(data[i]);
    })
    let items = JSON.parse(localStorage.getItem('cartItems'));
    // console.log(items);
    if (totalArray.length > 0 && items !== null) {
      countBadge.innerText = JSON.parse(localStorage.getItem('cartItems')).length;
      countBadge.style.display = "flex";
    }
    // console.log(totalArray);

    let men = seperateByMen(data);
    let women = seperateByWomen(data);
    let jewelery = seperateByJeweley(data);
    let electronic = seperateByElectronics(data);

    // Render functions
    renderMen(men);
    renderWomen(women);
    renderJewelery(jewelery);
    renderElectronic(electronic);
  }
  catch (err) {
    console.log(err);
  }
}

// Invoking & rendering Items

fetchDetails();

function seperateByMen(itemsData) {
  itemsData.forEach((v, i) => {
    let item = itemsData[i];
    if (item.category === "men's clothing") {
      mensArray.push(item);
    }
  })
  console.log(mensArray);
  return mensArray;
}
function seperateByWomen(itemsData) {
  itemsData.forEach((v, i) => {
    let item = itemsData[i];
    if (item.category === "women's clothing") {
      womensArray.push(item);
    }
  })
  console.log(womensArray);
  return womensArray;
}
function seperateByJeweley(itemsData) {
  itemsData.forEach((v, i) => {
    let item = itemsData[i];
    if (item.category === "jewelery") {
      jeweleryArray.push(item);
    }
  })
  console.log(jeweleryArray);
  return jeweleryArray;
}
function seperateByElectronics(itemsData) {
  itemsData.forEach((v, i) => {
    let item = itemsData[i];
    if (item.category === "electronics") {
      electronicsArray.push(item);
    }
  })
  console.log(electronicsArray);
  return electronicsArray;
}


allBtn.addEventListener('click', (event) => {
  document.getElementById('itemContainer').innerHTML = ''
  allBtn.style.backgroundColor = "black";
  allBtn.style.color = "white";
  menBtn.style.backgroundColor = "white";
  menBtn.style.color = "black";
  womenBtn.style.backgroundColor = "white";
  womenBtn.style.color = "black";
  jeweleryBtn.style.backgroundColor = "white";
  jeweleryBtn.style.color = "black";
  electronicsBtn.style.backgroundColor = "white";
  electronicsBtn.style.color = "black";

  // Visible & Hidden containers
  mensContianer.style.display = "flex";
  womensContianer.style.display = "flex";
  jeweleryContianer.style.display = "flex";
  electronicsContianer.style.display = "flex";

  // Headings DOM
  h2Mens.style.display = "block";
  h2Womens.style.display = "block";
  h2Jewelery.style.display = "block";
  h2Electronics.style.display = "block";
})

menBtn.addEventListener('click', (event) => {
  document.getElementById('itemContainer').innerHTML = ''
  allBtn.style.backgroundColor = "white";
  allBtn.style.color = "black";
  menBtn.style.backgroundColor = "black";
  menBtn.style.color = "white";
  womenBtn.style.backgroundColor = "white";
  womenBtn.style.color = "black";
  jeweleryBtn.style.backgroundColor = "white";
  jeweleryBtn.style.color = "black";
  electronicsBtn.style.backgroundColor = "white";
  electronicsBtn.style.color = "black";

  // Visible & Hidden containers
  mensContianer.style.display = "flex";
  womensContianer.style.display = "none";
  jeweleryContianer.style.display = "none";
  electronicsContianer.style.display = "none";

  // Headings DOM
  h2Mens.style.display = "block";
  h2Womens.style.display = "none";
  h2Jewelery.style.display = "none";
  h2Electronics.style.display = "none";
})

womenBtn.addEventListener('click', (event) => {
  document.getElementById('itemContainer').innerHTML = ''
  allBtn.style.backgroundColor = "white";
  allBtn.style.color = "black";
  menBtn.style.backgroundColor = "white";
  menBtn.style.color = "black";
  womenBtn.style.backgroundColor = "black";
  womenBtn.style.color = "white";
  jeweleryBtn.style.backgroundColor = "white";
  jeweleryBtn.style.color = "black";
  electronicsBtn.style.backgroundColor = "white";
  electronicsBtn.style.color = "black";

  // Visible & Hidden containers
  mensContianer.style.display = "none";
  womensContianer.style.display = "flex";
  jeweleryContianer.style.display = "none";
  electronicsContianer.style.display = "none";

  // Headings DOM
  h2Mens.style.display = "none";
  h2Womens.style.display = "block";
  h2Jewelery.style.display = "none";
  h2Electronics.style.display = "none";
})

jeweleryBtn.addEventListener('click', (event) => {
  document.getElementById('itemContainer').innerHTML = ''
  allBtn.style.backgroundColor = "white";
  allBtn.style.color = "black";
  menBtn.style.backgroundColor = "white";
  menBtn.style.color = "black";
  womenBtn.style.backgroundColor = "white";
  womenBtn.style.color = "black";
  jeweleryBtn.style.backgroundColor = "black";
  jeweleryBtn.style.color = "white";
  electronicsBtn.style.backgroundColor = "white";
  electronicsBtn.style.color = "black";

  // Visible & Hidden containers
  mensContianer.style.display = "none";
  womensContianer.style.display = "none";
  jeweleryContianer.style.display = "flex";
  electronicsContianer.style.display = "none";

  // Headings DOM
  h2Mens.style.display = "none";
  h2Womens.style.display = "none";
  h2Jewelery.style.display = "block";
  h2Electronics.style.display = "none";
})

electronicsBtn.addEventListener('click', (event) => {
  document.getElementById('itemContainer').innerHTML = ''
  allBtn.style.backgroundColor = "white";
  allBtn.style.color = "black";
  menBtn.style.backgroundColor = "white";
  menBtn.style.color = "black";
  womenBtn.style.backgroundColor = "white";
  womenBtn.style.color = "black";
  jeweleryBtn.style.backgroundColor = "white";
  jeweleryBtn.style.color = "black";
  electronicsBtn.style.backgroundColor = "black";
  electronicsBtn.style.color = "white";

  // Visible & Hidden containers
  mensContianer.style.display = "none";
  womensContianer.style.display = "none";
  jeweleryContianer.style.display = "none";
  electronicsContianer.style.display = "flex";

  // Headings DOM
  h2Mens.style.display = "none";
  h2Womens.style.display = "none";
  h2Jewelery.style.display = "none";
  h2Electronics.style.display = "block";
})


function renderMen(menData) {
  mensContianer.className = "items-container";
  menData.forEach((v, i) => {
    let data = menData[i];
    const colors = ['red', 'blue', 'green', 'black', 'white'];
    let randomColor = getRandomColors(colors, 3)
    const sizeArray = ['L', 'M', 'S', 'XL'];
    let randomSize = getRandomSize(sizeArray, 3)
    let item = document.createElement('div');
    item.className = `item ${randomColor[0]} ${randomColor[1]} ${randomColor[2]}`;
    item.id = data.id;
    item.innerHTML = `
                <div class="image">
                  <img src="${data.image}" alt="item">
                </div>
                <hr>
                <div class="details">
                  <div class="title">${data.title}</div>
                  <div class="price-size">
                    <div class="price" id="price">$${data.price}</div>
                    <div class="size">${randomSize[0]},${randomSize[1]},${randomSize[2]}</div>
                  </div>
                  <div class="color">
                    Colors : <span id="color1" style="background-color:${randomColor[0]}">ss</span> <span id="color2" style="background-color:${randomColor[1]}">cc</span> <span id="color3" style="background-color:${randomColor[2]}">cc</span>
                  </div>
                  <div class="rating">
                    Rating : ${data.rating["rate"]} / 5
                  </div>
                </div>
                <div class="add-cart">
                  <button id="addTo-cart" onclick="getId(this)">Add to Cart</button>
                </div>
        `
    mensContianer.append(item);
  })
}
function renderWomen(womenData) {
  womensContianer.className = "items-container";
  womenData.forEach((v, i) => {
    let data = womenData[i];
    let item = document.createElement('div');
    const colors = ['red', 'blue', 'green', 'black', 'white'];
    let randomColor = getRandomColors(colors, 3)
    const sizeArray = ['L', 'M', 'S', 'XL'];
    let randomSize = getRandomSize(sizeArray, 3)
    item.className = "item";
    item.id = data.id;
    item.innerHTML = `
        <div class="image">
                  <img src="${data.image}" alt="item">
                </div><hr>
                <div class="details">
                  <div class="title">${data.title}</div>
                  <div class="price-size">
                    <div class="price" id="price">$${data.price}</div>
                    <div class="size">${randomSize[0]},${randomSize[1]},${randomSize[2]}</div>
                  </div>
                  <div class="color">
                  Colors : <span id="color1" style="background-color:${randomColor[0]}">ss</span> <span id="color2" style="background-color:${randomColor[1]}">cc</span> <span id="color3" style="background-color:${randomColor[2]}">cc</span>
                  </div>
                  <div class="rating">
                    Rating : ${data.rating["rate"]} / 5
                  </div>
                </div>
                <div class="add-cart">
                <button id="addTo-cart" onclick="getId(this)">Add to Cart</button>
                </div>
        `
    womensContianer.append(item);
  })
}
function renderJewelery(jeweleryData) {
  jeweleryContianer.className = "items-container";
  jeweleryData.forEach((v, i) => {
    let data = jeweleryData[i];
    let item = document.createElement('div');
    item.className = "item";
    item.id = data.id;
    item.innerHTML = `
        <div class="image">
                  <img src="${data.image}" alt="item">
                </div><hr>
                <div class="details">
                  <div class="title">${data.title}</div>
                  <div class="price-size">
                    <div class="price" id="price">$${data.price}</div>
                    <div class="size">S,L,XL</div>
                  </div>
                  <div class="rating">
                    Rating : ${data.rating["rate"]} / 5
                  </div>
                </div>
                <div class="add-cart">
                <button id="addTo-cart" onclick="getId(this)">Add to Cart</button>
                </div>
        `
    jeweleryContianer.append(item);
  })
}
function renderElectronic(electronicData) {
  electronicsContianer.className = "items-container";
  electronicData.forEach((v, i) => {
    let data = electronicData[i];
    let item = document.createElement('div');
    item.className = "item";
    item.id = data.id;
    item.innerHTML = `
        <div class="image">
                  <img src="${data.image}" alt="item">
                </div><hr>
                <div class="details">
                  <div class="title">${data.title}</div>
                  <div class="price-size">
                    <div class="price" id="price">$${data.price}</div>
                  </div>
                  <div class="rating">
                    Rating : ${data.rating["rate"]} / 5
                  </div>
                </div>
                <div class="add-cart">
                <button id="addTo-cart" onclick="getId(this)">Add to Cart</button>
                </div>
        `
    electronicsContianer.append(item);
  })
}

function renderAll(data) {

  data.forEach((product) => {

    let item = document.createElement('div');
    item.className = "item";
    item.id = product.id;
    item.innerHTML = `
      <div class="image">
                <img src="${product.image}" alt="item">
              </div><hr>
              <div class="details">
                <div class="title">${product.title}</div>
                <div class="price-size">
                  <div class="price" id="price">$${product.price}</div>
                </div>
                <div class="rating">
                  Rating : ${product.rating["rate"]} / 5
                </div>
              </div>
              <div class="add-cart">
              <button id="addTo-cart" onclick="getId(this)">Add to Cart</button>
              </div>
      `
    document.getElementById('itemContainer').append(item);
  })
}

// Random color Generator
function getRandomColors(colorsArray, numberOfColors) {
  const randomColors = [];
  const shuffledColors = colorsArray.slice();
  for (let i = shuffledColors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledColors[i], shuffledColors[j]] = [shuffledColors[j], shuffledColors[i]];
  }
  for (let i = 0; i < numberOfColors; i++) {
    randomColors.push(shuffledColors[i]);
  }
  return randomColors;
}

// Random Size generator

function getRandomSize(sizeArray, numberOfSizes) {
  const randomSizes = [];
  const shuffledSizes = sizeArray.slice();
  for (let i = shuffledSizes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledSizes[i], shuffledSizes[j]] = [shuffledSizes[j], shuffledSizes[i]];
  }
  for (let i = 0; i < numberOfSizes; i++) {
    randomSizes.push(shuffledSizes[i]);
  }
  return randomSizes;
}

// Adding to Cart 
let cartArray = [];

function getId(element) {
  let itemId = element.parentElement.parentElement.id;
  // console.log(itemId);
  if (JSON.parse(localStorage.getItem('cartItems')) === null) {
    cartArray = [];
  }
  else {
    cartArray = JSON.parse(localStorage.getItem('cartItems'));
  }
  totalArray.forEach((v, i) => {
    if (totalArray[i].id == itemId) {
      let confirm = true;
      if (confirm) {
        alert(`${totalArray[i].title} added to Cart`);
        const colors = ['#ff0000', '#98fb98', '#6495ED', '#ffff80', 'ADD8E6'];
        const sizeArray = ['L', 'M', 'S', 'XL'];
        totalArray[i].randomColor = getRandomColors(colors, 3)
        totalArray[i].randomSize = getRandomSize(sizeArray, 3)
        cartArray.push(totalArray[i]);
      }
    }
  });
  // console.log(cartArray);
  if (cartArray.length == 0 || cartArray.length < 1) {
    countBadge.style.display = "none";
    countBadge.innerText = "";
  }
  else {
    countBadge.style.display = "flex";
    countBadge.innerText = cartArray.length;
  }
  localStorage.setItem("cartItems", JSON.stringify(cartArray))
}



//=====================================FILTERS
// searchbar
function searchResult() {

  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {

      let searchInput = document.getElementById('search').value;
      if (searchInput == '') {
        document.getElementById('itemContainer').innerHTML = ''
        document.getElementById('itemContainer').style.display = 'none'

      } else
        document.getElementById('itemContainer').style.display = 'flex'
      searchInput.toLowerCase()
      console.log(searchInput)

      let searchData = json.filter((item) => item.title.toLowerCase().includes(searchInput))


      document.getElementById('itemContainer').innerHTML = ''
      renderAll(searchData)


    });

}


//rating

function rangeResult() {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {

      let rangeInput = document.getElementById('ratings').value;

      let rangeData = json.filter((item) => item.rating.rate <= rangeInput)


      document.getElementById('itemContainer').innerHTML = ''
      renderAll(rangeData)


    });


}

// price checkbox

function priceResult(e) {


  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {


      let priceInput1 = document.getElementsByClassName('pricecheck')[0];
      let priceInput2 = document.getElementsByClassName('pricecheck')[1];
      let priceInput3 = document.getElementsByClassName('pricecheck')[2];
      let priceInput4 = document.getElementsByClassName('pricecheck')[3];



      if (priceInput1.checked == true) {
        let priceneed = priceInput1.value.split('-')
        let priceData = json.filter((item) => item.price <= priceneed[1] && item.price >= priceneed[0])
        document.getElementById('itemContainer').innerHTML = ''
        renderAll(priceData)
      }

      else if (priceInput2.checked == true) {
        let priceneed = priceInput2.value.split('-')
        let priceData = json.filter((item) => item.price <= priceneed[1] && item.price >= priceneed[0])
        document.getElementById('itemContainer').innerHTML = ''
        renderAll(priceData)
      }

      else if (priceInput3.checked == true) {
        let priceneed = priceInput3.value.split('-')
        let priceData = json.filter((item) => item.price <= priceneed[1] && item.price >= priceneed[0])
        document.getElementById('itemContainer').innerHTML = ''
        renderAll(priceData)
      }
      else if (priceInput4.checked == true) {
        let priceneed = priceInput4.value.split('-')
        let priceData = json.filter((item) => item.price <= priceneed[1] && item.price >= priceneed[0])
        document.getElementById('itemContainer').innerHTML = ''
        renderAll(priceData)
      }

      else {

        document.getElementById('itemContainer').innerHTML = ''

      }

    });
}



// color filter


function colorResult() {
  let items = document.getElementsByClassName('item');
  console.log("'unable to filter by color properly because API dosen't have color key!'")

 for(let i=0;i<items.length;i++) {

    let redcheck = document.getElementById('red');
    let bluecheck = document.getElementById('blue');
    let greencheck = document.getElementById('green');
    let blackcheck = document.getElementById('black');
    let whitecheck = document.getElementById('white');


    if (items[i].className.includes("red") && redcheck.checked == true) {
      

      let item= document.createElement('div');
      item.className = items[i].className
      item.innerHTML=`${ items[i].innerHTML}`;
      console.log(item)
      
      document.getElementById('itemContainer').innerHTML = ''
     let box = document.getElementById('itemContainer')
     
     box.appendChild(item)
    }
    else if (items[i].className.includes('blue') && bluecheck.checked == true) {

let item= document.createElement('div');
      item.className = items[i].className
      item.innerHTML=`${ items[i].innerHTML}`;
      console.log(item)
      
      document.getElementById('itemContainer').innerHTML = ''
     let box = document.getElementById('itemContainer')
     
     box.appendChild(item).appendChild(item)
    }
    else if (items[i].className.includes('green') && greencheck.checked == true) {

let item= document.createElement('div');
      item.className = items[i].className
      item.innerHTML=`${ items[i].innerHTML}`;
      console.log(item)
      
      document.getElementById('itemContainer').innerHTML = ''
     let box = document.getElementById('itemContainer')
     
     box.appendChild(item).appendChild(item)
    }
    else if (items[i].className.includes('black') && blackcheck.checked == true) {

let item= document.createElement('div');
      item.className = items[i].className
      item.innerHTML=`${ items[i].innerHTML}`;
      console.log(item)
      
      document.getElementById('itemContainer').innerHTML = ''
     let box = document.getElementById('itemContainer')
     
     box.appendChild(item).appendChild(item)
    }
    else if (items[i].className.includes('white') && whitecheck.checked == true) {

let item= document.createElement('div');
      item.className = items[i].className
      item.innerHTML=`${ items[i].innerHTML}`;
      console.log(item)
      
      document.getElementById('itemContainer').innerHTML = ''
     let box = document.getElementById('itemContainer')
     
     box.appendChild(item).appendChild(item)
    }
    


  }


}
