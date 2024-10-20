# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Project 1 - E-commerce Listing Page
Overview
This project is a React-based UI for an E-commerce Listing Page designed to display products according to a provided Figma design. Users can view product details or add items to their cart, with modal interactions and pagination features.

Features
Header Section: Includes a search bar and icons for profile and cart.
Product List Section: Displays a grid of products with images, names, prices, and buttons for viewing or adding products to the cart.
Thank You Page: Redirects users with a simple acknowledgment after viewing a product.
Add to Cart Modal: Shows product details and confirmation options when adding to the cart.
Pagination: Navigates through multiple product listings.
Getting Started
Prerequisites
Node.js (v14 or higher)
npm or yarn
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
cd project-1
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Running the Project
To start the development server, run:

bash
Copy code
npm run dev
# or
yarn dev
Open your browser and navigate to http://localhost:3000 to view the application.

# or
yarn preview
Project Structure
src/ - Contains all source files.
components/ - Reusable components like ProductCard, Header, Pagination, and AddToCartModal.
pages/ - Contains main page components including the listing page and thank you page.
hooks/ - Custom hooks for managing state.
Technologies Used
React (v18.3.1)
Vite (v5.4.8)
Bootstrap (v5.3.3)
ESLint for code quality
Challenges
Ensuring the UI matches the Figma design closely.
Implementing state management for modals and pagination efficiently.
Handling routing between pages effectively.