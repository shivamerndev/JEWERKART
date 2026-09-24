import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";

// Auth Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

// Catalog & Shopping Pages
import Home from "../pages/global/Home";
import Shop from "../pages/orders/Shop";
import Category from "../pages/products/Category";
import Collection from "../pages/products/Collection";
import Collections from "../pages/products/Collections";
import ProductDetail from "../pages/products/ProductDetail";
import Search from "../pages/global/Search";
import Wishlist from "../pages/products/Wishlist";
import Cart from "../pages/orders/Cart";

// Checkout & Payment Suite
import Checkout from "../pages/orders/Checkout";
import CheckoutAddress from "../pages/orders/CheckoutAddress";
import CheckoutPayment from "../pages/orders/CheckoutPayment";
import Payment from "../pages/orders/Payment";
import OrderSuccess from "../pages/orders/OrderSuccess";

// Account & Order Management Pages
import Account from "../pages/customer/Account";
import Profile from "../pages/customer/Profile";
import Addresses from "../pages/customer/Addresses";
import MyOrders from "../pages/orders/MyOrders";
import OrderDetail from "../pages/orders/OrderDetail";
import CancelOrder from "../pages/orders/CancelOrder";
import ReturnOrder from "../pages/orders/ReturnOrder";
import ExchangeOrder from "../pages/orders/ExchangeOrder";
import TrackOrder from "../pages/orders/TrackOrder";
import TrackOrderDetail from "../pages/orders/TrackOrderDetail";

// Curated Collection Pages
import NewArrivals from "../pages/products/NewArrivals";
import BestSellers from "../pages/products/BestSellers";
import Trending from "../pages/products/Trending";
import Offers from "../pages/offers/Offers";
import Sale from "../pages/global/Sale";

// Guides, Care & Policies
import SizeGuide from "../pages/others/SizeGuide";
import JewelleryCare from "../pages/others/JewelleryCare";
import ShippingInformation from "../pages/orders/ShippingInformation";
import ReturnPolicy from "../pages/orders/ReturnPolicy";
import ExchangePolicy from "../pages/others/ExchangePolicy";
import About from "../pages/others/About";
import Contact from "../pages/others/Contact";
import FAQs from "../pages/others/FAQs";
import PrivacyPolicy from "../pages/others/PrivacyPolicy";
import TermsAndConditions from "../pages/others/TermsAndConditions";
import ShippingPolicy from "../pages/others/ShippingPolicy";
import ReturnRefundPolicy from "../pages/orders/ReturnRefundPolicy";
import CancellationPolicy from "../pages/others/CancellationPolicy";

// Gifting Suite
import Gifts from "../pages/offers/Gifts";
import GiftCards from "../pages/offers/GiftCards";
import GiftCardDetail from "../pages/offers/GiftCardDetail";

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