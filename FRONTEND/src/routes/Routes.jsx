import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";

// Auth Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

// Catalog & Shopping Pages
import Home from "../pages/global/Home";
import Shop from "../pages/global/Shop";
import Category from "../pages/global/Category";
import Collection from "../pages/global/Collection";
import Collections from "../pages/global/Collections";
import ProductDetail from "../pages/global/ProductDetail";
import Search from "../pages/global/Search";
import Wishlist from "../pages/global/Wishlist";
import Cart from "../pages/global/Cart";

// Checkout & Payment Suite
import Checkout from "../pages/global/Checkout";
import CheckoutAddress from "../pages/global/CheckoutAddress";
import CheckoutPayment from "../pages/global/CheckoutPayment";
import Payment from "../pages/global/Payment";
import OrderSuccess from "../pages/global/OrderSuccess";

// Account & Order Management Pages
import Account from "../pages/global/Account";
import Profile from "../pages/global/Profile";
import Addresses from "../pages/global/Addresses";
import MyOrders from "../pages/global/MyOrders";
import OrderDetail from "../pages/global/OrderDetail";
import CancelOrder from "../pages/global/CancelOrder";
import ReturnOrder from "../pages/global/ReturnOrder";
import ExchangeOrder from "../pages/global/ExchangeOrder";
import TrackOrder from "../pages/global/TrackOrder";
import TrackOrderDetail from "../pages/global/TrackOrderDetail";

// Curated Collection Pages
import NewArrivals from "../pages/global/NewArrivals";
import BestSellers from "../pages/global/BestSellers";
import Trending from "../pages/global/Trending";
import Offers from "../pages/global/Offers";
import Sale from "../pages/global/Sale";

// Guides, Care & Policies
import SizeGuide from "../pages/global/SizeGuide";
import JewelleryCare from "../pages/global/JewelleryCare";
import ShippingInformation from "../pages/global/ShippingInformation";
import ReturnPolicy from "../pages/global/ReturnPolicy";
import ExchangePolicy from "../pages/global/ExchangePolicy";
import About from "../pages/global/About";
import Contact from "../pages/global/Contact";
import FAQs from "../pages/global/FAQs";
import PrivacyPolicy from "../pages/global/PrivacyPolicy";
import TermsAndConditions from "../pages/global/TermsAndConditions";
import ShippingPolicy from "../pages/global/ShippingPolicy";
import ReturnRefundPolicy from "../pages/global/ReturnRefundPolicy";
import CancellationPolicy from "../pages/global/CancellationPolicy";

// Gifting Suite
import Gifts from "../pages/global/Gifts";
import GiftCards from "../pages/global/GiftCards";
import GiftCardDetail from "../pages/global/GiftCardDetail";

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
                path: "/forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "/reset-password/:token",
                element: <ResetPassword />
            },

            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/category/:slug",
                element: <Category />
            },
            {
                path: "/collection/:slug",
                element: <Collection />
            },
            {
                path: "/product/:slug",
                element: <ProductDetail />
            },
            {
                path: "/search",
                element: <Search />
            },

            {
                path: "/wishlist",
                element: <Wishlist />
            },
            {
                path: "/cart",
                element: <Cart />
            },

            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/checkout/address",
                element: <CheckoutAddress />
            },
            {
                path: "/checkout/payment",
                element: <CheckoutPayment />
            },
            {
                path: "/payment",
                element: <Payment />
            },
            {
                path: "/order-success",
                element: <OrderSuccess />
            },
            {
                path: "/order-success/:orderId",
                element: <OrderSuccess />
            },

            {
                path: "/account",
                element: <Account />
            },
            {
                path: "/account/profile",
                element: <Profile />
            },
            {
                path: "/account/addresses",
                element: <Addresses />
            },
            {
                path: "/account/orders",
                element: <MyOrders />
            },
            {
                path: "/account/orders/:orderId",
                element: <OrderDetail />
            },
            {
                path: "/account/wishlist",
                element: <Wishlist />
            },
            {
                path: "/new-arrivals",
                element: <NewArrivals />
            },
            {
                path: "/best-sellers",
                element: <BestSellers />
            },
            {
                path: "/trending",
                element: <Trending />
            },
            {
                path: "/offers",
                element: <Offers />
            },
            {
                path: "/sale",
                element: <Sale />
            },
            {
                path: "/collections",
                element: <Collections />
            },
            {
                path: "/size-guide",
                element: <SizeGuide />
            },
            {
                path: "/jewellery-care",
                element: <JewelleryCare />
            },
            {
                path: "/shipping-information",
                element: <ShippingInformation />
            },
            {
                path: "/return-policy",
                element: <ReturnPolicy />
            },
            {
                path: "/exchange-policy",
                element: <ExchangePolicy />
            },
            {
                path: "/track-order",
                element: <TrackOrder />
            },
            {
                path: "/track-order/:orderId",
                element: <TrackOrderDetail />
            },
            {
                path: "/order/:orderId",
                element: <OrderDetail />
            },
            {
                path: "/order/:orderId/cancel",
                element: <CancelOrder />
            },
            {
                path: "/order/:orderId/return",
                element: <ReturnOrder />
            },
            {
                path: "/order/:orderId/exchange",
                element: <ExchangeOrder />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/faqs",
                element: <FAQs />
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "/terms-and-conditions",
                element: <TermsAndConditions />
            },
            {
                path: "/shipping-policy",
                element: <ShippingPolicy />
            },
            {
                path: "/return-refund-policy",
                element: <ReturnRefundPolicy />
            },
            {
                path: "/cancellation-policy",
                element: <CancellationPolicy />
            },
            {
                path: "/gifts",
                element: <Gifts />
            },
            {
                path: "/gift-cards",
                element: <GiftCards />
            },
            {
                path: "/gift-card/:id",
                element: <GiftCardDetail />
            }
        ]
    }
]);

export default routes;