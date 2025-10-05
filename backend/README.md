# Backend - MERN Stack Restaurant Reservation

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the `backend/config` directory with the following variables:
   ```
   PORT=4000
   FRONTEND_URL=http://localhost:5173
   MONGO_URI=your_mongodb_connection_string
   ```

3. Start the backend server:
   ```
   node app.js
   ```

## API Endpoints

- `POST /reservation` - Create a new reservation
- `GET /reservation` - Get all reservations

## Deployment

- Ensure environment variables are set in your deployment environment.
- Use a process manager like PM2 or deploy on platforms like Vercel or Heroku.
