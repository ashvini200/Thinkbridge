// Scroll to section with smooth behavior
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Show random concept
function showRandomConcept() {
  const concepts = [
    "HTML: HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    "CSS: Cascading Style Sheets is used to describe the presentation of a document written in HTML or XML.",
    "JavaScript: JavaScript is a programming language that enables interactive web pages and is an essential part of web applications.",
  ];

  const randomConcept = concepts[Math.floor(Math.random() * concepts.length)];
  alert(`Random Concept:\n\n${randomConcept}`);
}

// Contact form handling
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});

// Initialize the page
window.onload = () => {
  // Add animation to section headers
  const sectionHeaders = document.querySelectorAll(".section-header");
  sectionHeaders.forEach((header) => {
    header.classList.add("fade-in");
  });
};
