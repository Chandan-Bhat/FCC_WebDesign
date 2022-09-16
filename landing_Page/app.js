import data from './json/data.json' assert { type: 'json' };
console.log(data);

let index = 0;

const img = document.getElementsByClassName("imgs");
const head = document.getElementsByClassName("prod-head")[0];
const price = document.getElementsByClassName("btn")[0];
const desc = document.getElementsByClassName("prod-desc")[0];

const frwd = document.getElementById("frwd");
const bkwd = document.getElementById("bkwd");

frwd.addEventListener("click", forward);
bkwd.addEventListener("click", backward);

function forward(){
    
    img[index].classList.toggle("active");
    img[index].classList.toggle("inactive");

    index = (index + 1) % 5;

    img[index].classList.toggle("inactive");
    img[index].classList.toggle("active");
    head.innerText = data[index].head;
    price.innerText = `BUY NOW at $${data[index].price}`;
    desc.innerText = data[index].desc;
}

function backward() {
    img[index].classList.toggle("active");
    img[index].classList.toggle("inactive");

    index = (index - 1);
    if(index < 0) index = 0;

    img[index].classList.toggle("inactive");
    img[index].classList.toggle("active");
    head.innerText = data[index].head;
    price.innerText = `BUY NOW at $${data[index].price}`;
    desc.innerText = data[index].desc;
}

// Translation code

const texts = document.getElementsByClassName("text");
const lang = document.getElementById("lang");

lang.addEventListener("change", translate);
let file = "";

function translate() {
    if(lang.value === "es"){
        file = "./json/es.json";
    }
    else if(lang.value === "en"){
        file = "./json/en.json";
    }
    fetch(file).then(
        (response) => response.json()
    ).then((json) => {
        console.log(json);
        for(let i = 0; i < 11; i++){
            //console.log(json[i]);
            texts[i].innerText = json[i];
        }
    })   
}
