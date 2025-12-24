const form = document.getElementById("bookingForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    message.style.color = "green";
    message.textContent = "Thank you " + name + "! Your booking request has been submitted.";

    form.reset();
});