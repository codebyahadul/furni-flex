import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SignUp from "../pages/Authentication/SignUp";
import SignIn from "../pages/Authentication/SignIn";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
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