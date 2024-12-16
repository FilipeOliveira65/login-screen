
var login = document.getElementById("enter");

var warning = document.getElementById("warning");

var passReset = document.getElementById("passReset");


var confirm = document.getElementById("save");

console.log(localStorage.getItem("User"))

login.addEventListener("click", function() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    
    if (localStorage.getItem("User") === null && localStorage.getItem("Pass") === null || localStorage.getItem("User") !== user) {

        warning.style.display = "flex";
        console.log(localStorage.getItem("User"))

    } else if (localStorage.getItem("User") === user && localStorage.getItem("Pass") !== pass) {

        console.log(localStorage.getItem("User"))

        passReset.style.display = "flex";

    } else if (localStorage.getItem("User") === user && localStorage.getItem("Pass") === pass ) {

        window.open("./principal.html", "_self");
    }
})

confirm.addEventListener("click", function() {
    var newPass = document.getElementById("nPass").value;

    localStorage.removeItem("Pass");
    
    localStorage.setItem("Pass", newPass);

    passReset.style.display = "none";

    console.log(localStorage.getItem("Pass"))
    console.log(localStorage.getItem("User"))
})