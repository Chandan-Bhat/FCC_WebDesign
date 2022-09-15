import data from './data.json' assert { type: 'json' };
console.log(data);

let index = 0;

const img = document.getElementsByClassName("prod-img")[0];
const head = document.getElementsByClassName("prod-head")[0];
const price = document.getElementsByClassName("btn")[0];
const desc = document.getElementsByClassName("prod-desc")[0];

const frwd = document.getElementById("frwd");
const bkwd = document.getElementById("bkwd");

frwd.addEventListener("click", forward)



function forward(){
    index = (index + 1) % 5;
    img.setAttribute("src", data[index].img);
    head.innerText = data[index].head;
    price.innerText = `BUY NOW at $${data[index].price}`;
    desc.innerText = data[index].desc;
}
