// scroll to top
var scrollButton = document.querySelector("#scroll-button");

scrollButton.addEventListener("click", scroll, false);
scrollButton.addEventListener("keydown", scroll, false);

function scroll(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

/* copyright date at bottom of footer */
function getCurrentYearString() {
  var fullYear = new Date().getFullYear();
  return fullYear.toString();
}

function addYearToHtml() {
  var jsYear = document.getElementById("js-date");
  var textNodeToAppend = document.createTextNode(getCurrentYearString());
  jsYear.appendChild(textNodeToAppend);
}

addYearToHtml();
