// MENU DATA
const menuItems = [
  {
    name: "Cheese Burger",
    price: "$8",
    image: "https://source.unsplash.com/400x300/?burger"
  },
  {
    name: "Italian Pizza",
    price: "$12",
    image: "https://source.unsplash.com/400x300/?pizza"
  },
  {
    name: "Pasta Alfredo",
    price: "$10",
    image: "https://source.unsplash.com/400x300/?pasta"
  }
];

// DYNAMIC MENU
const menuContainer = document.getElementById("menuContainer");

if (menuContainer) {
  menuItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";

    card.innerHTML = `
      <div class="card h-100">
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.price}</p>
        </div>
      </div>
    `;

    menuContainer.appendChild(card);
  });
}

// FORM VALIDATION
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
      feedback.textContent = "Please fill in all fields.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Message sent successfully!";
      feedback.style.color = "green";
      form.reset();
    }
  });
}
