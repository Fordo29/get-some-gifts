

let giftData;
let giftMoney;
let formFill = document.getElementById("formFill");
let giftCost = document.getElementById("totalGiftCost");

// function fetchHolidayList() {
//   fetch("https://mysterious-mesa-00016.herokuapp.com/items")
//     .then(response => response.json())
//     .then(data => {
//       return data
//     })
//     .catch(error => console.log(error));
// };

async function fetchHolidayList() {
  try {
    const response = await fetch("https://mysterious-mesa-00016.herokuapp.com/items");
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log(error);
  }
}

async function loadPage() {
  const data = await fetchHolidayList()
  giftData = data.reduce((acc, item) => {
    acc.push({id: item.id, recipient: item.recipient, name: item.name, link: item.link, priceInDollars: item.priceInDollars})
    return acc;
  }, []);
  displayGiftInfo();
}

function displayGiftInfo() {
  formFill.innerHTML = '';
  giftData.forEach(gift => {
    formFill.innerHTML +=
    `<tr>
      <td>${gift.recipient}</td>
      <td><a href=${gift.link}>${gift.name}</a></td>
      <td>$${gift.priceInDollars}</td>
      <td><input id=${gift.id} type="checkbox" value=${gift.priceInDollars}></td>
    </tr>`;
  });
  giftCost.innerHTML = `$${totalCost()}`;
}

function totalCost() {
  giftMoney = giftData.reduce((acc, item) => {
    acc += item.priceInDollars;
    return acc;
  }, 0)
  return giftMoney
}

window.addEventListener('load', loadPage);
