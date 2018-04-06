/* global  $ */
// Javascript function that wraps everything
$(document).ready(function() {
  // scroll script for nav links
  $(".back-to-top").on("click", function(e) {
    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      300,
      function() {
        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      }
    ); // end animate
  }); // end scroll script
}); // end jQuery document ready

// function that calculates the percentage of completed items i have on my about page and displays to the screen
function expandingList() {
  // Elements
  // all the list items
  var listItems = document.getElementsByClassName("list-item");
  // all the list items with the strike-through class
  var strikeThroughs = document.getElementsByClassName("strike-th");
  // where to place the final percent on the screen
  var percentToScreen = document.getElementById("list-percent");

  // Calculations
  // the percent of items I've yet to learn
  var thePercent = strikeThroughs.length / listItems.length;
  // the percent as an integer to display
  thePercent = Math.round(thePercent.toFixed(2) * 100);

  // Text Node
  // create a text node off the calculated percentage
  var percentNode = document.createTextNode(thePercent);
  // if statement so i don't get a js error on pages without the element to append to
  if (percentToScreen) {
    // append the percent calculated to the element on the screen
    percentToScreen.appendChild(percentNode);
  }
} // end expandingList()

expandingList();

/* copyright date at bottom of footer */
function getCurrentYearString() {
  return `${new Date().getFullYear()}`;
}

function addYearToHtml() {
  let jsYear = document.getElementById("js-date");
  const textNodeToAppend = document.createTextNode(getCurrentYearString());
  jsYear.appendChild(textNodeToAppend);
}

addYearToHtml();
