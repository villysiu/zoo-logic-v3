import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import TechStack from './components/TechStack';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tech-stack",
    element: <TechStack />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

