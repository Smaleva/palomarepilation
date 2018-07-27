$('p.faq-item-active').on('click', function (e) {
    e.preventDefault;
    $('p.faq-item-hidden').toggleClass('faq-item-hidden');
});