import React, { useId } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import UsersDetails from "./Components/UsersDetails/UsersDetails.jsx";
import Users from "./Components/Users/Users.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import PostDetails from "./Components/PostDetails/PostDetails.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: "/users/:useId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.useId}`),
        element: <UsersDetails></UsersDetails>

      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ],
  },

  // {
  //   path: 'about',
  //   element: <div>Hello From About!!!!!!</div>
  // },
  // {
  //   path: 'contact',
  //   element: <div>Please contact with me right now!</div>
  // }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
