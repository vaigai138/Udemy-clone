var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

var coursecontainer1 = document.querySelector(".course-container-1")
var coursesbutton = document.getElementById("additional-courses")
var showless = document.getElementById("show-less")

coursecontainer1.style.display="none"
showless.style.display="none"

function showallcourses()
{
    coursecontainer1.style.display="flex"
    coursesbutton.style.display="none"
    showless.style.display="block"

}

function showLess() {
    var coursecontainer1 = document.querySelector(".course-container-1");
    var coursesbutton = document.getElementById("additional-courses");
    var showless = document.getElementById("show-less");

    coursecontainer1.style.display = "none";
    coursesbutton.style.display = "block";
    showless.style.display = "none";
}

function shownav(){
    var sidenavbar=document.querySelector(".side-navbar")
    sidenavbar.style.left="0%"
}

function closenav(){
    var sidenavbar=document.querySelector(".side-navbar")
    sidenavbar.style.left="-50%"
}



