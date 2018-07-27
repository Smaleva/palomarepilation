
var faq = document.querySelector(".faq-item-active"),
    faq_hidden = document.querySelector(".faq-item-hidden");
faq.addEventListener("click", function (e) {
    e.preventDefault();
    faq_hidden.classList.toggle("faq-item-hidden");
});