let cartCount = 0;

function addToCart(item){

  cartCount++;

  document.getElementById("cart-count").innerText = cartCount;

  alert(item + " added to cart!");
}

/* CONTACT FORM */

document
.getElementById("contact-form")
.addEventListener("submit", function(event){

  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){

    alert("Please fill all fields");

    return;
  }

  alert("Message sent successfully!");

  document.getElementById("contact-form").reset();
});