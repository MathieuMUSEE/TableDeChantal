import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Header/navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Accueil from './Pages/Accueil';
import reportWebVitals from './reportWebVitals';
import Slider from './components/Slider';
import Menu from './components/Menu';
import Contact from './Pages/Contact';
import Boissons from './Pages/Boissons';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    children: [
      {
        path:"/",
        element:<Slider />
      },
      {
        path:"/Contact",
        element:<Contact />
      },
      {
        path:"/Menu",
        element:<Menu />
      },
      {
        path:"/Boissons",
        element:<Boissons />
      }

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();