# MERN Stack Restaurant Reservation App

A full-stack web application for restaurant reservations built with MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- User-friendly interface for making reservations
- Responsive design with modern UI
- Backend API for handling reservations
- Database integration with MongoDB

## Tech Stack

- **Frontend:** React, Vite, React Router, Axios
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Deployment:** Frontend on Netlify, Backend on Vercel

## Local Development

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)

### Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd MERN_STACK_RESTAURANT_RESERVATION-main
   ```

2. Install dependencies for backend:
   ```bash
   cd backend
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp config/.env.example config/config.env
   # Edit config.env with your MongoDB URI and other settings
   ```

4. Install dependencies for frontend:
   ```bash
   cd ../frontend
   npm install
   ```

5. Run the backend:
   ```bash
   cd ../backend
   npm start
   ```

6. Run the frontend (in a new terminal):
   ```bash
   cd frontend
   npm run dev
   ```

7. Open http://localhost:5173 in your browser

## Deployment

### Backend (Vercel)

1. Push your code to GitHub
2. Sign up/login to Vercel
3. Connect your GitHub repo to Vercel
4. Set the root directory to `backend`
5. Set environment variables in Vercel dashboard (PORT, FRONTEND_URL, MONGO_URI)
6. Deploy

### Frontend (Netlify)

1. Push your code to GitHub
2. Sign up/login to Netlify
3. Connect your GitHub repo to Netlify
4. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Set the root directory to `frontend` if needed
5. Set environment variable: `VITE_API_URL` to your deployed backend URL
6. Deploy

## API Endpoints

- `POST /reservation` - Create a new reservation

## Contributing

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.
