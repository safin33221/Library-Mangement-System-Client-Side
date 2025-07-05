# 📚 Minimal Library Management System

A minimalist, responsive, client-side **Library Management System** built with **React**, **TypeScript**, **Redux Toolkit Query (RTK Query)**, and **Tailwind CSS**. This application allows users to manage books and borrowing operations without requiring authentication or category/payment features. It is ideal for demonstrating clean UI design, efficient state management, and interaction with a RESTful API.

---
## [Library Manager](https://library-mangement-client-side.vercel.app/)


## 📖 Project Overview

This is a **client-only** application focused on showcasing:

- Core **book management** (CRUD) and **borrowing flow**
- **No authentication**, no payment, no category filters
- Built entirely using **TypeScript**, **RTK Query**, and **React**

> This is a lightweight alternative to full-fledged library systems, intended for rapid deployment and easy understanding.

---

## ✨ Features

### 1. 🔓 Public Routes
- All pages are accessible without authentication.
- No user login or permissions needed.

### 2. 📚 Book Management
- View all books in a table with the following columns:
  - `Title`, `Author`, `Genre`, `ISBN`, `Copies`, `Availability`, `Actions`
- **Actions**:
  - **Edit** a book: Opens pre-filled form, updates via API.
  - **Delete** a book: Confirmation before API delete.
  - **Borrow** a book: Opens a borrow form.
  - **Add New Book** via a simple form (fields: title, author, genre, ISBN, description, copies).
- Business logic:
  - Books with `copies = 0` are marked as **Unavailable**.

### 3. 📖 Borrow Book
- Accessible via **Borrow** button on book list.
- Form fields:
  - Quantity (must be ≤ available copies)
  - Due Date
- Successful submission updates book availability and redirects to **borrow summary**.

### 4. 📊 Borrow Summary
- Shows an aggregated list of borrowed books.
- Table includes:
  - `Title`, `ISBN`, `Total Quantity Borrowed`
- Data is retrieved via an aggregation API call.

---

## 🧪 Tech Stack

| Category       | Technology                |
| -------------- | ------------------------- |
| Framework      | React 19                  |
| State Mgmt     | Redux Toolkit + RTK Query |
| Language       | TypeScript                |
| Styling        | Tailwind CSS, DaisyUI     |
| Routing        | React Router              |
| Forms & Schema | React Hook Form, Zod      |
| UI Components  | Radix UI, Lucide Icons    |
| Tooling        | Vite, ESLint, TypeScript  |

---

## 🛠️ Installation

```bash
git clone https://github.com/your-username/library-management-system.git
cd library-management-system
npm install
