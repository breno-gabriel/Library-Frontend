import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import BookDetailsPage from './pages/BookDetailsPage.jsx';
import Home from './pages/Home.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <BookPurchasePage />
//   },
//   {
//     path: '/sales',
//     element: <BookSalesPage />
//   }
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>, 
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/book-details/:id', 
        element: <BookDetailsPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
