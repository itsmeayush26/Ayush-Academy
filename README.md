📚 Learn Academy – Advanced Learning Management System 🚀


🔗 Live Demo
https://learn-academy-frontend.onrender.com


🚀 Tech Stack
MongoDB + Mongoose

NoSQL database optimized for flexibility & scalability

Mongoose ORM helps with schema definition & validation

Express.js + Node.js

Lightweight, fast backend for handling API requests

Implements middleware for authentication & error handling

React.js + Redux Toolkit + RTK Query

Component-driven UI for seamless user experience

Centralized state management with efficient API caching

Stripe API

Secure online payment system with real-time transaction monitoring

Supports one-time purchases & subscription models

Tailwind CSS + shadcn/ui

Utility-first CSS framework for rapid styling

Pre-built UI components for accessibility & consistency

Multer

Middleware for handling image & video uploads efficiently

Supports cloud storage integration for scalability

react-quill

Powerful rich-text editor designed for interactive lessons

Custom formatting with drag-and-drop capabilities


✨ Features
🔑 Authentication & User Management
JWT-based authentication → Ensures secure login & session management

Role-based access → Different dashboards for Admin, Instructor & Student

🎓 Course Management
Course creation & editing → Instructors can add, update, and delete courses

Categorization & pricing → Assign visibility settings & set course fees

🏆 Progress Tracking
Personalized dashboards → Students track progress through enrolled courses

Completion tracking → Generate certificates upon course completion

💬 Engagement Tools
Announcements & discussions → Instructors post updates & students interact

Instructor Q&A sessions → Real-time messaging system for queries


💰 Payment Integration
Stripe API integration → Secure payments with multiple gateway options

Admin transaction tracking → Dashboard for monitoring sales & refunds


📂 Folder Structure
Client (Frontend) → UI components, pages, Redux slices, RTK Query APIs

Server (Backend) → Controllers, models, routes, authentication middleware

📂 Folder Structure
Learn-Academy/
│── client/ (React App)
│   ├── components/ (Reusables)
│   ├── features/ (Redux slices & RTK Query APIs)
│   ├── pages/ (Main views)
│   ├── routes/ (Navigation setup)
│   ├── utils/ (Helpers & constants)
│   └── App.jsx
│── server/ (Backend API)
│   ├── controllers/ (Logic for requests)
│   ├── models/ (MongoDB schemas)
│   ├── routes/ (API endpoints)
│   ├── middleware/ (Auth, logging, error handling)
│   └── server.js
