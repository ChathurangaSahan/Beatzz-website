/*   Name    : Lenmini Sadeera Illangakoon
     IIT No. : 20220305
     UoW No. : w1953815 */

// Prices of products 
const prices = {
  1: 65 ,
  2: 60 ,
  3: 60 ,
  4: 70 ,
  5: 24 ,
  6: 45 ,
  7: 35 ,
  8: 25 ,
  9: 20 ,
  10:40 ,
  11:38 ,
  12:25 ,
  13:27 ,
  14:25 ,
  15:28 ,
  16:30 ,
};

// Function to add product to cart
function addToCart(productId) {
  const quantity = parseInt(document.buyForm["quantity" + productId].value);
  if (quantity === 0) {
    alert("Product quantity cannot be zero!");
  } else {
    const price = prices[productId];
    const productPrice = quantity * price;
    const productName = getProductLabel(productId);
    const productListItem = document.createElement("dd");
    productListItem.innerHTML = productName + " : " + quantity + " x $" + price.toFixed(2) + "  = $" + productPrice.toFixed(2);
    document.getElementById("bill").append(productListItem);
    updateTotalPrice();
  }
}


// Function to update total price in the cart
function updateTotalPrice() {
  let totalPrice = 0;
  for (let i = 1; i <= 16; i++) {
    const quantity = parseInt(document.buyForm["quantity" + i].value);
    const price = prices[i];
    totalPrice += quantity * price;
  }
  document.getElementById("totalPrice").innerHTML = totalPrice.toFixed(2);
  const proceedButton = document.getElementById("proceed");
  if (totalPrice !== 0) {
    proceedButton.disabled = false; //if totalPrice is not equal to 0, the proceedButton is enabled by setting the disabled property to false
  } else {
    proceedButton.disabled = true; //if the totalPrice is equal to 0, the proceedButton is disabled by setting the disabled property to true
  }
}

function checkCart() {
  updateTotalPrice(); // call the updateTotalPrice() function to calculate the cart total
  const totalPrice = parseFloat(document.getElementById("totalPrice").innerHTML); // get the cart total

  if (totalPrice !== 0) { 
    alert("Proceeding to the form!"); //if the totalPrice is not equal to 0, displays an alert message and returns true
    return true;
  } else { 
    return false; //if the totalPrice is equal to 0, prevents the form from being submitted
  }
}

// Function to get label for product
function getProductLabel(productId) {
switch (productId) {
  case 1:
    return "Taylor Swift The Eras Tour Heather Gray Crewneck";
  case 2:
    return "The Weekend After Hours Black Hoodie";
  case 3:
    return "Ed Sheeran Divide Sweatshirt";
  case 4:
    return "Justin Bieber Peaches Tie Dye Hoodie";
  case 5:
    return "Selena Gomez Rare Album T-Shirt";
  case 6:
    return "Taylor Swift The Eras Tour Red Album T-Shirt";
  case 7:
    return "Ariana Grande Yours Truly T-Shirt";
  case 8:
    return "Dua Lipa Don't Start Now T-Shirt";
  case 9:
    return "Silk Sonic An Evening With Silk Sonic CD";
  case 10:
    return "Miley Cyrus Endless Summer Vacation CD";
  case 11:
    return "Katy Perry Smile Deluxe CD";
  case 12:
    return "Shawn Mendes WONDER Deluxe Package CD";	 
  case 13:
    return "Harry Styles GOLDEN Album Cover Poster";
  case 14:
    return "One Republic NEVER ENDING SUMMER Tour Poster";
  case 15:
    return "Dua Lipa Gradient Anime Bucket Hat";
  case 16:
    return "Ed Sheeran DIVIDE Custom Tour Bucket Hat";	  
  default:
    return "";
}
}



date.min = new Date().toLocaleDateString('en-ca') //To ensure the delivery date is on or after the date of the order


//Validation of personal details
function validate() {	
if( document.buyForm.cardNo.value == "" ) {
  alert( "Please enter your card number!" );
  return false;
  }
  
else if(isNaN(document.buyForm.cardNo.value)){
  alert( "Please enter a valid card number!" );
  return false;
}
else if( document.buyForm.cardName.value == "" ) {
  alert( "Please enter your card name!" );
  return false;
}

else if( document.buyForm.expiryDate.value == "" ) {
  alert( "Please enter the expiry date!" );
  return false;
}

else if( document.buyForm.securityCode.value == "" ) {
  alert( "Please enter your security Code!" );
  return false;
}

else if(isNaN(document.buyForm.securityCode.value)){
  alert( "Please enter a valid security code!" );
  return false;
}

else if( document.buyForm.Fname.value == "" ) {
  alert( "Please enter your First name!" );
  return false;
}

else if( document.buyForm.Lname.value == "" ) {
  alert( "Please enter your Last name!" );
  return false;
  }
 
else if( document.buyForm.country.value == "" ) {
  alert( "Please enter your Country/Region!" );
  return false;
  }  

else if( document.buyForm.address.value == "" ) {
  alert( "Please enter your address!" );
  return false;
}

else if( document.buyForm.city.value == "" ) {
  alert( "Please enter your town/city!" );
  return false;
}

else if( document.buyForm.zip.value == "" ) {
  alert( "Please enter your postcode/zip!" );
  return false;
}

else if(isNaN(document.buyForm.zip.value)){
  alert( "Please enter a valid postcode/zip!" );
  return false;
}

else if( document.buyForm.phone.value == "" ) {
  alert( "Please enter your phone number!" );
  return false;
}

else if(isNaN(document.buyForm.phone.value)){
  alert( "Please enter a valid phone number!" );
  return false;
}

else if( document.buyForm.email.value == "" ) {
  alert( "Please enter your email address!" );
  return false;
}

else if( document.buyForm.date.value == "" ) {
  alert( "Please enter the delivery date!" );
  return false;
}
else{ 
  alert("Your order is confirmed!");
  
}
}

