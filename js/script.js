/*BURGER*/
const ico = document.querySelector('.burger');
ico.addEventListener("click", function () {
    document.querySelector('.burger').classList.toggle("active");
    document.querySelector('.menu').classList.toggle("active");
})
const close = document.querySelector('ul');
close.addEventListener("click", function () {
    document.querySelector('.burger').classList.remove("active");
    document.querySelector('.menu').classList.remove("active");
})
/*SCROLL*/
$(document).ready(function () {
    $(".scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
})
/*REVEAL*/
window.sr = ScrollReveal();
sr.reveal('.imac, .offer1, .web1, textarea, .envelope, #send', {
    reset: true,
    delay: 500,
    distance: 0
});
sr.reveal('h2, p, input', {
    reset: true,
    delay: 300
});
sr.reveal('.offer2, .web2,.now', {
    reset: true,
    delay: 750
});
sr.reveal('.offer3, .web3', {
    reset: true,
    delay: 1000
});
sr.reveal('.offer4, .web4', {
    reset: true,
    delay: 1250
});
/*Samopiszacy*/
var typing = document.querySelector('.welcome');
var currentIndex = 0;

var startTyping = function (text) {
    var interval = setInterval(function () {
        if (text.length > currentIndex) {
            typing.textContent += text[currentIndex];
            currentIndex++;
        } else {
            clearInterval(interval)
        }
    }, 50 + Math.random() * 50)
}

startTyping("Cześć! \n Nazywam się Marcin i zajmuję się tworzeniem \n stron internetowych. \n Jeśli potrzebujesz prostej ale profesjonalnej strony, \n dodatkowo stworzonej według najnowszysch standardów, \n zapraszam do kontaktu.");
