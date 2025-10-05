# MERN Stack Restaurant Reservation

## Project Overview

This is a MERN stack application for restaurant reservations. It includes a React frontend and an Express/MongoDB backend.

## Setup Instructions

1. Clone the repository.
2. Install dependencies:
   ```
   npm run install-all
   ```
3. Create a `.env` file in `backend/config` with the required environment variables (see `.env.example`).
4. Start the development servers:
   ```
   npm start
   ```

## Deployment

- Frontend is configured for deployment on Netlify.
- Backend can be deployed on Vercel or any Node.js hosting platform.
- Ensure environment variables are set in the deployment environment.

## Testing

- Frontend UI and routing tested.
- Backend API endpoints tested with curl.
- Integration between frontend and backend verified.

## Project Structure

- `backend/` - Express server, routes, models, and config.
- `frontend/` - React app with Vite build system.

## Additional Notes

- Sensitive files like `.env` are excluded via `.gitignore`.
- Use the provided scripts in `package.json` for ease of development.
