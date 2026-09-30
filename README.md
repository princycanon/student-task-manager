# Student Task Manager

A modern student productivity frontend for managing assignments, tasks, projects, deadlines, and academic workflow.

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Lucide React

## Phase 1 Scope

This project covers the frontend UI for the Student Task Manager application, with mock/static data and mock authentication only. Backend, database, and deployment are intentionally not implemented in this phase.

## Project Structure

```bash
student-task-manager/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── ...
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── .gitignore
├── README.md
└── .git
```

## Local Development

```bash
cd frontend
npm install
npm run dev
```

## Routes

- `/`
- `/login`
- `/register`
- `/dashboard`
- `/tasks`
- `/add-task`
- `/tasks/edit/:id`
- `/profile`

## Features Completed

- Home page with hero, feature cards, dashboard preview, CTA, and footer
- Login and registration with validation and mock auth behavior
- Dashboard with summary statistics and task overview
- Task list with search, filter, sorting, add, edit, delete, and empty states
- Add task form and edit task form
- Profile editing with local mock state
- Responsive mobile navigation and layout
- Modern SaaS-style design with Tailwind and Lucide icons

## Known Limitations

- Frontend only; no real backend or database
- Mock authentication only
- No persistent server or deployment config
- LocalStorage used for UI state simulation

## Suggested Next Phase

Build the backend API, connect the frontend to real authentication and task persistence, and then add CI/CD and deployment.
