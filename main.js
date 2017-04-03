$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements
	$('#borough').on("change", function () { //note: change event
		var myFeelings = $('#borough').find(':selected'); // variable myFeelings holds selected item
		feeling = myFeelings.data('feelings'); // use data method to grab feelings info from html
		console.log(feeling); //let's see if it works
	});



}); // closes document ready
