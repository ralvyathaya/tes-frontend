# React CRUD Application with Authentication

A modern React application showcasing CRUD operations, authentication, and theme management using local storage. Built with React, Tailwind CSS, and modern best practices.

## Features

- **Authentication**

  - Login with static credentials (username: admin, password: password123)
  - Persistent sessions using local storage
  - Protected routes

- **CRUD Operations**

  - Create, Read, Update, and Delete items
  - Search functionality
  - Custom pagination
  - Sorting by different fields
  - Data persistence using local storage

- **Theme Management**

  - Light/Dark mode toggle
  - System preference detection
  - Theme persistence

- **Profile Management**
  - Edit user profile
  - Persistent profile data

## Technologies Used

- React
- React Router DOM
- Tailwind CSS
- Local Storage for data persistence
- Hero Icons

## Getting Started

1. Clone the repository:

   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Login Credentials

- Username: admin
- Password: password123

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Project Structure

```
src/
  ├── components/      # Reusable components
  ├── contexts/        # React contexts
  ├── pages/          # Page components
  └── utils/          # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
