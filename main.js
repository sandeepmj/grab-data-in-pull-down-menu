$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements
	$('#borough').change(function () {
		var myFeelings = $('#borough').find(':selected');
		feeling = myFeelings.data('feelings');
		console.log("How I feel about that place: ", feeling);
	});



}); // closes document ready
