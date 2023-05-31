let mStart = document.getElementById("moneyStart");
let mEnd = document.getElementById("moneyEnd");

let vStart = document.getElementById("valueMoneyStart");
let vEnd = document.getElementById("valueMoneyEnd");

let btn = document.getElementById("btn");
let covert = document.getElementById("covert");

let fixed = document.getElementById("fixed");

mStart.addEventListener("change", conversion);
mEnd.addEventListener("change", conversion);
vStart.addEventListener("input", conversion);
fixed.addEventListener("change", conversion);

btn.addEventListener("click", () => {
  const wait = mStart.value;
  mStart.value = mEnd.value;
  mEnd.value = wait;
  conversion();
});

function conversion() {
  base = mStart.value;
  target = mEnd.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${base}`)
    .then((value) => value.json())
    .then((data) => {
      let Rates = data.rates[target];
      covert.innerHTML = `1 ${base} = ${Rates.toFixed(fixed.value)} ${target}`;
      let valueEnd = Rates * vStart.value;
      vEnd.value = valueEnd.toFixed(fixed.value);
    });
}

conversion();
