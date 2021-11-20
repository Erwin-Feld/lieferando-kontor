const itemsDb = [
  { id: 0, item: "cheese", price: 2 },
  { id: 1, item: "meat", price: 2.5 },
  { id: 2, item: "fish", price: 4 },
];

const shoppingCard = [];

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

// FIXME
// add correctly renderShoppingCard
function renderShoppingCard(shoppingCard) {
  // delete check
  const cardContainer = document.querySelector(".card-container");
 
  if (document.body.contains(cardContainer)) {
  
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "";
   
    shoppingCard.forEach((element, i) => {
      // const cardContainer = document.querySelector(".card-container");
      const removeBtn = document.createElement("button");
  
      //Add how to pase parameters and bind to addItems?
      removeBtn.addEventListener("click", delOfShoppingCard);
  
      removeBtn.setAttribute("id", i + 0.1);
      removeBtn.textContent = shoppingCard[i].item + " " + shoppingCard[i].price;
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
      removeBtn.addEventListener("click", delOfShoppingCard);
  
      removeBtn.setAttribute("id", i + 0.1);
      removeBtn.textContent = shoppingCard[i].item + " " + shoppingCard[i].price;
      cardContainer.appendChild(removeBtn);
    });
    
  }
  

}

function createShoppingItems(shoppingCard){
  
  shoppingCard.forEach((element, i) => {
    // const cardContainer = document.querySelector(".card-container");
    const removeBtn = document.createElement("button");

    //Add how to pase parameters and bind to addItems?
    removeBtn.addEventListener("click", delOfShoppingCard);

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

    //    renderShoppingCard(shoppingCard);
    // render basket
    renderShoppingCard(shoppingCard);
  } else {
    /* append item */
    shoppingCard.push(itemsDb[itemIndexId]);
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
function updateShoppingCard(shoppingCard, itemsDb, dbItemIndexId) {
  const currItemIndxPos = shoppingCard.findIndex(
    (item) => item.id === dbItemIndexId
  );

  return (shoppingCard[currItemIndxPos] = {
    ...shoppingCard[currItemIndxPos],
    //   added to the current value the ++ value
    price: shoppingCard[currItemIndxPos].price + itemsDb[dbItemIndexId].price,
  });
}


function delShoppingCardValue(shopItemIndex){
  const itemsDbItemIndex = itemsDb.findIndex(
    (item) => item.item === shoppingCard[shopItemIndex].item
    );


  return (shoppingCard[shopItemIndex] = {
    ...shoppingCard[shopItemIndex],
    //   added to the current value the ++ value
    price: shoppingCard[shopItemIndex].price - itemsDb[itemsDbItemIndex].price, 
  
  });

}



function delOfShoppingCard() {
  
  // id is x,01 round it with this method to whole number
  const shopCardItemIndex = parseInt(this.id);
  

  /* find where the item is indexed at the itemsDb */
  const itemsDbItemIndex = itemsDb.findIndex(
    (item) => item.item === shoppingCard[shopCardItemIndex].item
    );

   
    if (shoppingCard[shopCardItemIndex].price > itemsDb[itemsDbItemIndex].price) {
      console.log("fired")


      // return (shoppingCard[shopCardItemIndex] = {
      //   ...shoppingCard[shopCardItemIndex],
      //   //   added to the current value the ++ value
      //   price: shoppingCard[shopCardItemIndex].price - itemsDb[itemsDbItemIndex].price, 
      // });
    delShoppingCardValue(shopCardItemIndex)
    renderShoppingCard(shoppingCard)      


    } else if (
      shoppingCard[shopCardItemIndex].price === itemsDb[itemsDbItemIndex].price
      ) {
        // Add splice to it
        // splice the value
        shoppingCard.splice([shopCardItemIndex - 1], 1)
        renderShoppingCard(shoppingCard)
      }
      // find current index
      // delete one value
      // if value <= x
      // delete the object
      
      // render
    }


    /* 
    //TODO
    fix delete from shopping card

    how to pass arguments from outer function 

    to the inner function 
    if in function body another function is called

    how to bind parameters in eventlistener

    same parameter names in outer function and inner function
    is this a problem ?

    
    */

    