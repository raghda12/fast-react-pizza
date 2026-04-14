# 🍕 Fast React Pizza Co.

**Fast React Pizza Co.** is a web-based pizza ordering application built with modern frontend technologies. It provides a seamless and fast user experience for browsing the pizza menu, adding items to the cart, and placing orders.

## ✨ Features

*   **Menu Browsing:** Users can view the available pizza menu with full details (name, ingredients, price, and image).
*   **Cart Management:** Users can add pizzas to their cart, increase or decrease quantities, or remove specific items. The total price is updated dynamically in real-time.
*   **Order Creation & Tracking:**
    *   Enter user details to create a new pizza order.
    *   Search for previous orders using a unique Order ID and track their progress/status.
    *   "Priority Order" feature built-in, which dynamically updates the total price based on urgency.
*   **User Management:** Global state management to store and utilize the user's name throughout the application for a personalized experience.
*   **Responsive & Modern UI:** A clean, attractive, and highly responsive design that works perfectly across all devices (mobiles, tablets, and desktops), built entirely with Tailwind CSS.
*   **Advanced Routing & Data Fetching:** Fast, single-page application (SPA) transitions without page reloads. It utilizes advanced React Router (v6) features like `Loaders` and `Actions` to fetch or mutate data seamlessly before the page renders.

## 🛠️ Technologies Used

This project leverages a modern, high-performance tech stack:

*   **[React 18](https://react.dev/):** The core JavaScript library for building the user interface.
*   **[React Router v6](https://reactrouter.com/):** For standard application routing alongside advanced data loading and form actions.
*   **[Redux Toolkit](https://redux-toolkit.js.org/):** For centralized global state management (specifically handling user data and shopping cart logic).
*   **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid and maintainable UI styling.
*   **[Vite](https://vitejs.dev/):** A next-generation frontend tooling and bundler that provides a lightning-fast development environment.
*   **[ESLint] & [Prettier]:** Configured to ensure high code quality, consistency, and standard formatting across the codebase.

## 🚀 How to Run Locally

To get this project up and running on your local machine, you will need to have [Node.js](https://nodejs.org/) installed.

1. **Install Dependencies:**
   Open your terminal in the project's root directory and run:
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```

3. **Open the Application:**
   Click the link generated in your terminal (usually `http://localhost:5173`) to view and interact with the application in your browser.

## 📁 Project Structure

The project directory is structured by "features" to keep the code organized, maintainable, and highly readable:
*   `src/features/cart/`: Components and Redux slices managing cart operations.
*   `src/features/menu/`: Components related to fetching and rendering the pizza menu.
*   `src/features/order/`: Components, loaders, and actions for creating and viewing order details.
*   `src/features/user/`: Components and Redux structure for global user state management.

---

> This project was developed using modern React best practices with a strong focus on high performance and an excellent user experience!
