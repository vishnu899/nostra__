
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