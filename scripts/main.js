var navButton = document.querySelector("[data-toggle]")
var target = document.querySelector("[data-nav]")
var lineTarget1 = document.querySelector("#line1")
var lineTarget2 = document.querySelector("#line2")
var lineTarget3 = document.querySelector("#line3")
var greenLightSaber = document.querySelector("#lightsaber")
var redLightSaber = document.querySelector("#lightsaber2")

navButton.addEventListener('click', function() {
    target.classList.toggle("navbar-hidden");
    lineTarget1.classList.toggle("fade");
    lineTarget2.classList.toggle("pushR");
    lineTarget3.classList.toggle("pushL");
    greenLightSaber.classList.toggle("light");
    redLightSaber.classList.toggle("light2");
});