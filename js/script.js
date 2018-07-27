
var faq = document.querySelectorAll(".faq-item-active"),
    faq_hidden = document.querySelectorAll(".faq-item-hidden");

for (var i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function (e) {
        e.preventDefault();
        faq_hidden.classList.toggle("faq-item-hidden");
    });
};