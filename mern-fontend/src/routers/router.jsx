import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../home/Home';
import Shop from '../shop/Shop';
import Blog from '../components/Blog';
import About from '../components/About';
import SingleBook from '../shop/SingleBook';
import DashboardLayout from '../dashboard/DashboardLayout';
import Dashboard from '../dashboard/Dashboard';
import UploadBook from '../dashboard/UploadBook';
import ManageBooks from '../dashboard/ManageBooks';
import EditBook from '../dashboard/EditBook';
import SignUp from '../components/SignUp';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: '/shop',
            element: <Shop />,
         },
         {
            path: '/blog',
            element: <Blog />,
         },
         {
            path: '/about',
            element: <About />,
         },
         {
            path: '/api/book/:id',
            element: <SingleBook />,
            loader: ({ params }) =>
               fetch(`http://localhost:8080/api/book/${params.id}`),
         },
      ],
   },
   {
      path: '/admin/dashboard',
      element: <DashboardLayout />,
      children: [
         {
            path: '/admin/dashboard',
            element: <Dashboard />,
         },
         {
            path: '/admin/dashboard/upload',
            element: <UploadBook />,
         },
         {
            path: '/admin/dashboard/manage',
            element: <ManageBooks />,
         },
         {
            path: '/admin/dashboard/edit-book/:id',
            element: <EditBook />,
            loader: ({ params }) =>
               fetch(`http://localhost:8080/api/book/${params.id}`),
         },
      ],
   },
   {
      path: '/sign-up',
      element: <SignUp />,
   },
]);

export default router;
