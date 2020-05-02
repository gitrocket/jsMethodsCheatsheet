
var dateElement = document.getElementById("date");
dateElement.innerHTML = new Date().toDateString();

/* definitions of the methods */
/******************************/

/* gobal variables for definitions */
var theAnswer = document.getElementById("answer")
theAnswer.style.display = "inline-block";

/* defintions of each method */
document.getElementById("length").addEventListener("click", function() {
    theAnswer.innerHTML = "length returns the number of characters in a string";
});

document.getElementById("split").addEventListener("click", function() {
    theAnswer.innerHTML = "split returns an array of characters from a string";
});

document.getElementById("reverse").addEventListener("click", function() {
    theAnswer.innerHTML = "reverse reverses items in an array";
});

document.getElementById("join").addEventListener("click", function() {
    theAnswer.innerHTML = "join concatenates characters into strings";
});

document.getElementById("push").addEventListener("click", function() {
    theAnswer.innerHTML = "push puts items onto the back of an array";
});

document.getElementById("unshift").addEventListener("click", function() {
    theAnswer.innerHTML = "unshift puts items onto the front of an array";
});

document.getElementById("pop").addEventListener("click", function() {
    theAnswer.innerHTML = "pop removes items off the end of an array";
});

document.getElementById("shift").addEventListener("click", function() {
    theAnswer.innerHTML = "shift removes items off the front of an array";
});

document.getElementById("charAt").addEventListener("click", function() {
    theAnswer.innerHTML = "charAt takes an index value and returns the character associated with it";
});

document.getElementById("substring").addEventListener("click", function() {
    theAnswer.innerHTML = "extracts characters from a string using indices";
});

document.getElementById("indexOf").addEventListener("click", function() {
    theAnswer.innerHTML = "takes a character and returns its index at the first instance";
});

document.getElementById("replace").addEventListener("click", function() {
    theAnswer.innerHTML = "replace takes a search character, and replace character, and replaces the first instance of the search character with the replacement character";
});

/* site animations */

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('mouseover', e => {
        e.target.style.transform = "scale(0.9)"; 
    })
})

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('mouseout', e => {
        e.target.style.transform = "scale(1.0)"; 
    })
})













