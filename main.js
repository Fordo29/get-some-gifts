

let recipient;
let item;
let price;
let formFill = document.getElementById("formFill");
window.addEventListener('load', loadPage);

function fetchHolidayList() {
fetch("https://mysterious-mesa-00016.herokuapp.com/items")
.then(response => response.json())
  .then(data => data)
};



function loadPage() {
  fetchHolidayList().then(data => {
    recipient = data.map(gift => gift.recipient);
    item = data.map(gift => gift.name);
    price = data.map(gift => gift.priceInDollars);
  })
  formFill.innerHTML +=
  `<td>${recipient}!</td>
  <td>${item}!</td>
  <td>$${price}</td>`
}
