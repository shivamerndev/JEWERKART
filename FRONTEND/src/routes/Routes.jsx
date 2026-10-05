import { createBrowserRouter, Navigate } from "react-router-dom";
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
import ProductDetailStorefront from "../pages/products/ProductDetail";
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
import PrivacyPolicy from "../pages/others/LegalPrivacy";
import TermsAndConditions from "../pages/others/TermsAndConditions";
import ShippingPolicy from "../pages/others/ShippingPolicy";
import ReturnRefundPolicy from "../pages/orders/ReturnRefundPolicy";
import CancellationPolicy from "../pages/others/CancellationPolicy";

// Gifting Suite
import Gifts from "../pages/offers/Gifts";
import GiftCards from "../pages/offers/GiftCards";
import GiftCardDetail from "../pages/offers/GiftCardDetail";

// Global Errors Suite
import NotFound from "../pages/errors/NotFound";
import Forbidden from "../pages/errors/Forbidden";
import Unauthorized from "../pages/errors/Unauthorized";
import ServerError from "../pages/errors/ServerError";
import NetworkError from "../pages/errors/NetworkError";
import PaymentFailed from "../pages/errors/PaymentFailed";
import OrderFailed from "../pages/errors/OrderFailed";

// ERP Back-Office Admin Suite
import AdminLayout from "../admin/components/AdminLayout";
import AdminLogin from "../admin/pages/auth/AdminLogin";
import Dashboard from "../admin/pages/Dashboard";

// Admin - Products
import ProductList from "../admin/pages/products/ProductList";
import ProductCreate from "../admin/pages/products/ProductCreate";
import ProductDetail from "../admin/pages/products/ProductDetail";
import ProductEdit from "../admin/pages/products/ProductEdit";

// Admin - Categories
import CategoryList from "../admin/pages/categories/CategoryList";
import CategoryCreate from "../admin/pages/categories/CategoryCreate";
import CategoryEdit from "../admin/pages/categories/CategoryEdit";

// Admin - Collections
import CollectionList from "../admin/pages/collections/CollectionList";
import CollectionCreate from "../admin/pages/collections/CollectionCreate";
import CollectionEdit from "../admin/pages/collections/CollectionEdit";

// Admin - Orders
import OrderList from "../admin/pages/orders/OrderList";
import AdminOrderDetail from "../admin/pages/orders/AdminOrderDetail";

// Admin - Customers
import CustomerList from "../admin/pages/customers/CustomerList";
import CustomerDetail from "../admin/pages/customers/CustomerDetail";

// Admin - Marketing & Promotions
import ReviewList from "../admin/pages/marketing/ReviewList";
import CouponList from "../admin/pages/marketing/CouponList";
import DiscountList from "../admin/pages/marketing/DiscountList";

// Admin - Inventory & Supply
import InventoryList from "../admin/pages/inventory/InventoryList";
import LowStockList from "../admin/pages/inventory/LowStockList";

// Admin - Finance & Billing
import PaymentList from "../admin/pages/finance/PaymentList";
import RefundList from "../admin/pages/finance/RefundList";

// Admin - Logistics
import ShippingList from "../admin/pages/logistics/ShippingList";
import DeliveryList from "../admin/pages/logistics/DeliveryList";

// Admin - Storefront CMS
import BannerList from "../admin/pages/cms/BannerList";
import HeroSectionList from "../admin/pages/cms/HeroSectionList";
import ContentList from "../admin/pages/cms/ContentList";
import FaqList from "../admin/pages/cms/FaqList";

// Admin - Settings
import AdminSettings from "../admin/pages/settings/AdminSettings";
import GeneralSettings from "../admin/pages/settings/GeneralSettings";
import PaymentSettings from "../admin/pages/settings/PaymentSettings";
import ShippingSettings from "../admin/pages/settings/ShippingSettings";
import NotificationSettings from "../admin/pages/settings/NotificationSettings";

