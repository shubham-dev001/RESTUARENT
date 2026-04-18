# Restaurant App

A full-stack **Restaurant App** built with **Node.js / Express** for backend and **React / Vite** for frontend.  
Users can browse the menu, place orders, and manage restaurant operations.

---

## Features
- Browse menu items
- Admin panel to manage menu
- Responsive design


---

## Tech Stack
- **Frontend:** React.js, Vite, 
- **Backend:** Node.js, Express.js, MongoDB
- **Other:** config.env

---

## Project Structure

Restaurent Project/
│── Backend/
│ ├── config/config.env
│ ├── controllers/
│ ├── models/
│ └── server.js
│
└── Frontend/frontend
├── src/
├── public/
└── package.json


## Installation

1. Clone the repo:

```bash
git clone https://github.com/shubham-dev001/RESTUARENT.git
cd "Restaurent Project"

## Installation dependencies
# Backend
cd Backend
npm install

# Frontend
cd ../Frontend
npm install

## Environment Variables
PORT=4000
FRONTEND_URL=http://localhost:5173

MONGO_URI=your_mongodb_connection_string

🚀Usage
Start backend:
cd Backend
npm start

Start frontend:
cd Frontend
npm run dev
