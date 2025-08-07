const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- Mock Data with new, relevant image URLs ---

const projects = {
  static: [
    { id: 1, title: "Restaurant Menu Page", tech: "HTML, CSS, Bootstrap", description: "A classic, non-interactive menu page.", fullDescription: "This project is a pixel-perfect implementation of a restaurant menu. It focuses on clean HTML structure and advanced CSS for styling, ensuring a beautiful and readable layout.", imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600", liveUrl: "#", githubUrl: "#" },
    { id: 2, title: "Portfolio Template", tech: "HTML, CSS, Bootstrap", description: "A simple, static portfolio layout.", fullDescription: "A clean, minimalist, and static portfolio template built with semantic HTML5 and CSS3. It's designed to be easily customizable for any creative professional.", imageUrl: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=600", liveUrl: "#", githubUrl: "#" },
    { id: 3, title: "Tribute Page", tech: "HTML, CSS, Bootstrap", description: "A static page honoring a famous person.", fullDescription: "A simple webpage built to pay tribute to a notable figure. This project demonstrates fundamental HTML and CSS skills, including layout and typography.", imageUrl: "https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg?auto=compress&cs=tinysrgb&w=600", liveUrl: "#", githubUrl: "#" },
    { id: 4, title: "Technical Documentation", tech: "HTML, CSS, Bootstrap", description: "A static documentation site for a library.", fullDescription: "A documentation website for a fictional JavaScript library. It features a sidebar navigation and code snippets, built purely with HTML and CSS.", imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600", liveUrl: "#", githubUrl: "#" }
  ],
  responsive: [
    { id: 5, title: "Photo Gallery", tech: "HTML, CSS, Bootstrap", description: "A responsive photo gallery.", fullDescription: "This project showcases a responsive image gallery that adapts to all screen sizes, from mobile phones to desktops, using Bootstrap's grid system.", imageUrl: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=600", liveUrl: "#", githubUrl: "#" },
    { id: 6, title: "Business Landing Page", tech: "HTML, CSS, Bootstrap", description: "A multi-section responsive landing page.", fullDescription: "A comprehensive landing page for a corporate website, built with Bootstrap to ensure it is fully responsive and looks professional on all devices.", imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600", liveUrl: "#", githubUrl: "#" },
    { id: 7, title: "Event Promotion Site", tech: "HTML, CSS, Bootstrap", description: "A responsive design for a conference.", fullDescription: "A vibrant and responsive design for a tech conference website. The layout is optimized for desktops, tablets, and mobile devices to provide a great user experience for all attendees.", imageUrl: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600", liveUrl: "#", githubUrl: "#" },
    { id: 8, title: "Personal Blog Layout", tech: "HTML, CSS, Bootstrap", description: "A responsive layout for a personal blog.", fullDescription: "A clean and modern design for a personal blog that focuses on readability and responsiveness. It includes layouts for the homepage, article page, and contact page.", imageUrl: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600", liveUrl: "#", githubUrl: "#" }
  ],
  dynamic: [
    { id: 9, title: "Interactive Form", tech: "HTML, CSS, JavaScript, Flexbox", description: "A form with client-side validation.", fullDescription: "A dynamic user registration form that uses JavaScript for real-time validation and Flexbox for a flexible layout. It provides instant feedback to the user.", imageUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600", liveUrl: "#", githubUrl: "#" },
    { id: 10, title: "Simple Calculator", tech: "HTML, CSS, JavaScript, Flexbox", description: "A functional calculator built with vanilla JS.", fullDescription: "A dynamic calculator application built with JavaScript that can perform basic arithmetic operations. The layout is managed with CSS Flexbox.", imageUrl: "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=600", liveUrl: "#", githubUrl: "#" },
    { id: 11, title: "Image Slider", tech: "HTML, CSS, JavaScript, Flexbox", description: "A dynamic image carousel.", fullDescription: "A functional image slider built from scratch using JavaScript for the logic and Flexbox for the layout. Users can cycle through images with next and previous buttons.", imageUrl: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600", liveUrl: "#", githubUrl: "#" },
    { id: 12, "title": "Quiz Application", "tech": "HTML, CSS, JavaScript, Flexbox", "description": "An interactive quiz app.", "fullDescription": "A fun and interactive quiz application built with vanilla JavaScript. It fetches questions, tracks the user's score, and displays the results at the end. The layout is fully responsive using Flexbox.", "imageUrl": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600", "liveUrl": "#", "githubUrl": "#" }
  ]
};

const skills = [
  { 
    category: "Frontend",
    items: [
      { id: 3, name: 'React JS', icon: 'FaReact', description: 'Certified in React JS development.', certificateUrl: 'https://certificates.ccbp.in/intensive/react-js?id=HPHKTLQDZJ' },
      { id: 4, name: 'JavaScript', icon: 'FaJsSquare', description: 'Certified in JavaScript Essentials.', certificateUrl: 'https://certificates.ccbp.in/intensive/javascript-essentials?id=KLTVRRXEWS' },
      { id: 6, name: 'Bootstrap', icon: 'FaBootstrap', description: 'Certified in Responsive Web Design.', certificateUrl: 'https://certificates.ccbp.in/intensive/responsive-website?id=KHXTMHYWDZ' },
      { id: 8, name: 'Flexbox', icon: 'FaCss3Alt', description: 'Certified in Responsive Web Design using Flexbox.', certificateUrl: 'https://certificates.ccbp.in/intensive/flexbox?id=TPRVMPKFCS' }
    ]
  },
  {
    category: "Backend",
    items: [
      { id: 1, name: 'Python', icon: 'FaPython', description: 'Certified in Programming Foundations with Python.', certificateUrl: 'https://certificates.ccbp.in/intensive/programming-foundations?id=ADZYNSJHUN' },
      { id: 2, name: 'Node JS', icon: 'FaNodeJs', description: 'Certified in Node JS development.', certificateUrl: 'https://certificates.ccbp.in/intensive/node-js?id=BPHHHPOORB' }
    ]
  },
  {
    category: "Tools & Databases",
    items: [
      { id: 5, name: 'SQL', icon: 'FaDatabase', description: 'Certified in Introduction to Databases.', certificateUrl: 'https://certificates.ccbp.in/intensive/introduction-to-databases?id=KOSUTZACCB' },
      { id: 7, name: 'Git', icon: 'FaGitAlt', description: 'Certified in Developer Foundations with Git.', certificateUrl: 'https://certificates.ccbp.in/intensive/developer-foundations?id=TFJHGNTRZZ' }
    ]
  }
];

// --- API Endpoints ---

app.get('/api/projects', (req, res) => res.json(projects));

app.get('/api/projects/:id', (req, res) => {
  const projectId = parseInt(req.params.id, 10);
  let project = null;
  for (const category in projects) {
    const found = projects[category].find(p => p.id === projectId);
    if (found) {
      project = found;
      break;
    }
  }
  if (project) res.json(project);
  else res.status(404).json({ message: 'Project not found' });
});

app.get('/api/skills', (req, res) => res.json(skills));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