// Admin - Reports & Analytics
import ReportsHub from "../admin/pages/reports/ReportsHub";
import SalesReport from "../admin/pages/reports/SalesReport";
import ProductReport from "../admin/pages/reports/ProductReport";
import CustomerReport from "../admin/pages/reports/CustomerReport";

const routes = createBrowserRouter([
    // Storefront Client Experience
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
                element: <ProductDetailStorefront />
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
            },

            // Global Error & Transaction Fallback Routes
            {
                path: "/401",
                element: <Unauthorized />
            },
            {
                path: "/403",
                element: <Forbidden />
            },
            {
                path: "/404",
                element: <NotFound />
            },
            {
                path: "/500",
                element: <ServerError />
            },
            {
                path: "/network-error",
                element: <NetworkError />
            },
            {
                path: "/payment/failed",
                element: <PaymentFailed />
            },
            {
                path: "/order/failed",
                element: <OrderFailed />
            }
        ]
    },

    // Dedicated Standalone Admin Authentication
    {
        path: "/admin/login",
        element: <AdminLogin />
    },

    // ERP Back-Office Admin Portal
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/admin/dashboard" replace />
            },
            {
                path: "dashboard",
                element: <Dashboard />
            },

            // Products
            {
                path: "products",
                element: <ProductList />
            },
            {
                path: "products/new",
                element: <ProductCreate />
            },
            {
                path: "products/:id",
                element: <ProductDetail />
            },
            {
                path: "products/:id/edit",
                element: <ProductEdit />
            },

            // Categories
            {
                path: "categories",
                element: <CategoryList />
            },
            {
                path: "categories/new",
                element: <CategoryCreate />
            },
            {
                path: "categories/:id/edit",
                element: <CategoryEdit />
            },

            // Collections
            {
                path: "collections",
                element: <CollectionList />
            },
            {
                path: "collections/new",
                element: <CollectionCreate />
            },
            {
                path: "collections/:id/edit",
                element: <CollectionEdit />
            },

            // Orders
            {
                path: "orders",
                element: <OrderList />
            },
            {
                path: "orders/:id",
                element: <AdminOrderDetail />
            },

            // Customers
            {
                path: "customers",
                element: <CustomerList />
            },
            {
                path: "customers/:id",
                element: <CustomerDetail />
            },

            // Reviews & Coupons & Discounts
            {
                path: "reviews",
                element: <ReviewList />
            },
            {
                path: "coupons",
                element: <CouponList />
            },
            {
                path: "discounts",
                element: <DiscountList />
            },

            // Inventory & Low Stock
            {
                path: "inventory",
                element: <InventoryList />
            },
            {
                path: "inventory/low-stock",
                element: <LowStockList />
            },

            // Payments & Refunds
            {
                path: "payments",
                element: <PaymentList />
            },
            {
                path: "refunds",
                element: <RefundList />
            },

            // Shipping & Delivery
            {
                path: "shipping",
                element: <ShippingList />
            },
            {
                path: "delivery",
                element: <DeliveryList />
            },

            // Banners & Hero Sections
            {
                path: "banners",
                element: <BannerList />
            },
            {
                path: "hero-sections",
                element: <HeroSectionList />
            },

            // Content & FAQs
            {
                path: "content",
                element: <ContentList />
            },
            {
                path: "faqs",
                element: <FaqList />
            },

            // Settings
            {
                path: "settings",
                element: <AdminSettings />
            },
            {
                path: "settings/general",
                element: <GeneralSettings />
            },
            {
                path: "settings/payment",
                element: <PaymentSettings />
            },
            {
                path: "settings/shipping",
                element: <ShippingSettings />
            },
            {
                path: "settings/notifications",
                element: <NotificationSettings />
            },

            // Reports
            {
                path: "reports",
                element: <ReportsHub />
            },
            {
                path: "reports/sales",
                element: <SalesReport />
            },
            {
                path: "reports/products",
                element: <ProductReport />
            },
            {
                path: "reports/customers",
                element: <CustomerReport />
            }
        ]
    },

    // Catch-All 404 Route
    {
        path: "*",
        element: <NotFound />
    }
]);

export default routes;