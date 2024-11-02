import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homes from "./components/Homes/Homes";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import AllPosts from "./components/AllPosts/AllPosts";
import Post from "./components/Post/Post";
import PostDetails from "./components/PostDetails/PostDetails";
import Posting from "./components/Posing/Posting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homes></Homes>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/allPosts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <AllPosts></AllPosts>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/post/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>,
      },
      {
        path: "/posting",
        element: <Posting></Posting>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
