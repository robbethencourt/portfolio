// Javascript function that wraps everything
$(document).ready(function(){

	// scroll script for nav links
	$(".back-to-top").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({

	       scrollTop: $(hash).offset().top

	     }, 300, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;

	     }); // end animate

	}); // end scroll script

}); // end jQuery document ready


// function that calculates the percentage of completed items i have on my about page and displays to the screen
function expandingList() {
	
	// Elements
	// all the list items
	var list_items = document.getElementsByClassName('list-item');
	// all the list items with the strike-through class
	var strike_throughs = document.getElementsByClassName('strike-th');
	// where to place the final percent on the screen
	var percent_to_screen = document.getElementById('list-percent');

	// Calculations
	// the percent of items I've yet to learn
	var the_percent = (list_items.length - strike_throughs.length) / list_items.length;
	// the percent as an integer to display
	the_percent = the_percent.toFixed(2) * 100;

	// Text Node
	// create a text node off the calculated percentage
	var percent_node = document.createTextNode(the_percent);
	// if statement so i don't get a js error on pages without the element to append to
	if (percent_to_screen) {
		// append the percent calculated to the element on the screen
		percent_to_screen.appendChild(percent_node);
	}

} // end expandingList()

expandingList();