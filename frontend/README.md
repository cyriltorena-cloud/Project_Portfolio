# Personal Portfolio Website

A personal portfolio website developed to showcase my background, skills, educational journey, projects, certificates, and professional interests as a Bachelor of Science in Information Technology student.

The project uses **React.js** for the frontend and **Django** for the backend.

## About the Project

This portfolio serves as a platform to present my personal information, technical skills, academic background, projects, and achievements in the field of Information Technology.

It is designed to provide visitors with an organized and accessible way to explore my experiences and capabilities.

## Features

- **Home** – Introduction and portfolio landing page.
- **About** – Personal background and information.
- **Education** – Academic background.
- **Skills** – Technical skills and capabilities.
- **Projects** – Academic and personal projects.
- **Certificates** – Certificates and achievements.
- **Resume** – View and download resume.
- **Contact** – Contact information.

## Technologies Used

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### Backend
- Python
- Django
- SQLite

### Development Tools
- Visual Studio Code
- Git
- GitHub
- Node.js and npm

## Project Structure

```text
Project_Portfolio/
│
├── backend/
│   ├── api/
│   ├── config/
│   ├── manage.py
│   └── db.sqlite3
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   └── pages/
│   ├── package.json
│   └── package-lock.json
│
└── .gitignore
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/cyriltorena-cloud/Project_Portfolio.git
```

### 2. Navigate to the Project Folder

```bash
cd Project_Portfolio
```

### 3. Setup the Frontend

```bash
cd frontend
npm install
```

Start the frontend:

```bash
npm start
```

The React application will normally run at:

```text
http://localhost:3000
```

### 4. Setup the Backend

Open another terminal and navigate to the backend folder:

```bash
cd backend
```

Activate your Python virtual environment and install the project's required Python dependencies before running Django.

Run database migrations:

```bash
python manage.py migrate
```

Start the Django development server:

```bash
python manage.py runserver
```

The backend will normally run at:

```text
http://127.0.0.1:8000/
```

## Developer

**Cyril Toreña**

Bachelor of Science in Information Technology  
Laguna State Polytechnic University

### Areas of Interest
- Networking
- Cybersecurity
- Web Development
- Video Editing
- Creative Writing and Photography

---

*This project is developed as part of my personal learning journey and professional portfolio in Information Technology.*