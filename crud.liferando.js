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

  /* if item already appended */
  if (shoppingCard.some((item) => item.id === itemIndexId)) {
    updateShoppingCard(shoppingCard, itemsDb, itemIndexId);
  } else {
    /* append item */
    shoppingCard.push(itemsDb[itemIndexId]);
  }

  console.log(shoppingCard[itemIndexId]);
}

/**
 *
 * @param { Array } objectContainer - looped over objectContainer
 * @param { Number } itemIndex current Item index
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
