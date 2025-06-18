# 📝 Job Application Tracker - Project Documentation

---

## 📌 1. Problem Understanding

Searching for jobs is stressful and chaotic without a proper tracking system. Job seekers often lose track of which companies they've applied to, the current status, and follow-up deadlines. The goal of this project is to build a **mini CRM** for job applications, enabling users to log and manage each job opportunity with ease.

---

## 🧱 2. Architecture + Tech Stack

### 🏗️ Architecture Overview




### ⚙️ Tech Stack

| Layer       | Technology         | Purpose                                      |
|-------------|--------------------|----------------------------------------------|
| Frontend    | React (Vite)       | Build fast, responsive UI                    |
| Styling     | Tailwind CSS       | Utility-first styling                        |
| API Client  | Axios              | API request handling                         |
| Backend     | Node.js + Express  | RESTful API and server logic                 |
| Auth        | JWT                | Secure login/logout                          |
| Database    | MongoDB + Mongoose | Store and manage job application records     |
| Mail        | Nodemailer         | Email notifications (optional)              |

---

## 🚀 3. Development Approach

1. **Setup**
   - Initialized backend and frontend with separate folders.
   - Created MongoDB collections and schema with Mongoose.

2. **Authentication**
   - Built secure login/signup routes with password hashing (bcrypt) and JWT.

3. **CRUD Operations**
   - Created RESTful endpoints for adding, updating, deleting, and listing job applications.
   - Linked these to the frontend using Axios.

4. **Frontend Development**
   - Used React with Tailwind CSS for a responsive and clean UI.
   - Implemented forms with validation and reusable components.

5. **Real-time Notifications**
   - Displayed on-panel alerts using state
   - Optional: Sent emails using Nodemailer when new jobs are added.

6. **Filtering + Sorting**
   - Added client-side filters for job status
   - Implemented sorting by applied date

---

## 🧩 4. Challenges Faced & Solutions

| Challenge | Solution |
|----------|----------|
| **State management across pages** | Used React context and local storage to persist auth state |
| **Form validation errors** | Implemented custom error messages and required field checks |
| **Protecting routes** | Created middleware for JWT-based route protection |
| **Deployment configuration** | Used Vercel for frontend and Render for backend API |
| **CORS issues during development** | Set up proper headers using Express CORS middleware |

---

## 🎓 5. Learnings

- Understood the full development life cycle of a MERN stack project
- Implemented secure login with JWT for the first time
- Gained practical experience with REST APIs, routing, and state management
- Improved frontend skills with Tailwind CSS and responsive design
- Learned how to structure a scalable project with clean folder architecture

---

## 📷 Screenshots (Add if converting to PDF)

*(Include UI screenshots of login, dashboard, add job form, filter, etc.)*

---

## 📁 Appendices (optional)

- API Route Reference
- Environment Variable Configurations
- Deployment Links (Frontend, Backend)

---

