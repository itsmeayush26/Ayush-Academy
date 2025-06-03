📚 Ayush Academy – LMS Platform
A full-featured Learning Management System (LMS) built with the MERN Stack, offering powerful course management, user enrollment, rich content editing, and real-time interactivity.


🚀 Live Demo


🛠️ Tech Stack
⚙️ Frontend
React.js

Redux Toolkit + RTK Query – for state management and data fetching

React Router DOM – routing

Tailwind CSS – utility-first styling

shadcn/ui – beautifully styled UI components

Slate.js – Rich Text Editor for course content

React Hook Form + Zod – form handling and validation

Heroicons / Lucide-react – icons

Axios – API requests (if not using RTK Query for everything)

🔧 Backend
Node.js + Express.js

MongoDB + Mongoose – database

JWT Auth – authentication

Bcrypt – password hashing

Multer – file upload (for course thumbnails or videos)

✨ Features
🔐 Authentication

JWT-based signup/login

Role-based access (admin, instructor, student)

🎓 Course Management

Add/update/delete courses

Categories, pricing, and visibility settings

🧠 Rich Content Editor

Create lessons using a modern Slate.js editor

👤 User Dashboard

Personalized dashboard for instructors & students

📦 Redux Toolkit Query Integration

Efficient, cache-aware data fetching for backend APIs

🎨 UI/UX

Fully responsive with Tailwind CSS

Accessible, styled components from shadcn/ui

📈 Progress Tracking

Students can track progress in each course (optional/extendable)

💬 Announcements/Comments (optional/extendable)

Interaction inside course modules

🧩 Folder Structure
pgsql
Copy
Edit
client/
  ├── components/
  ├── features/  ← RTK Query APIs and slices
  ├── pages/
  ├── routes/
  ├── utils/
  └── App.jsx

server/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── middleware/
  └── server.js
🧪 Installation
Clone the repo

bash
Copy
Edit
git clone https://github.com/yourusername/Learn-academy.git
cd Learn-academy
Install dependencies

bash
Copy
Edit
cd client
npm install
cd ../server
npm install
Configure .env
Create .env files in both client/ and server/ folders.

Run the app

bash
Copy
Edit
# In /server
npm run dev

# In /client
npm run dev
✅ Upcoming Features (Roadmap)
✅ Student progress tracking

✅ Video upload & streaming

⏳ Payment integration (Stripe)


⏳ Instructor analytics dashboard

🤝 Contributing
Contributions are welcome! Please open an issue first to discuss what you’d like to change.
