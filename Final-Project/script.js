// Department Search
function searchDepartment() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let items = document.getElementsByClassName("dept");

  for (let i = 0; i < items.length; i++) {
    let text = items[i].innerText.toLowerCase();
    items[i].style.display = text.includes(input) ? "block" : "none";
  }
}

// Form Validation
function validateForm() {
  let name = document.forms["contactForm"]["name"].value;
  let email = document.forms["contactForm"]["email"].value;
  let msg = document.forms["contactForm"]["message"].value;

  if (name === "" || email === "" || msg === "") {
    alert("All fields are required!");
    return false;
  }
  alert("Inquiry submitted successfully!");
  return true;
}