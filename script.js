const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
  
 
  // Handle form submission
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Collect form data
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send email using EmailJS
    emailjs
      .send("service_e6b0kdy", "template_c3xavfb", {
        name: name,
        email: email,
        message: message,
        subject: subject,
      })
      .then(function (response) {
        alert("Message sent successfully! Status: " + response.status + ", Text: " + response.text);
      })
      .catch(function (error) {
        console.error("Failed to send message:", error);
        alert("Failed to send message. Error: " + JSON.stringify(error));
      });
  });


