let changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", function() {

    let element2 = document.getElementById("element2");
    element2.classList.remove("col-11");
    element2.classList.add("col-6");


    let element3 = document.getElementById("element3");
    element3.classList.remove("col-11");
    element3.classList.add("col-5");
});

let backButton = document.getElementById("backButton");

backButton.addEventListener("click", function() {

    let element2 = document.getElementById("element2");
    element2.classList.remove("col-6");
    element2.classList.add("col-11");


    let element3 = document.getElementById("element3");
    element3.classList.remove("col-5");
    element3.classList.add("col-11");
});