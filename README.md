# ProfitRecovery - Financial Services Platform

ProfitRecovery is a full-stack platform I built for a financial services client to provide a **secure, interactive, and user-friendly experience**.  
The project includes a flexible admin panel for content management, which was implemented for future use even though the client is not actively using it.  
It also provides role-based access, secure authentication, and basic SEO optimization to improve visibility as requested by the client.

---

## Overview

This project was developed as a full-stack web solution from scratch.  
It focuses on delivering a dynamic, responsive interface for users to interact with financial content.  
The backend handles authentication, role-based access, and content delivery via RESTful APIs, while the frontend ensures a seamless, modern user experience across devices.

---

### What I Learned

This project was an incredible learning experience.  
I gained exposure to **a wide range of technologies**, including React, TailwindCSS, Node.js, Express, MongoDB, and Cloudinary, and strengthened my full-stack development skills.  
Working directly with a client for the first time taught me how to translate ideas into a functional product, plan features effectively, and deliver a polished solution.  
It also gave me hands-on experience with secure authentication, role-based access, and API integration, and **basic SEO optimization**.


---

### Features

- Secure authentication and role-based access using bcrypt  
- Dynamic content delivery via RESTful APIs  
- Responsive frontend built with React.js, TailwindCSS, and DaisyUI  
- Flexible admin panel for content management (not currently used by the client)  
- Cloud-based image storage and optimization using Cloudinary
- Basic SEO optimization implemented per client request  

---

### Future Improvements

- Expand the admin panel to manage content more extensively  
- Add analytics and reporting dashboards  
- Improve UI accessibility and performance  

---

## Tech Stack

**Frontend:** React.js, HTML5, TailwindCSS, DaisyUI, Axios  
**Backend:** Node.js, Express.js, RESTful API, bcrypt  
**Database & Storage:** MongoDB, Upstash, Cloudinary  

---


## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/TrayanStefanov/Freelance-ProfitRecovery.git
cd Freelance-ProfitRecovery
```
### 2. Install backend dependancies
```bash
cd backend
npm install
```
### 2. Install frontend dependancies
```bash
cd ../frontend
npm install
```

### 4. Configure environment variables

Create a .env file in the backend folder:

```ini
PORT=5000
MONGO_URL=your_mongodb_connection_string
UPSTASH_REDIS_URL=your_upstash_redis_url
ACCESS_TOKEN_SECRET=your_jwt_access_secret
REFRESH_TOKEN_SECRET=your_jwt_refresh_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_CLOUD_KEY=your_cloudinary_key
CLOUDINARY_CLOUD_SECRET=your_cloudinary_secret
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```
### 5. Run the application
```bash
cd backend
npm run dev
```
```bash
cd ../frontend
npm run dev
```
The frontend should now be running at http://localhost:5173
 and communicating with the backend API at http://localhost:5000.
---

## Live Website

**Website:** [https://profitrecoverybg.eu/](https://profitrecoverybg.eu/)

