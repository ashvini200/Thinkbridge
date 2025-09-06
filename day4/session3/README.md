README – Session 3: DOM and Events Overview
Overview

In this session, we explore the Document Object Model (DOM) and JavaScript events, which allow web pages to be dynamic and interactive. You will learn how to select elements, respond to user actions, and update the page content or styles in real-time.

By the end of this session, you should be able to manipulate DOM elements and handle events effectively to enhance user experience.

Objectives

Understand the structure of the DOM.

Learn how to select elements using JavaScript.

Respond to user actions through event listeners.

Modify content, styles, and classes dynamically.

Practice creating interactive web pages using DOM manipulation.

Key Concepts

1. DOM (Document Object Model)

The DOM is a tree-like representation of the HTML document.

Each HTML element is represented as a node, which can be accessed and modified with JavaScript.

Example of accessing an element:

const heading = document.getElementById("myHeading");
heading.textContent = "Hello, DOM!";

2. Selecting DOM Elements

Common methods to select elements:

getElementById() – Selects an element by its ID.

getElementsByClassName() – Selects elements by class name (returns HTMLCollection).

getElementsByTagName() – Selects elements by tag name.

querySelector() – Selects the first element matching a CSS selector.

querySelectorAll() – Selects all elements matching a CSS selector.

3. Events and Event Listeners

Events are actions performed by the user or browser (e.g., click, mouseover, input, keypress).

Event listeners allow us to run code in response to these actions.

Adding an event listener:

const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
alert("Button clicked!");
});

4. Modifying DOM Elements

Text content: element.textContent = "New text";

HTML content: element.innerHTML = "<strong>Bold text</strong>";

Classes:

element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("highlight");

Tasks

Select elements using different DOM selection methods.

Listen to events like click, mouseover, input, etc.

Update text and classes dynamically based on events.

Create a small interactive page demonstrating DOM manipulation.

Deliverables

dom-notes.md – Notes summarizing DOM and events concepts.

dom.js – Sample script demonstrating DOM manipulation, event handling, and updating elements.

Sample dom.js snippet:

const heading = document.querySelector("h1");
const button = document.querySelector("#changeText");

button.addEventListener("click", () => {
heading.textContent = "DOM Updated Successfully!";
heading.classList.toggle("highlight");
});

Resources

MDN DOM Introduction

MDN Event Reference

This session is designed to strengthen your understanding of DOM manipulation and event handling, which are fundamental for building interactive and dynamic web pages.
