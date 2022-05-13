// Typewriter
var i = 0;
var txt = 'Coming Soon...';
var speed = 150;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("coming").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter()