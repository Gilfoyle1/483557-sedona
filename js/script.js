var button = document.querySelector(".button-search");
			
var form = document.querySelector(".section-form");
			
var arrival = document.querySelector("[name=arrival-date]");
			
button.addEventListener( "click", function (event) {
	event.preventDefault();
	form.classList.toggle("section-form");
	arrival.focus();
} );