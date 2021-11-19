const kontorGoods = [{ cheese: 5.5 }, { rice: 2.5 }, { meat: 8.8 }];

const shoppingItems = [];



// display the the key of the first object of kontorGoods in the console
// console.log(Object.keys(kontorGoods[0])[0]);

/* display key */
for (i in kontorGoods){
    console.log(Object.keys(kontorGoods[i])[0])
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

function render(kontorGoodsArray, shoppingItemsArray){

    const parentContainer = document.querySelector(".container");
    // for i in kontorgods
    // create buttons and there id to index 
    kontorGoodsArray.forEach((element, i) => {
        const buyBtn = document.createElement("button");
        buyBtn.addEventListener("click", addGood.bind(kontorGoodsArray, shoppingItemsArray))
        // buy cheese
        // 
        buyBtn.setAttribute("id", i)
        buyBtn.textContent = Object.keys(kontorGoodsArray[i])[0];
        parentContainer.appendChild(buyBtn)
    });

    
    
}


function addGood(kontorGoodsArray, shoppingItemsArray){
    // click
    const itemIndex = parseInt(this.id);
    // get id of button 
    // das ist der index
    // index muss in int mugewandelt werden
    // 
    console.log(kontorGoodsArray)
    // check if object is inside array
    // if(shoppingItemsArray.includes(kontorGoodsArray[itemIndex])){
    //     // add value to previos value
    // } else {
    //     shoppingItemsArray.push(kontorGoodsArray[itemIndex])
    // }

    // console.log(shoppingItemsArray)
}






/* shif alt a */
/* str + tab */

