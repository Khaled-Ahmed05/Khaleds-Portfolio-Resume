var name = 'Khaled Ahmed';
var title = 'Software Engineer';
var speed = 100;

function typeWriter(text, elementId, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    
    typing();
}

document.addEventListener("DOMContentLoaded", function () {
    typeWriter(name, "name", function () {
    typeWriter(title, "title");
    });
});

var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

var images = document.getElementsByTagName('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
  }
}