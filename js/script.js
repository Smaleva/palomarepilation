
var faq = document.querySelectorAll("p.faq-item-active"),
    faqHidden = document.querySelectorAll("p.faq-item-hidden");

for (var i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function (e) {
        e.preventDefault();
        faqHidden.classList.toggle("faq-item-hidden");
    });
};