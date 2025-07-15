# Freelance-ProfitRecovery
This is a MERN - stack project made for a friend's side bussiness - financial audit and tax, fee and contract cashback services. Includes a minimal CMS.
Both frontend and backend are hosted on render - https://frontend-static-d3dl.onrender.com/

## Overview
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
- [Setting up env](#setting-up-env)

## Introduction
  This project includes a RESTful API built with Node.js, Express, and MongoDB, designed to manage articles and client testimonials. The API supports full CRUD operations and includes cloud image uploads and Redis caching.

On the frontend, the application is built with React 19 and Vite, offering a fast, responsive, and accessible user experience. It features a custom CMS dashboard for managing content, a multi-language interface (English and Bulgarian), and a cashback calculator tailored to the business’s financial audit and contract recovery services. All with a responsive mobile-friendly UI.

## Features
 - Backend:
   - User authentication for the project CMS dashboard.
   - RESTful API for manipulating client testimonials and articles
 - Frontend:
   - Mobile-first responsive design ensures usability across all devices
   - Multiple pages styled with TailwindCSS + DaisyUI
   - Calculator component to calculate the max amount of cashback possible depending on the industry
   - CMS dashboard for testimonials and articles control
   - Localization currently is available in English and Bulgarian.

## Technologies Used
 - Backend:
   - Node.js, Express.js
   - bcryptjs - password hashing
   - jsonwebtoken - token authentication
   - cookie-parser
   - cloudinary - panipulating cloudinary remote image storage
   - mongoose - connecting to MongoDB shard database
   - ioredis - connecting to Upstash to store session tokens
 - Frontend:
   - HTML5, React.js, Vite, Tailwind CSS + DaisyUI
   - Axios - for server API communication
   - React Router - routing and navigation
   - React helmet - SEO and dynamic <head> management (meta tags)
   - Zustand - global state management
   - Lucide React and React icons - vector icon libraries
   - React Hot Toast, Framer motion
   - i18next - Full multi-language support

## Getting Started

### Prerequisites

-   Node.js and npm (or yarn) installed.
-   MongoDB installed and running (or access to a MongoDB instance like MongoDB Atlas).

### Installation

1. Clone the repository:
    git clone [repository URL]
2. Navigate to the project directory.
3. Install server dependencies:
     - npm install
4. Install client dependencies:
     - cd .\frontend
     - npm install

### Running the Application
1. Start the server.
     - cd ..\
     - npm run dev
     - It will run on http://localhost:5050
2. Start the client.
     - cd .\frontend
     - npm run dev
     - It will run on http://localhost:5173

### Setting up Env
     - Greate MongoDB Account and Database
     - Create Upstash Account
     - Create Cloudinary Account

As of now, the development of the Profit Recovery Service has been completed. The application has been built to meet the requirements and specifications outlined by the client. The frontend and backend have been fully integrated, and the application is fully functional. Development will resume if the client wants new features or changes to existing ones. There might be bug fixes.
