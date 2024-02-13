var root = document.querySelector(':root');
var customProperties = getComputedStyle(root);
var valorVertical = customProperties.getPropertyValue('--rotateY'); // Custom property vertical
var valorHorizontal = customProperties.getPropertyValue('--rotateX');
var rangoVertical = document.getElementById('rangoVertical') // Slider
var rangoHorizontal = document.getElementById('rangoHorizontal');

var mostrarResultado = document.getElementById('toPrint');


rangoVertical.oninput = function() {
	root.style.setProperty('--rotateY', this.value+'deg');
}

rangoHorizontal.oninput = function() {
	root.style.setProperty('--rotateX', this.value+'deg');
}