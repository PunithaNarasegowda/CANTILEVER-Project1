# Cantilever-Blog Website

A full-stack Blog Website built using the MERN stack that allows users to register, log in, and perform CRUD operations on blog posts.

---

##  Features

- User Registration
- User Login & Logout
- JWT Authentication
- Create Blog Posts
- Read/View Blog Posts
- Update Existing Blogs
- Delete Blogs
- Responsive UI
- MongoDB Database Integration

---

##  Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JSON Web Token (JWT)
- bcryptjs

### Development Tools
- VS Code
- Git
- GitHub
- Postman

---

## 📂 Project Structure

```
blog-website/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env
│
└── README.md
```

---

##  Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/CANTILEVER.git
```

### Backend Setup

```bash
cd backend
npm install
```

Start backend server:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Blog Operations

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /api/blogs | Get All Blogs |
| GET | /api/blogs/:id | Get Single Blog |
| POST | /api/blogs | Create Blog |
| PUT | /api/blogs/:id | Update Blog |
| DELETE | /api/blogs/:id | Delete Blog |

---

## Screenshots

### Home Page
Displays all blog posts in a responsive grid layout.

### Create Blog
Allows authenticated users to publish blog posts.

### Update Blog
Users can edit their existing blog posts.

### Delete Blog
Users can remove their blog posts.

---

## Future Improvements

- Search Functionality
- Categories and Tags
- Comments System
- Like and Bookmark Feature
- Rich Text Editor
- Image Upload using Cloudinary
- Dark Mode

---
