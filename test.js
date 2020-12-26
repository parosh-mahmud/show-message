
function msgPass() {
    var input = document.getElementById("input");
var submit = document.getElementById("submit");
var message = document.getElementById("message");
    var show = document.createElement("div").textContent
    var text = input.value;
    var h2 = document.createElement("h2")
    h2.className = "newText"
    
    h2.innerHTML = text
    
    message.appendChild(h2)
    document.getElementById("input").value = null;
    
    var newt = document.querySelector(".newText").innerHTML
    h2.classList.remove("h2")
    
    
    
    
    
}


