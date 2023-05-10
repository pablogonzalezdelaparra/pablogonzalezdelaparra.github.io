function responsiveNavbar() {
  var x = document.getElementById("navbar");
  var y = document.getElementById("responsive-icon");
  if (x.className === "navbar") {
    x.className += " responsive";
    y.className = "bi bi-x-lg"
  } else {
    x.className = "navbar";
    y.className = "bi bi-list"
  }
}