(function() {
    emailjs.init("D5YnwovUGYAzA1FHt");
})();

window.onload = function() {
    // This must match the ID in your HTML tag
    const form = document.getElementById('contact-form');
    const btn = document.getElementById('submit-btn');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        btn.innerText = 'Sending...';

       
        emailjs.sendForm('service_qg3dmh5', 'template_vg17stk', this)
            .then(function() {
                alert('Sent Successfully!');
                btn.innerText = 'Send Message';
                form.reset(); 
            }, function(error) {
                alert('Failed to send... ' + JSON.stringify(error));
                btn.innerText = 'Send Message';
            });
    });
}