import logo from './logo.svg';
import './App.css';
import {RouterProvider,createBrowserRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './Components/Homepage';
import About from './Components/About'
import Services from './Components/Services'
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Careers from './Careers';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />
    },
    {
      path: "/AboutIA",
      element: <About/>
    },
    {
      path: "/IAservices",
      element: <Services/>
    },
    {
      path: "/Blog",
      element: <Blog/>
    },
    {
      path: "/Careers",
      element: <Careers/>
    }
    ,
    {
      path: "/contact",
      element: <Contact/>
    }
  ])
  return (   
    <RouterProvider router = {router}/>
   
  );
 
}

export default App;
