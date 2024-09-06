import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SignUp from "../pages/Authentication/SignUp";
import SignIn from "../pages/Authentication/SignIn";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import ErrorPage from "../pages/ErrorPage";
import CheckoutPage from "../pages/CheckoutPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/checkOut',
                element: <CheckoutPage />
            }
        ]
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/signIn',
        element: <SignIn />
    }
]);

export default router;