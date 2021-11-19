const itemsDb = [
  { id: 0, item: "cheese", price: 2 },
  { id: 1, item: "meat", price: 2.5 },
  { id: 2, item: "fish", price: 4 },
];

const shoppingCard = [];

function render(itemsDb, shoppingCard) {
  const parentContainer = document.querySelector(".container");

  itemsDb.forEach((element, i) => {
    const buyBtn = document.createElement("button");

    //Add how to pase parameters and bind to addItems?
    buyBtn.addEventListener("click", addToShoppingCard);

    buyBtn.setAttribute("id", i);
    buyBtn.textContent = itemsDb[i].item;
    parentContainer.appendChild(buyBtn);
  });
}

function addToShoppingCard() {
   
  const itemIndexId = parseInt(this.id);

  if (shoppingCard.some((item) => item.id === itemIndexId)) {
    //   const indexNR = shoppingCard.some((item) => item.id === itemIndexId

      const index = shoppingCard.findIndex(item => item.id === itemIndexId);
    //   FIXME current Idex error 
        updateItem(shoppingCard, itemsDb, itemIndexId)

        console.log(shoppingCard[1])
    // update
  } else {
    // add
    shoppingCard.push(itemsDb[itemIndexId]);
  }

}

function updateShoppingCard() {}



function updateItem(shoppingCard, itemsDb, itemIndexId) {
   
    return (shoppingCard[itemIndexId] = {
     
      ...shoppingCard[itemIndexId],
        
    //   added to the current value the ++ value
        price:  (shoppingCard[itemIndexId].price+itemsDb[itemIndexId].price) 
    
    });

   
  }