function attendClass() {
    document.getElementById("woodworkingclass").setAttribute("value", "Yes");
  }

  function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
    x.className += " responsive";
    } else {
    x.className = "navbar";
    }
  }

  function toggleDisplay() {
    const listItems = document.querySelectorAll("li");
    for (const listItem of listItems) {
      listItem.style.display = listItem.style.display === "block" ? "none" : "block";
    }
    }  
    document.querySelector("a").addEventListener("click", toggleDisplay);