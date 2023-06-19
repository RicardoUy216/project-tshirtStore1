let priceList = [];
let prodDescpn = [];
let totalAm = 0;
document.addEventListener('DOMContentLoaded', () => {
  const inputForm = document.querySelector("#productDescriptionForm");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector("input#searchByID");

    fetch(`http://localhost:3000/tshirt/${input.value}`)
      .then((response) => response.json())
      .then((data) => {

        const neckDesign = document.querySelector("#neckDesign");
        const color = document.querySelector("#color");
        const size = document.querySelector("#size");
        const price = document.querySelector("#price");
        const inventory = document.querySelector("#inventory");

        neckDesign.innerText = data.neckDesign;
        color.innerText = data.color;
        size.innerText = data.size;
        price.innerText = data.price;
        inventory.innerText = data.inventory;
      });
  });

  const inputForm1 = document.querySelector("#addToCartForm");
  inputForm1.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector("input#EnterProductNumber");



    fetch(`http://localhost:3000/tshirt/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const priceP = document.querySelector("#priceItem");
        const prodSumry = document.querySelector("#prodDes");
        const inventory = document.querySelector("#inventory");
        const numItems = document.querySelector("#numItems");
        const totalAmount = document.querySelector("#totalAmount");

    

        priceP.innerText = data.price;
        inventory.innerText = data.inventory
        prodSumry.innerText = data.productdesc
        console.log(prodSumry.innerText);
        priceList.push(parseFloat(priceP.innerText));
        prodDescpn.push(prodSumry.innerText);
        console.log(prodDescpn);
        console.log(inventory.innerText)
        

      
        
      console.log(priceList);
        const item = prodDescpn.map(myFun)
          function myFun(desc){
            return desc;
          }
        
        //add up prices in the priceList array.
        // priceList  is an array of prices.
        // iterate through priceList and count each element in it.
        // Use a for loop to iterate.
        let count = 0;
        for (const item of priceList) {
          count += 1;
        }

        numItems.innerText = count
        totalAm = 0
        
        for (const item of priceList) {
          totalAm += Number(item);
          console.log(totalAm)
        }
        totalAmount.innerText = totalAm
           
           
        
       });
    
      /* fetch(`http://localhost:3000/tshirt/${input.value}`, {
          method: "PATCH",
          headers:
      {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      
      body:JSON.stringify({
      "inventory": ((inventory.innerText) -= 1)
      })
      .then(res => res.json())
      .then(inventory => console.log(inventory.innerText))
      
        }) */
      
  });

  // Add a click button to Check Out
  document.getElementById("myBtn1").addEventListener("click", displayCheckOut);
  function displayCheckOut() {
    let totalWithTax = Math.round(totalAm * 1.1)  // instead of rounding cut to the nearest tenth
    document.querySelector("#amountWithTax").textContent = totalWithTax;
    
  console.log(prodDescpn);
  const listProducts = document.getElementById("itemList");

  // Create an unordered list element
  const ulProducts = document.createElement("ul");
  
  // Loop through the array and create list items for each element
  prodDescpn.forEach(item => {
    const liProducts = document.createElement("li");
    liProducts.textContent = item;
    ulProducts.appendChild(liProducts);
  });
  
  // Append the unordered list to the desired element in the document
  listProducts.appendChild(ulProducts);
    
  }
  // Get references to the button and the thank you message
  const element = document.getElementById("myBtn");
  // Add a click event listener to the exit button
  element.addEventListener("click", myF);
  function myF() {
    document.getElementById("demo").innerHTML = "Thank you for shopping at Ricardo's Kamiseta";
    location.reload();
  }
   
});
