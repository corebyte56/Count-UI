# Counter App

A modern and interactive **React Counter Application** built with **React, Vite, and Tailwind CSS**.

This project demonstrates **React state management, local storage persistence, and responsive UI design**.
The counter value is automatically saved in the browser using **Local Storage**, so the value remains even after refreshing the page.

---

## 🚀 Live Demo

```
https://corebyte56.github.io/Count-UI/
```

---

## 📌 Features

* ➕ Increase counter value
* ➖ Decrease counter value
* 🔄 Reset counter to zero
* 💾 Counter value saved using **Local Storage**
* 🎨 Modern glassmorphism UI design
* ⚡ Smooth animations and transitions
* 📱 Responsive layout

---

## 🛠️ Technologies Used

```
React
Vite
Tailwind CSS
JavaScript (ES6+)
Local Storage API
```

---

## 📂 Project Structure

```
counter-app
│
├── public
│
├── src
│   ├── assets
│   │   └── bg.png
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```
git clone https://github.com/your-username/counter-app.git
```

Go to the project directory

```
cd counter-app
```

Install dependencies

```
npm install
```

Run the development server

```
npm run dev
```

---

## 🧠 How It Works

The counter state is managed using **React useState**

```
const [count, setCount] = useState(0);
```

To persist the counter value after refreshing the page, **Local Storage** is used.

```
localStorage.setItem("counter", JSON.stringify(count));
```

When the app loads, it retrieves the saved value from Local Storage.

```
const saved = localStorage.getItem("counter");
```

---

## 🎨 UI Design

The interface uses **Tailwind CSS** with:

* Glassmorphism effect
* Gradient text
* Hover animations
* Smooth transitions

This creates a modern and visually appealing user experience.

---

## 📈 Future Improvements

* Add dark/light mode
* Add keyboard support
* Add custom step increment
* Convert to reusable component

---

## 👨‍💻 Author

**Sahariar Ahmed Fahim**

CSE Student | Frontend Developer | React Learner

---

## ⭐ Support

If you like this project, consider giving it a **star ⭐ on GitHub**.
