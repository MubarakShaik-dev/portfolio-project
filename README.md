# Full-Stack Personal Portfolio

This is a modern, responsive, and performant single-page portfolio website built with the MERN stack (React, Node.js, Express). It features a dynamic project showcase, a theme toggle for light/dark modes, and a functional contact form.

## Features

* **Modern UI:** Clean, professional design based on visual mockups.
* **Theme Toggle:** Switch between light and dark modes.
* **Dynamic Projects:** Project information is fetched from a custom backend API.
* **Component-Based:** Built with React and organized into reusable components.
* **Responsive Design:** Looks great on all devices, from mobile to desktop.
* **Performant:** Lazy-loading for components to improve initial load times.
* **Accessible:** Designed with accessibility in mind (keyboard navigation, ARIA attributes).
* **Functional Contact Form:** Sends emails directly to your inbox using EmailJS.

## Tech Stack

**Frontend:**
* React.js
* Styled Components
* React Context API
* React Helmet
* React Icons
* EmailJS

**Backend:**
* Node.js
* Express.js
* CORS

## Getting Started

### Prerequisites

* Node.js (v14 or later)
* npm
* Git

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/MubarakShaik-dev/portfolio-project.git](https://github.com/MubarakShaik-dev/portfolio-project.git)
    cd portfolio-project
    ```

2.  **Setup Backend:**
    ```sh
    cd server
    npm install
    ```

3.  **Setup Frontend:**
    ```sh
    cd ../client
    npm install
    ```

4.  **Environment Variables:**
    * In the `client` directory, create a `.env` file and add your EmailJS credentials:
        ```
        REACT_APP_EMAILJS_SERVICE_ID=your_service_id
        REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
        REACT_APP_EMAILJS_USER_ID=your_user_id
        ```

### Running the Application

You will need two terminals to run the frontend and backend servers concurrently.

1.  **Run Backend Server:**
    * Navigate to the `server` directory.
    * Run the command:
        ```sh
        npm start
        ```
    * The server will be running on `http://localhost:5000`.

2.  **Run Frontend Client:**
    * Navigate to the `client` directory.
    * Run the command:
        ```sh
        npm start
        ```
    * The application will open in your browser at `http://localhost:3000`.

## Deployment

This project is configured for a split deployment:

* **Backend:** Deployed on [Render](https://render.com/).
* **Frontend:** Deployed on [Vercel](https://vercel.com/).
