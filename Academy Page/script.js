const form = document.getElementById("enrollForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  message.textContent = "Enrollment successful! We will contact you soon.";
  form.reset();
});
