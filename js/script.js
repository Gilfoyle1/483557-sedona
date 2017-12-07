<<<<<<< HEAD
var button = document.querySelector(".button-search");
			
var form = document.querySelector(".section-form");
			
var arrival = document.querySelector("[name=arrival-date]")
			
button.addEventListener( "click", function (event) {
	event.preventDefault();
	form.classList.toggle("section-form-show");
	arrival.focus();
} )
=======
	var searchButton = document.querySelector(".button-search");
	var form = document.querySelector(".section-form");

	form.classList.add("form-hide");

	searchButton.addEventListener("click", function() {
	    form.classList.toggle("form-hide");
	});
>>>>>>> be2e4bb07bd56ec7ae535e1462523d4df5ee3967
