//Odpowiedzi znajdują się w konsoli


const tagSearch = document.querySelectorAll('article.first');
console.log(tagSearch);

for(var i = 0; i < tagSearch.length; i++){
    const h1Search = tagSearch[i].querySelectorAll('h1');
    console.log(h1Search.length);
    
}

//DOM_cz 1.2

//Zad 1

var title = document.getElementsByClassName("title")[0];


function getDataAnimation(element) {
    console.log(element);
    const Animation = document.querySelector("[data-animation]");
    console.log(Animation);
    }
  
  getDataAnimation(title);

//Zad 2

var home = document.querySelector("#home");
console.log(home);

var home2 = document.getElementById("home");
console.log(home2);

var dataDirection = document.querySelector("li[data-direction]");
console.log(dataDirection);

//Zad 3

var nav_li = document.querySelectorAll("nav li");
var div_p = document.querySelectorAll("div p");
var article_div = document.querySelectorAll("article div");

console.log(nav_li);
console.log(nav_li.length);

console.log(div_p);
console.log(div_p.length);

console.log(article_div);
console.log(article_div.length);


//Zad 4

var Article_first = document.querySelector("article.first");
console.log(Article_first);
console.log(Article_first.length);

//W tagu article nie ma żadnego znacznika h1
var Article_h1 = document.querySelectorAll("article h1");
console.log(Article_h1.length);


//DOM_cz 1.3

//Zad 1

var links = document.querySelector("link");
console.log(links);

var li_data = document.querySelector("li");
console.log(li_data);

console.log(li_data.dataset);


var nowaTabela = [];

function getDatasInfo(element) {
  

  for (var i = 0; i < element.length; i++) {
    newTab[i] = element[i].dataset;
  }


  console.log(li_data);
}

getDatasInfo(li_data);