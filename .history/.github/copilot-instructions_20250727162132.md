# Copilot Instructions for Javascript-Course

## Project Overview

This repository is a collection of JavaScript exercises and demos focused on DOM manipulation, events, and basic web interactivity. The project is organized by topic and exercise, with each HTML file typically paired with a corresponding JS and CSS file. There is no build system or framework; all code runs directly in the browser.

## Directory Structure

-   `index*.html`: Individual exercises and demos, each self-contained.
-   `CSS/`: Stylesheets for specific exercises, named to match their HTML/JS counterparts.
-   `JS/`: JavaScript files for each exercise, named to match their HTML files. Each file is standalone and not imported elsewhere.
-   `IMG/`: Images used in exercises.

## Key Patterns

-   **Direct DOM Manipulation:** Most JS files use `document.querySelector` and event listeners to interact with the DOM. Example: `09.7 Bài tập Lightbox.js` creates a modal lightbox by injecting HTML and handling click events for closing.
-   **No Module System:** All scripts are plain JS, not ES modules. Avoid `import`/`export`.
-   **Exercise Naming:** File names use Vietnamese and English, often with numbers to indicate order or topic. Match JS/CSS/HTML by number and topic.
-   **Minimal External Dependencies:** No package.json or external libraries. All code is vanilla JS and CSS.

## Developer Workflow

-   **Edit and Reload:** Make changes to JS/CSS/HTML, then reload the corresponding HTML file in the browser to test.
-   **Debugging:** Use browser DevTools for console logs and DOM inspection. No automated tests or build steps.

## Example: Lightbox Pattern

-   See `JS/09.7 Bài tập Lightbox.js` and related HTML/CSS for a pattern of creating overlays and handling close events via event delegation.
-   Use `insertAdjacentHTML` for dynamic DOM creation, and `removeChild` or `remove()` for cleanup.

## Conventions

-   Keep code simple and readable for learners.
-   Use descriptive variable names, often in Vietnamese for exercises.
-   Each exercise is independent; avoid cross-file dependencies.

## How to Add New Exercises

1. Create a new HTML file, JS file, and CSS file with matching names and numbers.
2. Link JS and CSS in the HTML file.
3. Follow the pattern of direct DOM manipulation and event handling.

## Key Files

-   `JS/08 DOM toàn tập.js`, `JS/09 EVENTS trong Javacript.js`, `JS/09.7 Bài tập Lightbox.js`: Good examples of DOM/event patterns.
-   `CSS/09.7 Bài tập Lightbox.css`: Example of exercise-specific styling.

---

For questions or unclear patterns, review similar numbered files for examples. Each exercise is meant to be self-contained and easy to understand for JavaScript learners.
