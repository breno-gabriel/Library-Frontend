import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import BookPurchasePage from './pages/BookPurchasePage.jsx';
import BookSalesPage from './pages/BookSalesPage.jsx';

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
        path: '/purchase',
        element: <BookPurchasePage />
      },
      {
        path: '/sales',
        element: <BookSalesPage />
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
