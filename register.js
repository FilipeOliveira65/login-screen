
var run = document.getElementById("enter");
var warning = document.getElementById("warning");
var close = document.getElementById("ok");

run.addEventListener("click", function() {
    var fName = document.getElementById("fName").value;
    var age = document.getElementById("age").value;
    var user = document.getElementById("userName").value;
    var passWord = document.getElementById("passWord").value;

    if (fName == "" || age == "" || user == "" || passWord == "") {
        warning.style.display = "flex";

        close.addEventListener("click", function() {
            warning.style.display = "none";

        })

    } else {
        window.open("./principal.html", "_self");
    }

    localStorage.setItem("Name", fName);
    localStorage.setItem("Age", age);
    localStorage.setItem("User", user);
    localStorage.setItem("Pass", passWord);

    console.log("Ok")
})