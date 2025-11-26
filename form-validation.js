document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact_form');
    const nameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const methodInput = document.getElementById('contact-method');
    const messageInput = document.getElementById('message');

    // Helper function to display error messages
    const showError = (input, message) => {
        // Check if an error message already exists
        let errorSpan = input.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains('error-message')) {
            errorSpan = document.createElement('div');
            errorSpan.classList.add('error-message');
            input.parentNode.insertBefore(errorSpan, input.nextSibling);
        }
        errorSpan.textContent = message;
        errorSpan.style.color = '#d32f2f';
        errorSpan.style.fontSize = '14px';
        errorSpan.style.marginTop = '-10px';
        errorSpan.style.marginBottom = '10px';
        input.style.borderColor = '#d32f2f';
    };

    // Helper function to clear error messages
    const clearError = (input) => {
        let errorSpan = input.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.remove();
        }
        input.style.borderColor = '#ce93d8'; // Reset to original border color
    };

    form.addEventListener('submit', (e) => {
        let isValid = true;

        // Validate Full Name
        if (nameInput.value.trim().length < 2) {
            showError(nameInput, 'Full Name must be at least 2 characters long.');
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Validate Email Address
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Validate Preferred Contact Method
        if (methodInput.value === "") {
            showError(methodInput, 'Please select a preferred contact method.');
            isValid = false;
        } else {
            clearError(methodInput);
        }

        // Validate Message
        if (messageInput.value.trim().length < 10) {
            showError(messageInput, 'Message must be at least 10 characters long.');
            isValid = false;
        } else {
            clearError(messageInput);
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            e.preventDefault();
        } else {
            // Optional: Provide feedback for successful validation before submission
            // alert('Form is valid and ready to send!');
        }
    });
});
