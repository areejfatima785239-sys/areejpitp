// Main JavaScript for form validation and common functionality

// Contact Form Validation
// Contact Form Validation with Formspree
document.addEventListener('DOMContentLoaded', function() {
    const inquiryForm = document.getElementById('inquiryForm');
    
    if (inquiryForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        const charCount = document.getElementById('charCount');
        const successAlert = document.getElementById('successAlert');
        const errorAlert = document.getElementById('errorAlert');
        
        // Character counter for message
        messageInput.addEventListener('input', function() {
            const length = messageInput.value.length;
            charCount.textContent = length;
            charCount.className = length >= 10 ? 'text-success' : 'text-danger';
        });
        
        // Form validation before submission
        inquiryForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Reset previous states
            [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
                input.classList.remove('is-invalid');
            });
            successAlert.classList.add('d-none');
            errorAlert.classList.add('d-none');
            
            // Validate name
            if (!nameInput.value.trim()) {
                document.getElementById('nameError').textContent = 'Please enter your name.';
                nameInput.classList.add('is-invalid');
                isValid = false;
            }
            
            // Validate email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address.';
                emailInput.classList.add('is-invalid');
                isValid = false;
            }
            
            // Validate subject
            if (!subjectInput.value) {
                document.getElementById('subjectError').textContent = 'Please select a subject.';
                subjectInput.classList.add('is-invalid');
                isValid = false;
            }
            
            // Validate message
            if (messageInput.value.length < 10) {
                document.getElementById('messageError').textContent = 'Message must be at least 10 characters long.';
                messageInput.classList.add('is-invalid');
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault(); // Prevent Formspree submission
                errorAlert.classList.remove('d-none');
                errorAlert.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If valid, Formspree will handle the submission
                // You can show a loading state here if desired
                successAlert.classList.remove('d-none');
                successAlert.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending your message...';
            }
        });
    }

         
            
       
    
    // Add active class to current page in navbar
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
});