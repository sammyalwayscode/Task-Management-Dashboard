# Task Management Dashboard for Teachmate AI

Welcome to the Task Management Dashboard for the AI product Teachmate! This application is built using React and Next.js, with a focus on efficiency, scalability, and responsiveness. Below are instructions on how to run the app, details on dependencies used, and insights into design choices.

## How to Run the App

If you want to experience the Task Management Dashboard locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sammyalwayscode/Task-Management-Dashboard.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd Task-Management-Dashboard
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser and visit** `http://localhost:3000` to view the application.

## Dependencies

The project relies on the following dependencies:

- **@reduxjs/toolkit**: A Redux toolkit for efficient state management.
- **react-redux**: Provides React bindings for Redux, allowing seamless integration.
- **redux-persist**: Enables persistent storage of Redux state, ensuring data persistence across sessions.
- **react-icons**: A library providing a set of high-quality React icons for use in the application.
- **react-router-dom**: Facilitates navigation and routing within the React application.
- **styled-components**: A CSS-in-JS library for styling React components with ease.
- **prop-types**: A runtime type-checking library for React props.
- **sweetalert2**: A beautiful, responsive, and customizable alert library for enhancing user interactions.

## Design Choices

The design of the Task Management Dashboard was inspired by the color choices and aesthetics of [Teachmate AI](https://teachmateai.com). The aim was to create a visually appealing and cohesive experience for users familiar with the Teachmate brand.

### Navigation

To enhance user experience, two separate navigation sections were implemented in the sidebar—one for viewing all tasks and another for filtering tasks based on their status. This design choice provides quick access to different views and improves overall navigation efficiency.

### Detail Page

A dedicated detail page for each task was created to allow users to access additional information and perform actions such as editing the task details, updating the task status, and deleting the task.

These design decisions aim to create a user-friendly and intuitive interface, making task management an efficient and enjoyable experience.

Feel free to explore, create tasks, and manage them seamlessly with the Task Management Dashboard! If you have any questions or feedback, please don't hesitate to reach out.

Happy task managing! 🚀
