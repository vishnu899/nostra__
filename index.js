
     var to = document.querySelector(".vishnu")

    var cl = document.getElementById("close")
   
cl.addEventListener("click",function()
{
    to.style.display = "none"
    cl.style.display = "none"
    to.style.hover = "translate-y-1"
})


var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var move = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right = "0"

})

move.addEventListener("click",function()
{
    sidenav.style.right = "-50%"
})

var counter = 1;
setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
}, 5000);

var a = document.getElementById("signin")
var btn = document.getElementById("signup")



var colors = ["tomato","brown","chartreuse","cyan","crimson","salmon","green","gray","turquoise","violet","pink","fuchsia","quid","indigo","gold","khadi","lavender","coral","deepskyblue"]
var index = 0;

function changeColor() {
    var randomindex = Math.floor(Math.random() * colors.length);
    var color = colors[randomindex];
    document.getElementById("tecl").style.color = color;
}
setInterval(function(){
    changeColor();
}, 1000);




function scrolll(){
    var left = document.querySelector(".scrollimages");
    left.scrollBy(-350,0)
}

function scrollr(){
    var right = document.querySelector(".scrollimages");
    right.scrollBy(350,0)
}

let sections = document.querySelector("#new")
let navlinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getElementById("most")

    if(top >= offset && top < offset + height) {
          navlinks.forEach(links => {
            links.classList.remove("active");
            document.querySelector("header nav a [href*="+id+"]").classList.add("active");
          }, 1000);
    };

});
};


let section = document.querySelector("#arr")
let navlink = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getElementById("new")

    if(top >= offset && top < offset + height) {
          navlink.forEach(links => {
            links.classList.remove("active");
            document.querySelector("header nav a [href*="+id+"]").classList.add("active");
          }, 1000);
    };

});
};