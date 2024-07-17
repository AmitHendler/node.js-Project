 # REST API Server

## Description

This project is a REST API server built with Node.js, Express, and MongoDB. It includes a content management system that allows business users to publish, edit, and delete content.

## Installation

1. Clone the repository.
2. Run `npm install` to install all dependencies.
3. Create a `config` folder with `default.json` and `production.json` files for environment configurations.

## Usage

- Run `npm start` to start the server.
- Use the provided routes to interact with the API.

## Routes

### Users

- `POST /api/users` - Register a new user.
- `POST /api/users/login` - Login a user.
- `GET /api/users` - Get all users (Admin only).
- `GET /api/users/:id` - Get user by ID.
- `PUT /api/users/:id` - Update user by ID.
- `PATCH /api/users/:id` - Change user business status.
- `DELETE /api/users/:id` - Delete user by ID.

### Cards

- `GET /api/cards` - Get all cards.
- `GET /api/cards/my-cards` - Get user's cards.
- `GET /api/cards/:id` - Get card by ID.
- `POST /api/cards` - Create a new card.
- `PUT /api/cards/:id` - Update card by ID.
- `PATCH /api/cards/:id` - Like a card.
- `DELETE /api/cards/:id` - Delete card by ID.

## Technologies

- Node.js
- Express
- MongoDB
- bcryptjs
- joi
- jsonwebtoken
- config
- morgan
- cors
- chalk
- mongoose

## Author

- Amit Hendler 2024

"# node.js-Project" 
"# node.js-Project" 
