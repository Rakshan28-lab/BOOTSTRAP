(function() {
    // 1. Initialize with your Public Key (from EmailJS dashboard)
    emailjs.init("D5YnwovUGYAzA1FHt");
})();

window.onload = function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents page reload
        
        const btn = document.getElementById('submit-btn');
        btn.innerText = 'Sending...';

        // 2. Send the form data
        // "service_id" and "template_id" come from your EmailJS account
        emailjs.sendForm('service_qg3dmh5', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                alert('Sent Successfully!');
                btn.innerText = 'Send Message';
                form.reset(); // Clears the form
            }, function(error) {
                alert('Failed to send... ' + JSON.stringify(error));
                btn.innerText = 'Send Message';
            });
    });
}