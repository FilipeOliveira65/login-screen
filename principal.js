document.getElementById("fName").innerHTML = localStorage.getItem("Name");
document.getElementById("age").innerHTML = localStorage.getItem("Age");
document.getElementById("user").innerHTML = localStorage.getItem("User");
document.getElementById("pass").innerHTML = localStorage.getItem("Pass");


var del = document.getElementById("delete");
var warning = document.getElementById("warning");

del.addEventListener("click", function() {
    warning.style.display = "flex";

    const finish = document.getElementById("continue");

    finish.addEventListener("click", function() {
        localStorage.clear()

        window.open("./register.html", "_self")
    
        console.log(localStorage.getItem("User"))
    })

    const canc = document.getElementById("cancel");

    canc.addEventListener("click", function() {
        warning.style.display = "none";
    })
    
})