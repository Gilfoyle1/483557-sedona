	var searchButton = document.querySelector(".button-search");
	var form = document.querySelector(".section-form");

	form.classList.add("form-hide");

	searchButton.addEventListener("click", function() {
	    form.classList.toggle("form-hide");
	});