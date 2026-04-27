# 🌍 Country Flags App

A simple React application that displays a grid of country flags along with their names by fetching data from an external API.

---

## 🚀 Live Demo

https://country-flags-crio-alpha.vercel.app/

---

## 📌 Features

* Fetches country data from an API
* Displays flags in a responsive grid layout
* Shows country name below each flag
* Handles API errors using `console.error`
* Uses proper `alt` attribute for accessibility

---

## 🛠️ Tech Stack

* React (Vite)
* JavaScript (ES6+)
* CSS (Grid)

---

## 📡 API Used

https://xcountries-backend.labs.crio.do/all

---

## 📂 Project Setup

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone <your-repo-link>

# Navigate to project folder
cd country-flags-app

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## ⚠️ Error Handling

If the API request fails, the error is handled using:

```js
console.error("Error fetching data: ", error);
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🙌 Acknowledgements

* Crio.Do for the project idea
* Public API for country data

---
