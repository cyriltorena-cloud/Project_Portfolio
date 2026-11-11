# Personal Portfolio Website with Prisma ORM CRUD Integration

A personal portfolio website developed to showcase my background, skills, educational journey, projects, certificates, and professional interests as a Bachelor of Science in Information Technology student.

The application also integrates a **Project Management System** that demonstrates database connectivity and Create, Read, Update, and Delete (CRUD) operations using Prisma ORM and MySQL.

## About the Project

This portfolio serves as a platform to present my personal information, technical skills, academic background, projects, and achievements in Information Technology.

The Project Management feature allows users to add, view, edit, and delete project records directly from the portfolio webpage. The records are stored in a MySQL database and managed through Prisma ORM.

## Features

### Portfolio Features
- **Home** – Introduction and portfolio landing page.
- **About** – Personal background and information.
- **Skills** – Technical skills and capabilities.
- **Projects** – Displays academic and personal projects.
- **Education** – Academic background.
- **Certificates** – Certificates and achievements.
- **Resume** – View and download resume.
- **Contact** – Contact information.

### Project Management (CRUD)
- **Create** – Add a new project with a title and description.
- **Read** – Retrieve and display saved projects from the database.
- **Update** – Edit the details of an existing project.
- **Delete** – Remove a project from the database.

## Technologies Used

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- Prisma ORM

### Database
- MySQL
- XAMPP
- phpMyAdmin

### Development Tools
- Visual Studio Code
- Git
- GitHub
- Node.js and npm

## Project Structure

```text
Project_Portfolio/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   └── pages/
│   ├── package.json
│   └── package-lock.json
│
├── express-backend/
│   ├── generated/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   ├── server.js
│   ├── prisma.config.ts
│   ├── package.json
│   └── package-lock.json
│
├── backend/
│   └── Previous Django backend files
│
├── .gitignore
└── README.md
```

## Requirements

Before running the application, make sure you have installed:

- Node.js and npm
- MySQL through XAMPP
- Visual Studio Code or another code editor
- Git (for cloning the repository)

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/cyriltorena-cloud/Project_Portfolio.git
```

### 2. Navigate to the Project Folder

```bash
cd Project_Portfolio
```

### 3. Configure the MySQL Database

1. Open XAMPP Control Panel.
2. Start Apache and MySQL.
3. Open phpMyAdmin at `http://localhost/phpmyadmin`.
4. Create a database named `portfolio_db`.

### 4. Configure the Backend

Open another terminal and navigate to the Express backend:

```bash
cd express-backend
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file inside the `express-backend` folder and configure your database connection:

```env
DATABASE_URL="mysql://YOUR_USERNAME:YOUR_PASSWORD@localhost:3306/portfolio_db"
```

Replace the username and password with your local MySQL credentials. Do not upload your actual `.env` file to GitHub.

Generate the Prisma Client:

```bash
npx prisma generate
```

Apply the existing database migrations:

```bash
npx prisma migrate deploy
```

Start the Express server:

```bash
node server.js
```

The backend will run at:

`http://localhost:5000`

### 5. Configure the Frontend

Open another terminal and navigate to the frontend folder from the project root:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

The frontend will normally run at:

`http://localhost:3000`

Keep both the frontend and backend terminals running while using the application.

## API Endpoints

The backend provides the following API endpoints for project management:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/projects` | Retrieve all projects |
| POST | `/api/projects` | Create a new project |
| PUT | `/api/projects/:id` | Update an existing project |
| DELETE | `/api/projects/:id` | Delete a project |
| GET | `/api/portfolio` | Retrieve portfolio information |

## ORM Implementation

This application uses **Prisma ORM** to communicate with the MySQL database.

The `Project` model in `schema.prisma` represents project records stored in the database.

The application demonstrates the following Prisma ORM operations:

- `prisma.project.create()` – Creates a new project record.
- `prisma.project.findMany()` – Retrieves project records.
- `prisma.project.update()` – Updates an existing project record.
- `prisma.project.delete()` – Deletes a project record.

These operations allow the application to manage database records without manually writing SQL queries for each CRUD operation.

## Database Persistence

Project records are stored in the MySQL database named `portfolio_db`.

The data remains saved in the database even after refreshing the webpage or restarting the application, provided that the database is retained and the application reconnects successfully.

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

*This project is developed as part of my learning journey in Information Technology, particularly in web development, database integration, and ORM-based CRUD operations.*