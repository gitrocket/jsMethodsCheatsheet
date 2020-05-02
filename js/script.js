
var dateElement = document.getElementById("date");
dateElement.innerHTML = new Date().toDateString();

/* definitions of the methods */
/******************************/

/* gobal variables for definitions */
var theAnswer = document.getElementById("answer")
theAnswer.style.display = "inline-block";

/* defintions of each method */
document.getElementById("length").addEventListener("click", function() {
    theAnswer.innerHTML = "The length property of an object which is an instance of type Array sets or returns the number of elements in that array.";
});

document.getElementById("split").addEventListener("click", function() {
    theAnswer.innerHTML = "The split() method divides a String into an ordered set of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.";
});

document.getElementById("reverse").addEventListener("click", function() {
    theAnswer.innerHTML = "The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.";
});

document.getElementById("join").addEventListener("click", function() {
    theAnswer.innerHTML = "The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.";
});

document.getElementById("push").addEventListener("click", function() {
    theAnswer.innerHTML = "The push() method adds one or more elements to the end of an array and returns the new length of the array.";
});

document.getElementById("unshift").addEventListener("click", function() {
    theAnswer.innerHTML = "The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.";
});

document.getElementById("pop").addEventListener("click", function() {
    theAnswer.innerHTML = "The pop() method removes the last element from an array and returns that element. This method changes the length of the array.";
});

document.getElementById("shift").addEventListener("click", function() {
    theAnswer.innerHTML = "The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.";
});

document.getElementById("charAt").addEventListener("click", function() {
    theAnswer.innerHTML = "The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.";
});

document.getElementById("substring").addEventListener("click", function() {
    theAnswer.innerHTML = "The substring() method returns the part of the string between the start and end indexes, or to the end of the string.";
});

document.getElementById("indexOf").addEventListener("click", function() {
    theAnswer.innerHTML = "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.";
});

document.getElementById("replace").addEventListener("click", function() {
    theAnswer.innerHTML = "Replace takes a search character, and replace character, and replaces the first instance of the search character with the replacement character";
});

document.getElementById("map").addEventListener("click", function() {
    theAnswer.innerHTML = "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.";
});

document.getElementById("filter").addEventListener("click", function() {
    theAnswer.innerHTML = "The filter() method creates a new array with all elements that pass the test implemented by the provided function.";
});

document.getElementById("reduce").addEventListener("click", function() {
    theAnswer.innerHTML = "The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.";
});

document.getElementById("slice").addEventListener("click", function() {
    theAnswer.innerHTML = "The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.";
});

document.getElementById("splice").addEventListener("click", function() {
    theAnswer.innerHTML = "The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.";
});

document.getElementById("sort").addEventListener("click", function() {
    theAnswer.innerHTML = "The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.";
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













