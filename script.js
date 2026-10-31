// ========== CONTACT FORM ==========
// Get the form and the spot where messages show up
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
// Run this when the Send button is clicked
form.addEventListener("submit", function (event) {
    // Stop the page from reloading
    event.preventDefault();
    // Get what the user typed 
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    // Check that no field is empty
    if (name === "" || email === "" || message === "") {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.style.color = "#B00020"; // red for errors
        return;
    }
    // Check that the email has an @ and a dot
    if (!email.includes("@") || !email.includes(".")) {
        formStatus.textContent = "Please enter a valid email address.";
        formStatus.style.color = "#B00020";
        return;
    }
    // Everything looks good: show a success message and clear the form
    formStatus.textContent = "Thanks, " + name + "! Your message has been sent.";
    formStatus.style.color = "#1B7F3B"; // green for success
    form.reset();
});

// ========== ACTIVE NAV LINK ==========
// Highlight the nav link for the section the user is looking at
// Get all sections and all nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
// Run this every time the user scrolls
window.addEventListener("scroll", function () {
    let current = "";
    // Find which section is on the screen right now
    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    // Add the "active" class to the matching link, remove it from the others
    navLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
// ========== BACK TO TOP BUTTON ==========
// A button that appears after scrolling down and takes you back to the top
// Create the button with JavaScript and add it to the page
const topButton = document.createElement("button");
topButton.textContent = "↑";
topButton.id = "top-button";
topButton.setAttribute("aria-label", "Back to top");
document.body.appendChild(topButton);
// Show the button only after scrolling down 400px
window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});
// Scroll back to the top when the button is clicked
topButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});