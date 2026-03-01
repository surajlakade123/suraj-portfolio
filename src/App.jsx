
import './App.css';
import Home from "./home.jsx"
import About from './about.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './navbar.jsx';
import Feature from './feature.jsx'
import Contact from './contact.jsx'
import Education from './education.jsx'
import Skill from './skill.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      )
    },

    {
      path: "/About",
      element: (
        <>
          <Navbar />
          <About />
        </>
      )
    },
        {
      path: "/Feature",
      element: (
        <>
          <Navbar />
          <Feature />
        </>
      )
    },
    {
      path: "/Education",
      element:(
        <>
          <Navbar />
          <Education />
        </>
      )
    },
    {
      path: "/Skill",
      element:(
        <>
          <Navbar />
          <Skill />
        </>
      )
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
             <Contact />
        </>
      )
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;