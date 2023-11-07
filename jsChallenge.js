function challenge1 (event) {
    console.log(event.target);
    console.log("in the function");
}
document.querySelector("#suscribe").addEventListener("click", challenge1);