var myName = document.getElementsByClassName("myName")[0];
myName.addEventListener("touchstart", function() {
    myName.classList.add("myNameHover");
})
myName.addEventListener("touchend", function() {
    myName.classList.remove("myNameHover");
});