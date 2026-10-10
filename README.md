# 🍕 Fast Pizza Co.

**Fast Pizza Co.** is a pizza ordering web app built with React, Redux Toolkit and React Router. Browse the menu, build your cart, check out with your location, and follow your order with a live countdown — then pay on delivery.

<!-- Live demo: add your deployed URL here, e.g. https://fast-pizza-co.vercel.app -->

<!--
## 📸 Screenshots

Add screenshots to `docs/screenshots/` and uncomment:

| Home | Menu |
| --- | --- |
| ![Home](docs/screenshots/home.png) | ![Menu](docs/screenshots/menu.png) |

| Cart | Checkout | Order tracking |
| --- | --- | --- |
| ![Cart](docs/screenshots/cart.png) | ![Checkout](docs/screenshots/checkout.png) | ![Order tracking](docs/screenshots/order.png) |
-->

## ✨ Features

*   **Menu Browsing:** A photo-led menu grid showing each pizza's name, ingredients and price. Sold-out pizzas are clearly marked, and pizzas already in the cart show their quantity.
*   **Cart Management:** Add pizzas, change quantities or remove items straight from the menu or the cart. Totals update instantly, and a cart bar keeps the running total in view while you browse.
*   **Checkout:**
    *   Form validation with clear inline errors (e.g. invalid phone number).
    *   **Use my location** — fills in the delivery address automatically via the browser's geolocation and a reverse-geocoding API.
    *   **Priority order** — adds a 20% surcharge to move the order to the front of the queue; the price updates live.
*   **Order Tracking:**
    *   Search any order by its ID from the header.
    *   A live countdown to the estimated delivery time and a 4-step progress line (placed → in the oven → on its way → delivered).
    *   Upgrade an existing order to priority, and copy the order ID with one click.
*   **User Personalization:** The user's name is stored in global state and used across the app.
*   **Friendly empty & error states:** A dedicated empty-cart screen and a styled error page for failed requests or unknown orders.
*   **Responsive Design:** Layouts designed separately for mobile and desktop, built entirely with Tailwind CSS.
*   **Advanced Routing & Data Fetching:** React Router v6 `loaders` and `actions` fetch and mutate data before a page renders, and `useFetcher` loads data without navigation.

## 🎨 Design

A warm, editorial look built as a small design system in `tailwind.config.js`:

| Token | Color | Use |
| --- | --- | --- |
| `cream` | `#F5EEE2` | Page background |
| `paper` | `#FBF8F2` | Surfaces & panels |
| `ink` | `#1F1A17` | Text |
| `ash` | `#6E6157` | Secondary text |
| `tomato` | `#C23A1E` | Accent & primary actions |

*   **Fraunces** for headings, **Instrument Sans** for body text, and **JetBrains Mono** for prices and order IDs.
*   Thin dividing lines instead of heavy cards, 4–6 px corners, and touch targets of at least 44 px.

## 🛠️ Technologies Used

*   **[React 18](https://react.dev/):** The core library for building the user interface.
*   **[React Router v6](https://reactrouter.com/):** Routing plus data loaders, form actions and fetchers.
*   **[Redux Toolkit](https://redux-toolkit.js.org/):** Global state for the user and the shopping cart, including an async thunk for geolocation.
*   **[Tailwind CSS](https://tailwindcss.com/):** Utility-first styling with a custom theme.
*   **[Vite](https://vitejs.dev/):** Fast development server and bundler.
*   **[ESLint](https://eslint.org/) & [Prettier](https://prettier.io/):** Code quality and consistent formatting.

## 🚀 How to Run Locally

You will need [Node.js](https://nodejs.org/) installed.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Then open the link shown in your terminal (usually `http://localhost:5173`).

3. **Build for production:**
   ```bash
   npm run build
   npm run preview
   ```

> 💡 **Try order tracking:** search for the sample order ID **`IIDSAT`** in the header.

## 📁 Project Structure

The code is organized by feature:

*   `src/features/cart/`: Cart components and the cart Redux slice.
*   `src/features/menu/`: Fetching and rendering the pizza menu.
*   `src/features/order/`: Components, loaders and actions for creating, searching and tracking orders.
*   `src/features/user/`: The user Redux slice (name & geolocation) and related components.
*   `src/ui/`: Shared UI — layout, header, footer, logo, buttons, icons, loader and error page.
*   `src/services/`: API calls to the restaurant and geocoding services.
*   `src/utils/`: Helpers for currency, dates and time calculations.

## 🙏 Credits

*   This project is based on the *Fast React Pizza* project from [Jonas Schmedtmann's](https://github.com/jonasschmedtmann) React course, and uses its restaurant API. The interface was fully redesigned.
*   Menu photos come from the course API; hero photos are from [Unsplash](https://unsplash.com/).
*   Address lookup by [BigDataCloud](https://www.bigdatacloud.com/) reverse geocoding.
