function myFunction() {
  var x = document.getElementsByClassName("nav-menu")[0];
  if (x.className === "nav-menu") {
    x.className += "responsive";
  } else {
    x.className = "nav-menu";
  }
}
