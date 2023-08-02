const today = new Date ();
const thisYear = new Date().getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = "Rebecca L " + thisYear;
footer.appendChild(copyright);