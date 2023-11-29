import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 1,
        name: 'Weather App',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptat molestias tempora voluptatibus nemo cupiditate velit.',
        github: '#',
        langs: [
          { id: 1, text: 'python' },
          { id: 2, text: 'javascript' },
          { id: 3, text: 'html' },
          { id: 4, text: 'css' },
        ],
      },
      {
        id: 2,
        name: 'Task Tracker',
        description:
          'A simple application to track your tasks and manage your to-do list efficiently.',
        github: '#',
        langs: [
          { id: 1, text: 'javascript' },
          { id: 2, text: 'react' },
          { id: 3, text: 'css' },
        ],
      },
      {
        id: 3,
        name: 'E-commerce Website',
        description:
          'Build a fully functional e-commerce website with product listings, shopping cart, and checkout functionality.',
        github: '#',
        langs: [
          { id: 1, text: 'javascript' },
          { id: 2, text: 'vue' },
          { id: 3, text: 'html' },
          { id: 4, text: 'css' },
        ],
      },
      {
        id: 4,
        name: 'Blog Platform',
        description:
          'Create a platform for users to publish and share their blogs on various topics.',
        github: '#',
        langs: [
          { id: 1, text: 'python' },
          { id: 2, text: 'django' },
          { id: 3, text: 'html' },
          { id: 4, text: 'css' },
        ],
      },
      {
        id: 5,
        name: 'Recipe App',
        description:
          'Develop an application to store and share cooking recipes with a user-friendly interface.',
        github: '#',
        langs: [
          { id: 1, text: 'javascript' },
          { id: 2, text: 'react' },
          { id: 3, text: 'css' },
        ],
      },
      {
        id: 6,
        name: 'Portfolio Website',
        description:
          'Build a personal portfolio website showcasing your skills, projects, and achievements.',
        github: '#',
        langs: [
          { id: 1, text: 'javascript' },
          { id: 2, text: 'vue' },
          { id: 3, text: 'html' },
          { id: 4, text: 'css' },
        ],
      },
      {
        id: 7,
        name: 'Chat Application',
        description:
          'Create a real-time chat application with features like private messaging and group chats.',
        github: '#',
        langs: [
          { id: 1, text: 'javascript' },
          { id: 2, text: 'node.js' },
          { id: 3, text: 'socket.io' },
        ],
      },
      {
        id: 8,
        name: 'Fitness Tracker',
        description:
          'Build an application to track users’ fitness activities, workouts, and progress.',
        github: '#',
        langs: [
          { id: 1, text: 'javascript' },
          { id: 2, text: 'react' },
          { id: 3, text: 'css' },
        ],
      },
      {
        id: 9,
        name: 'Social Media Dashboard',
        description:
          'Develop a dashboard for users to manage and analyze their social media activities.',
        github: '#',
        langs: [
          { id: 1, text: 'javascript' },
          { id: 2, text: 'vue' },
          { id: 3, text: 'html' },
          { id: 4, text: 'css' },
        ],
      },
      {
        id: 10,
        name: 'Online Quiz App',
        description:
          'Create an interactive quiz application with multiple-choice questions and scoring.',
        github: '#',
        langs: [
          { id: 1, text: 'javascript' },
          { id: 2, text: 'react' },
          { id: 3, text: 'css' },
        ],
      },
    ],
  }),
})
