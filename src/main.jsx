import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Base from "./components/baseComponent/Base";
// import Home from "./components/HomeComponent/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import ErrorPage from "./components/ErrorPageComponent/ErrorPage";
import Login from "./components/AuthenticationComponent/Login";
import Register from "./components/AuthenticationComponent/Register";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./components/AuthenticationComponent/PrivateRoute";
import UpdateProfile from "./components/AuthenticationComponent/UpdateProfile";
import ChangePassword from "./components/AuthenticationComponent/ChangePassword";
import ForgotPassword from "./components/AuthenticationComponent/ForgotPassword";
// import MyReviews from "./components/MyReviewsComponent/MyReviews";
// import AllReviews from "./components/AllReviewsComonent/AllReviews";
// import axios from "axios";
// import Review from "./components/ReviewComponent/Review";
// import Wishlist from "./components/WishlistComponent/Wishlist";
// import AllGames from "./components/AddReviewComponent/AllGames";
// import Game from "./components/GameComponent/Game";
import AddReview from "./components/AddReviewComponent/AddReview";
// import ExistingGameForm from "./components/AddReviewComponent/ExistingGameForm";
// import UpdateReview from "./components/UpdateReviewComponent/UpdateReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    errorElement: <ErrorPage />,

    children: [
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      // {
      //   path: "/reviews",
      //   element: <AllReviews />,
      // },
      // {
      //   path: "/games",
      //   element: <AllGames />,
      // },
      // {
      //   path: "/review/:_id",
      //   loader: async ({ params }) => {
      //     const response = await axios.get(
      //       `https://ph-tenth-assignment-server.vercel.app/review/${params._id}`
      //     );
      //     return response.data;
      //   },
      //   element: <Review />,
      // },
      // {
      //   path: "/game/:_id",
      //   loader: async ({ params }) => {
      //     const response = await axios.get(
      //       `https://ph-tenth-assignment-server.vercel.app/game/${params._id}`
      //     );
      //     return response.data;
      //   },
      //   element: <Game />,
      // },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/addReviewOn/:_id",
      //   loader: async ({ params }) => {
      //     const response = await axios.get(
      //       `https://ph-tenth-assignment-server.vercel.app/game/${params._id}`
      //     );
      //     return response.data;
      //   },
      //   element: (
      //     <PrivateRoute>
      //       <ExistingGameForm />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/myReviews",
      //   element: (
      //     <PrivateRoute>
      //       <MyReviews />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/updateReview/:_id",
      //   loader: async ({ params }) => {
      //     const response = await axios.get(
      //       `https://ph-tenth-assignment-server.vercel.app/review/${params._id}`
      //     );
      //     return response.data;
      //   },
      //   element: (
      //     <PrivateRoute>
      //       <UpdateReview />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/wishlist",
      //   element: (
      //     <PrivateRoute>
      //       <Wishlist />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/change-password",
        element: (
          <PrivateRoute>
            <ChangePassword />
          </PrivateRoute>
        ),
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-center" />

      </AuthProvider>
    </HelmetProvider>

);
