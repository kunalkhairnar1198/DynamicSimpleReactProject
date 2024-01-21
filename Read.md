# Project Overview:
The project is a React application focusing on understanding components, state, props, and form handling.
Components are used to create modular and reusable UI elements.

# Component Structure:

# App Component:
Main component rendering other components.
Manages state (userList) and passes data to child components.
Utilizes AddForm component for form input and Userlist component to display a list of users.

# AddForm Component:
Handles user input for name and age.
Uses state hooks (useState) to manage form data (enterName, enterAge).
Implements form submission with error handling for negative age.
Utilizes Button and Card components for UI elements.
Userlist Component:

Receives user data (items) as props and displays a list.
Utilizes Card component for UI styling.

# ErrorModal Component:
Renders an error modal for displaying form validation errors.
Utilizes Modal and Button components for UI elements.

# CSS Modules:
CSS Modules are used for component-based styling.
Each component has its own CSS module (Card.module.css, ErrorModal.module.css).
Styles are scoped to individual components, preventing global style conflicts.

# State and Props:
State is managed using the useState hook in functional components.
Props are used to pass data between parent (App) and child components (AddForm, Userlist).
Form data is managed in AddForm component state and submitted to the parent (App) for processing.

# Form Validation:
Form validation is implemented in the AddForm component.
Checks for empty form submission and negative age.
Displays an error modal (ErrorModal) when validation fails.

# Git Repository:
The project is version-controlled using Git.
Commits are made for each significant change, providing a clear history of project development.

# This summary outlines the key aspects of your project, including component structure, state management, props usage, form handling, and form validation with error handling. It can serve as a starting point for documentation or README in your Git repository.