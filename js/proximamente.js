// Typewriter
var i = 0;
var txt = 'Proximamente...';
var speed = 150;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("prox").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter()