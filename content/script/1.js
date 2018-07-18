function myFunction() {
  var x = document.getElementsByClassName("h2");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}

document.getElementById("h2").innerHTML = 5 + 6;