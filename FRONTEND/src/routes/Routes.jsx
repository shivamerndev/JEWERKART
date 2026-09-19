import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";
import Home from "../pages/global/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const routes = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])

export default routes;