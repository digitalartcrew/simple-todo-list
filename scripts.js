document.addEventListener("DOMContentLoaded", function(){

var input = document.querySelector("input");
var form   = document.querySelector("form");
var ul    = document.querySelector("ul");

form.addEventListener("submit", function(event){
  // step 0 - stop the default action of the form
  event.preventDefault();
  // step 1 - grab the input value
  var value = input.value;
  // step 2 - create a new list item
  var newLi = document.createElement("li");
  // step 3 - set the innerText of that list item to be the value
  newLi.innerText = value;
  // step 4 - append the list item to the UL
  ul.appendChild(newLi);
  // step 5 - reset the text of the input
  input.value = "";
  newLi.addEventListener("click", function(){
	if (this.classList.length === 0) {
		this.classList.add("completed");
	} else {
		this.classList.remove("completed");
	}
});

//Strike Method
//add an event listener to list items

//add a class to strike through 
//add a class to remove
});});