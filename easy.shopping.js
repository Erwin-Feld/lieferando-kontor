/* all items  */
const itemsDb = [
  { id: 0, item: "book", price: 12.49 },
  { id: 1, item: "chocalete bar", price: 0.85 },
  { id: 2, item: "music CD", price: 16.49 },
];

/* shopping card */
const shoppingCard = [];

let total = 0;
let tax = 0;


/* 
  button click suhct er welche id der button hat 
aus der id das item hinzugefügt 
  buton oben === book 


  */
function addToShoppingCard() {
  const itemIndexId = parseInt(this.id);

  /* checked ob item schon drinnen isrt wenn ja wird shopping array ge-updated */
  /* if item already appended */
  if (shoppingCard.some((item) => item.id === itemIndexId)) {
    updateShoppingCard(shoppingCard, itemsDb, itemIndexId);

    //    renderShoppingCard(shoppingCard);
    // render basket
    /* renders to html page  */
    renderShoppingCard(shoppingCard);

    /* item noch nicht drinnen dann wird {object} gepushed  */
  } else {
    /* append item */
    shoppingCard.push(itemsDb[itemIndexId]);

    //   console.log(shoppingCard);
    // renderShoppingCard(shoppingCard);
    // render basket
    renderShoppingCard(shoppingCard);
  }
}

function renderItemsDb(itemsDb, shoppingCard) {
  const container = document.createElement("div");
  container.setAttribute("class", "db-container");

  itemsDb.forEach((element, i) => {
    const buyBtn = document.createElement("button");

    //Add how to pase parameters and bind to addItems?
    buyBtn.addEventListener("click", addToShoppingCard);

    buyBtn.setAttribute("id", i);
    buyBtn.textContent = itemsDb[i].item;
    container.appendChild(buyBtn);

    const parentContainer = document.querySelector(".container");
    parentContainer.appendChild(container);
  });
}

function renderShoppingCard(shoppingCard) {
  // jean part ------------------

  //  wenn die fired ---> shoppingCard aktualisiert

  //   let tax = 0   let total = 0

  for (let elm of shoppingCard) {
    if (elm.item === "music CD") {
      tax += 1.5;
    }
  }

  console.log(`total tax is ${tax}`)
  /* 
    
    
    
    */

  // delete check
  const cardContainer = document.querySelector(".card-container");

  if (document.body.contains(cardContainer)) {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "";

    shoppingCard.forEach((element, i) => {
      // const cardContainer = document.querySelector(".card-container");
      const removeBtn = document.createElement("button");

      //Add how to pase parameters and bind to addItems?

      removeBtn.setAttribute("id", i + 0.1);
      removeBtn.textContent =
        shoppingCard[i].item + " " + shoppingCard[i].price;
      cardContainer.appendChild(removeBtn);
    });
  } else {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card-container");
    const parentContainer = document.querySelector(".container");
    parentContainer.appendChild(cardContainer);

    shoppingCard.forEach((element, i) => {
      // const cardContainer = document.querySelector(".card-container");
      const removeBtn = document.createElement("button");

      //Add how to pase parameters and bind to addItems?

      removeBtn.setAttribute("id", i + 0.1);
      removeBtn.textContent =
        shoppingCard[i].item + " " + shoppingCard[i].price;
      cardContainer.appendChild(removeBtn);
    });
  }
}

function createShoppingItems(shoppingCard) {
  shoppingCard.forEach((element, i) => {
    // const cardContainer = document.querySelector(".card-container");
    const removeBtn = document.createElement("button");

    //Add how to pase parameters and bind to addItems?

    removeBtn.setAttribute("id", i + 0.1);
    removeBtn.textContent = shoppingCard[i].item + " " + shoppingCard[i].price;
    cardContainer.appendChild(removeBtn);
  });
}

function addToShoppingCard() {
  const itemIndexId = parseInt(this.id);

  /* if item already appended */
  if (shoppingCard.some((item) => item.id === itemIndexId)) {
    updateShoppingCard(shoppingCard, itemsDb, itemIndexId);

    //   console.log(itemsDb[itemIndexId].price)
    // Anpassung
    total += itemsDb[itemIndexId].price;
    console.log(`the total value change is ${total}`);

    //    renderShoppingCard(shoppingCard);
    // render basket
    renderShoppingCard(shoppingCard);
  } else {
    /* append item */
    shoppingCard.push(itemsDb[itemIndexId]);

    // Anpassung

    total += itemsDb[itemIndexId].price;

    console.log(`the total value change is ${total}`);

    // console.log(shoppingCard);
    // renderShoppingCard(shoppingCard);
    // render basket
    renderShoppingCard(shoppingCard);
  }
}

/**
   *
  
   * @param { Number } itemIndex current Item index
   * @param { Array } objectContainer - looped over objectContainer
   */

/* 
  button hat id o der wurde geclikded --> sucht die function nach id = 0 

//    
  */
function updateShoppingCard(shoppingCard, itemsDb, dbItemIndexId) {
  const currItemIndxPos = shoppingCard.findIndex(
    (item) => item.id === dbItemIndexId
  );

  console.log(shoppingCard[currItemIndxPos]);

  return (shoppingCard[currItemIndxPos] = {
    ...shoppingCard[currItemIndxPos],
    //   added to the current value the ++ value

    /* TODO  add to fixed  https://stackoverflow.com/questions/12511057/float-sum-with-javascript*/
    price: shoppingCard[currItemIndxPos].price + itemsDb[dbItemIndexId].price,
  });
}

function delShoppingCardValue(shopItemIndex) {
  const itemsDbItemIndex = itemsDb.findIndex(
    (item) => item.item === shoppingCard[shopItemIndex].item
  );

  return (shoppingCard[shopItemIndex] = {
    ...shoppingCard[shopItemIndex],
    //   added to the current value the ++ value
    price: shoppingCard[shopItemIndex].price - itemsDb[itemsDbItemIndex].price,
  });
}
