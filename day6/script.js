// Enhanced data: keywords and meaning
const keywords = {
  html: [
    {
      word: "<!DOCTYPE>",
      desc: "Defines the document type and HTML version.",
      icon: "fas fa-code",
    },
    {
      word: "<html>",
      desc: "Root element of an HTML document.",
      icon: "fab fa-html5",
    },
    {
      word: "<head>",
      desc: "Container for metadata like title and links.",
      icon: "fas fa-heading",
    },
    {
      word: "<body>",
      desc: "Contains all visible content of the webpage.",
      icon: "fas fa-body",
    },
    {
      word: "<h1> to <h6>",
      desc: "Headings from largest (h1) to smallest (h6).",
      icon: "fas fa-heading",
    },
    {
      word: "<p>",
      desc: "Defines a paragraph of text.",
      icon: "fas fa-paragraph",
    },
    {
      word: "<a>",
      desc: "Defines a hyperlink to another page or resource.",
      icon: "fas fa-link",
    },
    {
      word: "<img>",
      desc: "Embeds an image in the document.",
      icon: "fas fa-image",
    },
    {
      word: "<div>",
      desc: "Defines a division or section in the document.",
      icon: "fas fa-square",
    },
    {
      word: "<span>",
      desc: "Inline container for phrasing content.",
      icon: "fas fa-i-cursor",
    },
  ],
  css: [
    {
      word: "color",
      desc: "Sets the color of text content.",
      icon: "fas fa-palette",
    },
    {
      word: "background",
      desc: "Sets all background style properties at once.",
      icon: "fas fa-image",
    },
    {
      word: "margin",
      desc: "Sets the margin area on all four sides of an element.",
      icon: "fas fa-arrows-alt",
    },
    {
      word: "padding",
      desc: "Sets the padding area on all four sides of an element.",
      icon: "fas fa-arrows-alt-h",
    },
    {
      word: "display",
      desc: "Sets whether an element is treated as a block or inline element.",
      icon: "fas fa-square-full",
    },
    {
      word: "flexbox",
      desc: "Layout model for responsive design with flexible containers.",
      icon: "fas fa-th",
    },
    {
      word: "grid",
      desc: "CSS layout system for two-dimensional layouts.",
      icon: "fas fa-th-large",
    },
    {
      word: "position",
      desc: "Sets how an element is positioned in a document.",
      icon: "fas fa-map-marker-alt",
    },
    {
      word: "transition",
      desc: "Defines the transition between two states of an element.",
      icon: "fas fa-exchange-alt",
    },
    {
      word: "animation",
      desc: "Applies animation to elements with keyframes.",
      icon: "fas fa-film",
    },
  ],
  js: [
    {
      word: "let",
      desc: "Declares a block-scoped variable, optionally initializing it.",
      icon: "fas fa-i-cursor",
    },
    {
      word: "const",
      desc: "Declares a block-scoped constant, cannot be reassigned.",
      icon: "fas fa-lock",
    },
    {
      word: "function",
      desc: "Defines a function with the specified parameters.",
      icon: "fas fa-cogs",
    },
    {
      word: "if/else",
      desc: "Executes a statement if condition is true, else executes another.",
      icon: "fas fa-code-branch",
    },
    {
      word: "for",
      desc: "Creates a loop that consists of three expressions.",
      icon: "fas fa-redo",
    },
    {
      word: "console.log",
      desc: "Outputs a message to the web console.",
      icon: "fas fa-terminal",
    },
    {
      word: "DOM",
      desc: "Document Object Model - API for HTML and XML documents.",
      icon: "fas fa-code",
    },
    {
      word: "event",
      desc: "Actions or occurrences that happen in the system.",
      icon: "fas fa-mouse-pointer",
    },
    {
      word: "API",
      desc: "Application Programming Interface for web interactions.",
      icon: "fas fa-network-wired",
    },
    {
      word: "JSON",
      desc: "Lightweight data-interchange format inspired by JavaScript.",
      icon: "fas fa-file-code",
    },
  ],
};

// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
  themeIcon.className =
    document.body.dataset.theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  localStorage.setItem("theme", document.body.dataset.theme);
});

// Check for saved theme preference
if (localStorage.getItem("theme") === "dark") {
  document.body.dataset.theme = "dark";
  themeIcon.className = "fas fa-sun";
}

// Populate sections with cards
function populateSection(sectionId, data) {
  const container = document.getElementById(`${sectionId}-cards`);
  container.innerHTML = "";

  data.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card fade-in";
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
          <div class="card-icon">${
            item.icon ? `<i class="${item.icon}"></i>` : ""
          }</div>
          <div class="card-header">
            <h3>${item.word}</h3>
          </div>
          <div class="card-body">
            <p>${item.desc}</p>
          </div>
        `;
    container.appendChild(card);
  });
}

// Scroll to section with smooth behavior
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Search functionality
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm.length < 2) {
    // If search term is too short, show all cards
    populateSection("html", keywords.html);
    populateSection("css", keywords.css);
    populateSection("js", keywords.js);
    return;
  }

  // Filter and highlight matches
  ["html", "css", "js"].forEach((section) => {
    const filteredData = keywords[section]
      .map((item) => {
        const wordMatch = item.word.toLowerCase().includes(searchTerm);
        const descMatch = item.desc.toLowerCase().includes(searchTerm);

        if (wordMatch || descMatch) {
          // Create highlighted version
          const regex = new RegExp(`(${searchTerm})`, "gi");
          return {
            ...item,
            word: item.word.replace(regex, '<span class="highlight">$1</span>'),
            desc: item.desc.replace(regex, '<span class="highlight">$1</span>'),
          };
        }
        return null;
      })
      .filter((item) => item !== null);

    populateSection(section, filteredData);
  });
});

// Show random concept
function showRandomConcept() {
  const sections = ["html", "css", "js"];
  const randomSection = sections[Math.floor(Math.random() * sections.length)];
  const randomConcept =
    keywords[randomSection][
      Math.floor(Math.random() * keywords[randomSection].length)
    ];

  alert(
    `Random Concept:\n\n${randomSection.toUpperCase()}: ${
      randomConcept.word
    }\n\n${randomConcept.desc}`
  );

  // Scroll to the section
  scrollToSection(randomSection);
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
  populateSection("html", keywords.html);
  populateSection("css", keywords.css);
  populateSection("js", keywords.js);

  // Add animation to section headers
  const sectionHeaders = document.querySelectorAll(".section-header");
  sectionHeaders.forEach((header) => {
    header.classList.add("fade-in");
  });
};
