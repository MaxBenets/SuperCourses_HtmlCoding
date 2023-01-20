let emailInput = document.querySelector("#emailInput");
let subscribeButton = document.querySelector("#subscribeButton");
let totop = document.querySelector("#totop");

subscribeButton.onsubmit = () => {
   if (emailInput.value.length == 0) {
      return false;
   }
}
totop.onclick = () => {
   document.body.scrollTop = 0
   document.documentElement.scrollTop = 0
}

document.onscroll = () => {
   if (window.scrollY > 500) {
      totop.classList.add("visible")
   }
   else {
      totop.classList.remove("visible")
   }
}