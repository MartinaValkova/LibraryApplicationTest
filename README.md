# Simple Node Authentication Project
This is a simple Node.js project for user authentication using Express.js, PostgreSQL for the database, bcrypt for password hashing, and JWT (JSON Web Tokens) for authentication.

# Project Structure
index.html: Front-end part of the application. Provides a login form using Alpine.js for interactivity. Upon submission, it sends a POST request to /api/login endpoint.

models.js: Contains functions to interact with the database. Includes methods to retrieve users, retrieve a user by username, and create a new user.

postgres.js: Sets up the PostgreSQL database connection using the pg library. Exports a function to execute SQL queries.

routes.js: Defines the API routes using Express.js. Includes routes for user login and registration. Upon successful login, it returns a JWT token.

server.js: Main server file. Sets up the Express.js server, defines middleware for JSON parsing, serves static files, and defines the route endpoints.

## Learning Objectives

This project gained hands-on experience with the following concepts:

- **Web Application Architecture**: Understanding the structure and components of web applications, including the client-server model, front-end, and back-end interactions.

- **REST API**: Learning the principles of RESTful APIs, including resource-oriented design, HTTP methods (GET, POST, PUT, DELETE), and statelessness.

- **JSON Web Tokens (JWT)**: Implementing JWT-based authentication and authorization mechanisms to secure your application's endpoints.

- **Express.js**: Building server-side applications and APIs using Express.js framework for Node.js. Understanding routing, middleware, and request handling.

- **HTTP Methods**: Practicing the use of HTTP methods to perform CRUD operations on resources, adhering to RESTful principles.

- **Fetch API**: Utilizing the Fetch API to send asynchronous HTTP requests from the client-side JavaScript code to the server and handle responses.

- **Connecting to PostgreSQL Database**: Establishing connections to a PostgreSQL database from your Node.js application and performing database operations using libraries like `pg` or `pg-promise`.

- **Server and Client-side Development**: Developing both server-side and client-side components of the application, understanding their roles and interactions.

## Getting Started

To get started with this project:

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Install Dependencies**: Run `npm install` to install the required dependencies specified in the `package.json` file.

3. **Set Up PostgreSQL Database**: Set up a PostgreSQL database and configure the connection details in a `.env` file. Ensure you have the necessary environment variables such as `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS`, `DB_NAME`, and `JWT_SECRET`.

4. **Start the Server**: Run `node server.js` to start the Express.js server. Ensure your server is running and listening for incoming requests.

5. 





