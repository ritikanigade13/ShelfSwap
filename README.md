# BookStore Web App

![BookStore Logo](path_to_logo_image) 
## Overview

BookStore is a web application for buying and selling books online. It is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

## Features

- User authentication and authorization
- Browse books by categories
- Search for books by title, author, or genre
- Add, edit, or delete book listings (for sellers)
- Purchase books (for buyers)
- User profile management
- Reviews and ratings for books
- Order history tracking

## Demo

A live demo of the application is available at [Demo Link](https://example.com)

## Screenshots

![Homepage Screenshot](path_to_homepage_screenshot) 
*Caption: Homepage*

![Book Listing Screenshot](path_to_listing_screenshot) 
*Caption: Book Listing Page*

## Tech Stack

- **Frontend:**
  - React.js
  - Axios (for API requests)
  - React Router (for navigation)
  - CSS/SCSS for styling

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose for ORM)
  - JWT (for authentication)
  - Bcrypt (for password hashing)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/ritikanigade13/ShelfSwap
    cd ShelfSwap
    ```

2. **Install dependencies:**

    - Backend dependencies:
        ```sh
        cd server
        npm install
        ```

    - Frontend dependencies:
        ```sh
        cd ../client
        npm install
        ```

3. **Set up environment variables:**

    Create a `.env` file in the `server` directory with the following contents:
    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the application:**

    - Start the backend server:
        ```sh
        cd server
        npm run dev
        ```

    - Start the frontend development server:
        ```sh
        cd ../client
        npm run dev
        ```

    The application should now be running on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in an existing user

### Books
- `GET /api/books` - Get all books
- `POST /api/books` - Add a new book (requires authentication)
- `GET /api/books/:id` - Get a single book by ID
- `PUT /api/books/:id` - Update a book by ID (requires authentication)
- `DELETE /api/books/:id` - Delete a book by ID (requires authentication)

### Users
- `GET /api/users/:id` - Get user profile by ID
- `PUT /api/users/:id` - Update user profile (requires authentication)
- `DELETE /api/users/:id` - Delete user profile (requires authentication)



## Contact

If you have any questions, feel free to reach out:

- Email: nigaderitika13@gmail.com
- GitHub: [ritikanigade13](https://github.com/ritikanigade13)

---

*This project was created for learning purposes and is not intended for commercial use.*
