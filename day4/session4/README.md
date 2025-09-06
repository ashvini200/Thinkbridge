README – Session 4: Introduction to Debugging
Session 1: Introduction to Debugging
Overview

This session introduces the fundamentals of debugging and familiarizes you with essential tools and techniques. Debugging is a crucial skill for developers to identify, analyze, and fix errors in code efficiently, improving software reliability and maintainability.

By the end of this session, you should feel confident using basic debugging tools and concepts in a JavaScript environment.

Objectives

Understand what debugging is and why it is essential for development.

Get familiar with the Chrome DevTools interface.

Learn common debugging terminology and workflows.

Set up your development environment for efficient debugging.

Practice debugging real code examples.

Key Concepts

1. What is Debugging?

Debugging is the process of finding, analyzing, and removing errors (bugs) in software. It helps developers:

Improve code quality

Ensure application reliability

Save time during development

2. Chrome DevTools Basics

Access DevTools: Press F12 or right-click → Inspect

Key Panels:

Elements – Inspect and modify HTML/CSS

Console – Check JavaScript output, run code snippets, and view errors

Sources – Set breakpoints and step through code

Network – Monitor network requests

Console Tips:

Use console.log() to track variable values

View error messages and stack traces

3. Common Debugging Terminology
   Term Description
   Breakpoints Points in code where execution will pause to inspect variables and flow
   Stepping Moving through code execution (Step Over, Step Into, Step Out)
   Call Stack Sequence of function calls that led to the current execution point
   Watch Expressions Monitor specific variables or expressions in real-time
   Setup Instructions
   Required Tools

Chrome Browser (latest version)

Visual Studio Code (VS Code)

A simple HTML/JavaScript project for practice

Recommended VS Code Extensions

Debugger for Chrome – Integrates Chrome debugging directly in VS Code

Live Server – Launch a local development server (optional but helpful)

Practice Exercise

Create a simple HTML page with intentional JavaScript errors.

Open Chrome DevTools (F12).

Identify errors in the Console tab.

Set breakpoints in the Sources tab.

Step through code execution using Step Over, Step Into, and Step Out.

Use Watch Expressions to monitor variables and outputs.

Example Practice Code:

<!DOCTYPE html>
<html>
  <head>
    <title>Debugging Practice</title>
  </head>
  <body>
    <h1>Debugging Example</h1>
    <script>
      let num1 = 10;
      let num2 = "5"; // Intentional bug: string instead of number
      let sum = num1 + num2; 
      console.log("Sum:", sum);
      function multiply(a, b) {
        return a * b;
      }
      console.log("Multiply:", multiply(num1, num2));
    </script>
  </body>
</html>

Tips for Effective Debugging

Always read error messages carefully; they often give precise hints.

Use console.log() strategically to inspect values.

Start with small code snippets when testing functionality.

Step through code line by line to understand execution flow.

Regularly commit working code to avoid losing progress during debugging.

Next Steps

After completing this session, proceed to Session 2, where you will explore:

Advanced breakpoint techniques

Conditional breakpoints

Call stack analysis

Efficient debugging workflow

Resources

Chrome DevTools Documentation

VS Code Debugging Guide

MDN JavaScript Debugging Tips

This material is intended for educational purposes as part of a debugging workshop series. It provides hands-on guidance to improve debugging skills and productivity in JavaScript projects.
