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


function renderShoppingCard(shoppingCard){
    // delete check 
    if( document.querySelector("card-container")){
        const cardContainer = document.querySelector("card-container");
        cardContainer.innerHTML = "";
    }

    const container = document.createElement("div");
    container.setAttribute("class", "card-container");
  
    shoppingCard.forEach((element, i) => {
      const removeBtn = document.createElement("button");
  
      //Add how to pase parameters and bind to addItems?
      removeBtn.addEventListener("click", delOfShoppingCard);
  
      removeBtn.setAttribute("id", i);
      removeBtn.textContent = shoppingCard[i].item + " " + shoppingCard[i].price;
      container.appendChild(removeBtn);
  
      const parentContainer = document.querySelector(".container");
      parentContainer.appendChild(container);
    });

}


function addToShoppingCard() {
  const itemIndexId = parseInt(this.id);

  /* if item already appended */
  if (shoppingCard.some((item) => item.id === itemIndexId)) {
    updateShoppingCard(shoppingCard, itemsDb, itemIndexId);
  
//    renderShoppingCard(shoppingCard);
    // render basket
  } else {
     
    /* append item */
    shoppingCard.push(itemsDb[itemIndexId]);
    // renderShoppingCard(shoppingCard);
    // render basket
   
  }
console.log(shoppingCard)
  
}

/**
 *
 * @param { Array } objectContainer - looped over objectContainer
 * @param { Number } itemIndex current Item index
 */
function updateShoppingCard(shoppingCard, itemsDb, dbItemIndexId) {

    const currItemIndxPos = shoppingCard.findIndex(
    (item) => item.id === dbItemIndexId);

    return (shoppingCard[currItemIndxPos] = {
            ...shoppingCard[currItemIndxPos],
    //   added to the current value the ++ value
        price: shoppingCard[currItemIndxPos].price + itemsDb[dbItemIndexId].price,
         });
}


function delOfShoppingCard(shoppingCard, itemsDb){
    const itemIndexId = parseInt(this.id);

    const currItemIndxPos = shoppingCard.findIndex(
        (item) => item.id === itemIndexId);

        if(shoppingCard[currItemIndxPos].price > itemsDb[itemIndexId].price ) {
            return (shoppingCard[currItemIndxPos] = {
                ...shoppingCard[currItemIndxPos],
        //   added to the current value the ++ value
            price: shoppingCard[currItemIndxPos].price - itemsDb[itemIndexId].price,
             });
        } else if(shoppingCard[currItemIndxPos].price === itemsDb[itemIndexId].price) {

            // splice the value
            // shoppingCard.splice([noteArrayElementId - 1], 1) 

        }
    // find current index
    // delete one value
    // if value <= x
    // delete the object

    // render
}


