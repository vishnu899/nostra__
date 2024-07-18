


var colors = ["tomato","brown","chartreuse","cyan","crimson","salmon","green","gray","turquoise","violet","pink","fuchsia","quid","indigo","gold","khadi","lavender","coral","deepskyblue"]
var index = 0;

function changeColor() {
    var randomindex = Math.floor(Math.random() * colors.length);
    var color = colors[randomindex];
    document.getElementById("ele").style.color = color;
}
setInterval(function(){
    changeColor();
}, 1000);





var colors = ["tomato","brown","chartreuse","cyan","crimson","salmon","green","gray","turquoise","violet","pink","fuchsia","quid","indigo","gold","khadi","lavender","coral","deepskyblue"]
var index = 0;

function changeColor() {
    var randomindex = Math.floor(Math.random() * colors.length);
    var color = colors[randomindex];
    document.getElementById("elec").style.color = color;
}
setInterval(function(){
    changeColor();
}, 1000);



//product search functionality
var productconatiner = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productconatiner.querySelectorAll("div")


search.addEventListener("onkeyup",function(){
    var enteredValue = event.target.value.toUpperCase()
    
    for(count = 0; count< productlist.length; count=count+1)
    {
              var productname = productlist[count].querySelectorAll("p").textContent


        
        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display = "none"
        }
        else[
            productlist[count].style.display = "block"
        ]
    }
})

var check = document.getElementsByName("check")
skill = []
check[0].addEventListener("click",function(){
    if(check[0].checked){
        console.log("checked")
    }
    else{
        console.log("unchecked")
    }
})

