import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";
import Home from "../pages/global/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Cart from "../pages/global/Cart";
import ProductDetail from "../pages/global/ProductDetail";
import Wishlist from "../pages/global/Wishlist";
import Account from "../pages/global/Account";
import Search from "../pages/global/Search";
import OrderSuccess from "../pages/global/OrderSuccess";
import Payment from "../pages/global/Payment";
import TrackOrder from "../pages/global/TrackOrder";
import FAQs from "../pages/global/FAQs";
import Contact from "../pages/global/Contact";

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
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/product/:title",
                element: <ProductDetail />
            }, {
                path: "/wishlist",
                element: <Wishlist />
            },
            {
                path: "/account",
                element: <Account />
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path : "/order-success",
                element : <OrderSuccess/>
            },
            {
                path : "/payment",
                element : <Payment/>
            },
            {
                path : "/track-order",
                element : <TrackOrder/>
            },
            {
                path : "/faqs",
                element : <FAQs/>
            },
            {
                path : "/contact",
                element : <Contact/>
            }
        ]
    }
])

export default routes;