// import Recipes from "../images/projects/recipes.jpg"
// import Youtube from "../images/projects/youtube.png"
// import Chat from "../images/projects/chat.jpg"

import { ProjectProps } from "../types/types";

export const projects: Array<ProjectProps> = [
  {
    name: "Chat app",
    featured: true,
    url: "https://react-socketio-chat-app.netlify.app/",
    github: "https://github.com/OrekuD/react-chat-app",
    // image: Chat,
    description:
      "Veniam nulla ullamco ullamco occaecat. Non exercitation adipisicing voluptate proident irure in amet amet excepteur.",
    stack: [
      { id: "0", name: "socket.io" },
      { id: "1", name: "React" },
      { id: "2", name: "Html" },
      { id: "3", name: "css" }
    ]
  },
  {
    name: "Recipes app",
    featured: true,
    url: "https://reactrecipes.netlify.app/",
    github: "https://github.com/OrekuD/react-recipes-app",
    // image: Recipes,
    description:
      "Sit in nulla culpa est sunt commodo mollit. Exercitation Lorem laboris quis exercitation voluptate dolore.",
    stack: [
      { id: "0", name: "React" },
      { id: "1", name: "Html" },
      { id: "2", name: "css" }
    ]
  },
  {
    name: "YouTube Clone",
    featured: false,
    url: "https://reactyoutubecloneapp.netlify.app/",
    github: "https://github.com/OrekuD/react-youtube-clone",
    // image: Youtube,
    description:
      "In minim occaecat ullamco ea dolore sunt officia. Adipisicing est aliquip fugiat tempor fugiat quis pariatur tempor esse anim.",
    stack: [
      { id: "0", name: "React" },
      { id: "1", name: "Html" },
      { id: "2", name: "css" }
    ]
  }
];
