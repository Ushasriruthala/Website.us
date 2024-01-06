document.addEventListener("DOMContentLoaded", function () {
    // Accessing form element
    const contactForm = document.querySelector("#contact form");

    // Adding an event listener to the form submission
    contactForm.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Retrieve form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Validate the form data (you may want to add more robust validation)
        if (name && email && message) {
            // Display a simple alert with the form data
            alert("Form submitted successfully!\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);

            // You can add additional logic here, such as sending the form data to a server.
        } else {
            alert("Please fill in all fields.");
        }
    });
});

