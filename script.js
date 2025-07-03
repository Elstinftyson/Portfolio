document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! (Demo only)');
        form.reset();
    });
}); 