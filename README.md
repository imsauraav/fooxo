# 🍔 Fooxo — Online Food Ordering & Delivery Platform

Fooxo is a full-stack food ordering web application
It supports real-time ordering, restaurant management, delivery tracking, and role-based dashboards.

Built using **React + Node.js + MongoDB + Socket.IO**.

---

## 🚀 Features

### 👤 User
- Browse restaurants & food items
- Search food by city
- Add to cart & place orders
- Track order live on map
- Rate food after delivery
- View order history

---

### 🏪 Restaurant Owner
- Create & edit shop
- Add / edit / delete food items
- Receive orders
- Update order status (Preparing → Out for delivery)
- View earnings & orders

---

### 🛵 Delivery Boy
- Accept delivery assignments
- Live GPS tracking
- View today deliveries graph
- OTP based delivery confirmation
- Earnings calculation

---

## 🧠 Roles Supported

- User  
- Owner  
- Delivery Boy  

Each role has its own dashboard.

---

## 🗺️ Live Tracking

- Real-time delivery boy location using Socket.IO
- Map powered by Leaflet
- Customer can track delivery live

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Redux Toolkit
- Axios
- React Icons
- Recharts
- Leaflet

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication
- Multer (Image upload)

---

## 📦 Installation

### Clone Repository

git clone https://github.com/imsauraav/fooxo.git
cd fooxo

##  Backend Setup

cd backend
npm install
npm run dev


### Create .env inside backend:
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret

CLOUDINARY_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx

### 💻 Frontend Setup
cd frontend
npm install
npm run dev

### Environment Requirements

Node.js v18+

MongoDB Atlas / Local MongoDB

Cloudinary Account

### 🖼 Screens Included

User Dashboard

Owner Dashboard

Delivery Boy Dashboard

Cart

Live Tracking Map

OTP Delivery System

### 🔐 Authentication

JWT based login

Cookies for session

Role based routing

### 📈 Future Improvements

Razorpay / Stripe payment

Admin panel

Push notifications

Mobile app

Coupon system



### 👨‍💻 Developed By

imsauraav and kumarichhavi371

Full Stack MERN Application

Made with ❤️ in India 🇮🇳

⭐ Support

If you like this project, please give a ⭐ on GitHub.
