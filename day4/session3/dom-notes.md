# DOM Exercises - Session 3

## 1. Introduction

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page as a **tree of nodes**, allowing JavaScript to access and manipulate the content, structure, and style dynamically.

In this session, we practiced:

- Selecting elements from the DOM.
- Manipulating HTML content and attributes.
- Handling events.
- Creating, appending, and removing elements.

---

## 2. Files in this session

- `index.html` – HTML structure of the exercises.
- `style.css` – Styling for DOM elements.
- `dom.js` – JavaScript code interacting with the DOM.

---

## 3. DOM Element Selection

### 3.1 Selecting by ID

```javascript
const heading = document.getElementById("mainHeading");
heading.style.color = "blue";
getElementById() selects a single element with the given ID.

Directly returns the element object.

3.2 Selecting by Class Name
javascript
Copy code
const items = document.getElementsByClassName("list-item");
console.log(items);
getElementsByClassName() returns a live HTMLCollection of elements with the class.

Use a loop to iterate:

javascript
Copy code
for(let item of items){
    item.style.fontWeight = "bold";
}
3.3 Selecting by Tag Name
javascript
Copy code
const paragraphs = document.getElementsByTagName("p");
Returns all <p> elements as an HTMLCollection.

Useful for applying changes to all similar elements.

3.4 Query Selector
javascript
Copy code
const firstItem = document.querySelector(".list-item");
const allItems = document.querySelectorAll(".list-item");
querySelector() returns the first matching element.

querySelectorAll() returns a static NodeList of all matching elements.

4. Manipulating Content
4.1 Changing Text
javascript
Copy code
heading.textContent = "DOM Manipulation Example";
textContent changes only the text inside an element.

innerHTML can include HTML tags:

javascript
Copy code
heading.innerHTML = "<span>DOM Example</span>";
4.2 Changing Attributes
javascript
Copy code
const link = document.getElementById("myLink");
link.setAttribute("href", "https://www.example.com");
link.setAttribute("target", "_blank");
getAttribute() retrieves an attribute.

setAttribute() sets or updates an attribute.

4.3 Changing Styles
javascript
Copy code
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "24px";
Directly modifies inline styles via JavaScript.

5. Creating and Appending Elements
javascript
Copy code
const newItem = document.createElement("li");
newItem.textContent = "New Task";
document.getElementById("taskList").appendChild(newItem);
createElement() creates a new HTML element.

appendChild() adds it to the DOM tree.

5.1 Removing Elements
javascript
Copy code
const itemToRemove = document.getElementById("removeItem");
itemToRemove.remove();
remove() deletes an element from the DOM.

6. Event Handling
6.1 Using onclick
javascript
Copy code
const btn = document.getElementById("addBtn");
btn.onclick = function() {
    alert("Button clicked!");
};
6.2 Using addEventListener
javascript
Copy code
btn.addEventListener("click", () => {
    console.log("Button was clicked");
});
Recommended because it allows multiple event listeners on the same element.

7. Example: Simple Task Adder
HTML (index.html):

html
Copy code
<input type="text" id="taskInput" placeholder="Enter task">
<button id="addBtn">Add Task</button>
<ul id="taskList"></ul>
JS (dom.js):

javascript
Copy code
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const task = taskInput.value;
    if(task){
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
});
CSS (style.css):

css
Copy code
ul {
    list-style-type: disc;
    padding-left: 20px;
}

li {
    margin: 5px 0;
    color: #333;
}
This example shows selecting elements, creating nodes, and handling click events.

8. Notes & Tips
getElementById() is faster than querySelector() for single elements.

NodeList (from querySelectorAll) supports forEach, HTMLCollection does not.

Always check if the element exists before manipulating it to avoid errors.

javascript
Copy code
const elem = document.getElementById("myElem");
if(elem){
    elem.style.color = "red";
}
9. Summary
DOM allows dynamic interaction with HTML content.

JavaScript can select, modify, add, or remove elements.

Events make your pages interactive.

Combining DOM manipulation and CSS/HTML enables rich web applications.
this is the entire dom-notes.md
```
