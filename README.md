# 🛒 ProductCart

> A modern, lightweight shopping cart application built with **React**, **TypeScript**, and **Vite**.

![React](https://img.shields.io/badge/React-18-blue?logo=react)  
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)  
![Vite](https://img.shields.io/badge/Vite-4-646CFF?logo=vite)  
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📑 Table of Contents

- [✨ Overview](#-overview)
- [🎯 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
  - [📋 Prerequisites](#-prerequisites)
  - [⚡ Installation](#-installation)
  - [▶ Running Locally](#-running-locally)
- [📂 Project Structure](#-project-structure)
- [🔎 How It Works](#-how-it-works)
- [📜 Scripts](#-scripts)
- [💡 Potential Improvements](#-potential-improvements)
- [📄 License](#-license)

---

## ✨ Overview

**ProductCart** is a simple and efficient cart system that demonstrates how to:

- Display products
- Add/remove items to/from a cart
- Update quantities
- Automatically remove items when their quantity reaches zero

The project leverages **React Hooks** for state management, **TypeScript** for type safety, and **Vite** for blazing-fast development.

---

## 🎯 Features

✅ Display a catalog of products  
✅ Add/remove products from the cart  
✅ Increase/decrease product quantity  
✅ Auto-remove item if quantity drops to zero  
✅ State management with `useState` / `useReducer`  
✅ Type-safe using TypeScript interfaces  
✅ Built with clean, reusable components  

---

## 🛠️ Tech Stack

| Layer           | Technology  |
|-----------------|-------------|
| **Frontend**    | React + TypeScript |
| **Build Tool**  | Vite |
| **Linting**     | ESLint |
| **Styling**     | CSS / Custom styling |
| **Others**      | HTML, JS |

---

🔎 How It Works

Add to Cart: Clicking "Add to Cart" updates the cart state.

Update Quantity: Increment/decrement buttons adjust the item count (never below 1).

Remove Item: If quantity reaches zero, the item is automatically removed.

State Management: Uses React hooks with immutable state updates (map, filter).


------
### ⚡ Installation

Clone the repository:

```bash
git clone https://github.com/Ankushkumardas/ProductCart.git
cd ProductCart
git clone https://github.com/Ankushkumardas/ProductCart.git
cd ProductCart
