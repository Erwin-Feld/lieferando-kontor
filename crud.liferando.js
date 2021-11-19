
const priceList = [
  { id: 0, item: "cheese", price: 2 },
  { id: 1, item: "meat", price: 2.5 },
  { id: 2, item: "fish", price: 4 },

];


const shoppingCard = [];




function render(priceList) {
    const parentContainer = document.querySelector(".container");
  
    priceList.forEach((element, i) => {
      const buyBtn = document.createElement("button");
      
      //Add how to pase parameters and bind to addItems?
    //   buyBtn.addEventListener("click", addItem);


      buyBtn.setAttribute("id", i);
      buyBtn.textContent = priceList[i].item;
      parentContainer.appendChild(buyBtn);
    });
  }
  


  function addToShoppingCard(){
    const itemIndexId = parseInt(this.id);
    
  }