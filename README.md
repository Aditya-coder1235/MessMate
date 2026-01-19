MessMate

MessMate is a MERN stack web application that helps students and working professionals find nearby mess services, view menus, and interact with mess owners. It includes features like role-based access control (RBAC), reviews, search, and filtering by city and meal type.


Features:-

User Features:
-Browse messes by name, city, and type (Veg/Non-Veg)
-View mess details including owner info, price, and description
-Add ratings and reviews
-Search mess by name
-Filter messes by city and meal type
-Contact mess owner via phone (click-to-call)

Owner Features:
-Upload and manage their mess
-Add daily menus
-Edit mess details

Technical Features:
-Role-Based Access Control (RBAC) on frontend and backend
-JWT-based authentication with secure cookies
-Responsive UI for desktop and mobile


Tech Stack
-Frontend: React.js, Redux Toolkit, Tailwind CSS
-Backend: Node.js, Express.js
-Database: MongoDB (Atlas)
-Authentication: JWT + HttpOnly Cookies
-Other Libraries:
-Axios (API requests)
-React Router v6



How to Run Locally

1. Clone the repo
git clone https://github.com/yourusername/messmate.git
cd messmate


2. Backend Setup
cd backend
npm install
touch .env

Add .env:
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_MAPS_API_KEY=your_google_maps_api_key


Run backend:nodemon app.js


3. Frontend Setup
cd frontend
npm install
touch .env

Add .env:
REACT_APP_API_URL=http://localhost:8080/api

Run frontend:
npm run dev