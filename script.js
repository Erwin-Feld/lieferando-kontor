const kontorGoods = [{ cheese: 5.5 }, { rice: 2.5 }, { meat: 8.8 }];

const shoppingItems = [];

// display the the key of the first object of kontorGoods in the console
// console.log(Object.keys(kontorGoods[0])[0]);

/* display key */
for (i in kontorGoods) {
  console.log(Object.keys(kontorGoods[i])[0]);
}

// console.log(Object.keys([kontorGoods[0]]))

// shoppingCard
// give id one -->

// iteretate over --> kontorGoods --> get value

// if

/* 
Steps

kontorList

button click which has unique id 

button click id ---> kontorlist item

--> add to shopping list 
add object if already there add to value the money value


// render / renders all 


// layout

x |  y
x |  y
x |  y
x |  y
x |  y

div container

in dem sind zwei div conteiner

beide gleich breit 
eins hat links items andere hat rechts div items 


*/

function render(kontorGoodsArray, shoppingItemsArray) {
  const parentContainer = document.querySelector(".container");
  // for i in kontorgods
  // create buttons and there id to index
  kontorGoodsArray.forEach((element, i) => {
    const buyBtn = document.createElement("button");
    //Add how to pase parameters and bind to addGoods?
    buyBtn.addEventListener("click", addGood);
    // buy cheese
    //
    buyBtn.setAttribute("id", i);
    buyBtn.textContent = Object.keys(kontorGoodsArray[i])[0];
    parentContainer.appendChild(buyBtn);
  });
}

function addGood() {
  // click
  const itemIndex = parseInt(this.id);
  // get id of button
  // das ist der index
  // index muss in int mugewandelt werden
  //

  // check if object is inside array
  if (shoppingItems.includes(kontorGoods[itemIndex])) {
    const item = Object.values(kontorGoods[itemIndex])[0];
    // add a 4 to the value x
    //
    // shoppingItems[itemIndex].value += item;
    //   Object.values(kontorGoods[itemIndex])[0] = 12
    updateObj(shoppingItems, itemIndex);

    const currentObjkey = Object.keys(kontorGoods[itemIndex])[0];
    const currentObjValue = Object.values(kontorGoods[itemIndex])[0];

    //   works
    //   const shoppingNEwItems = {...shoppingItems, [currentObjkey]: currentObjValue + currentObjValue };

    //   console.log( Object.values(kontorGoods[itemIndex])[0])
    // add value to previos value
  } else {
    shoppingItems.push(kontorGoods[itemIndex]);
    console.log("pusehd");
  }

  console.log(Object.values(kontorGoods[itemIndex])[0]);
}

/* shif alt a */
/* str + tab */

// use variable as object kay

function updateObj(objArray, objIndex) {
  const currentObjkey = Object.keys(objArray[objIndex])[0];
  const currentObjValue = Object.values(objArray[objIndex])[0];

  return {
    ...objArray[objIndex],
    //    Object.keys(kontorGoodsArray[i])[0]
    // add the key as a variable
    [currentObjkey]: currentObjValue + currentObjValue,
  };
}
