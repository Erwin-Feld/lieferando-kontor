const kontorGoods = [{ cheese: 5.5 }, { rice: 2.5 }, { meat: 8.8 }];

const shoppingItems = [];

// display the the key of the first object of kontorGoods in the console
// console.log(Object.keys(kontorGoods[0])[0]);

/* display key */

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

  kontorGoodsArray.forEach((element, i) => {
    const buyBtn = document.createElement("button");
    //Add how to pase parameters and bind to addItems?
    buyBtn.addEventListener("click", addItem);
    // buy cheese
    //
    buyBtn.setAttribute("id", i);
    buyBtn.textContent = Object.keys(kontorGoodsArray[i])[0];
    parentContainer.appendChild(buyBtn);
  });
}

function updateItem(objArray, objIndex) {
  const currentObjkey = Object.keys(objArray[objIndex])[0];
  console.log(currentObjkey);

  const currentObjValue = Object.values(objArray[objIndex])[0];

  return (objArray[objIndex] = {
    //  ^^^^^^^^^^^^^^^^^^^^^
    ...objArray[objIndex],
    // add the key as a variable
    //   FIXME add value from kontor value
    [currentObjkey]: currentObjValue + currentObjValue,
  });
}


function addItem() {
  // click
  const itemIndex = parseInt(this.id);
 
  //FIXME denkt ist was anderes
  const currentObjkey = Object.keys(kontorGoods[itemIndex])[0];

  if (machedKeys(shoppingItems, itemIndex)) {
    console.log("item updated");

    updateItem(shoppingItems, itemIndex);
  } else {
    console.log("no found gets added");
    shoppingItems.push(kontorGoods[itemIndex]);
    console.log("item added");
  }
}

/* shif alt a */
/* str + tab */

// use variable as object kay

/**
 * check if current key is inside the looped array
 * @param { Array } objectContainer - looped over objectContainer
 * @param { Number } itemIndex current Item index
 */

function machedKeys(objectContainer, itemIndex) {
  const currentObjkey = Object.keys(kontorGoods[itemIndex])[0];

  for (let element of objectContainer) {
    if (element.hasOwnProperty(currentObjkey)) {
      //
      return true;
    }
  }
}

/* Add delete
    button click 
    trick benutzren 
    delete button id index + 0.1
    
    um index zu erfahren mache ich id mit parsefloat 
    so bekomme ich korrekte stelle !!!

*/
