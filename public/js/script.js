document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
    this.reset();
});