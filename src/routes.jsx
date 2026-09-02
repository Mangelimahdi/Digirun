import { createBrowserRouter } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home/page";
import Categories from "./pages/Categories/page";
import Products from "./pages/Products/page";
import AuthPage from "./pages/Auth/page";
import Product from "./pages/Product/page";
import AccountLayout from "./features/account/Layout/AccountLayout";
import Dashboard from "./features/account/Dashboard/Dashboard";
import Orders from "./features/account/Orders/Orders";
import Addresses from "./features/account/Addresses/Addresses";
import Messages from "./features/account/Messages/Messages";
import Favorites from "./features/account/Favorites/Favorites";
import Profile from "./features/account/Profile/Profile";
import AuthLayout from "./features/auth/layout/AuthLayout";
import Cart from "./pages/Cart/page";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "categories",
                element: <Categories />
            },
            {
                path: "categories/:category",
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "products/:productId",
                element: <Product />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: "account",
                element: <AccountLayout />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />
                    },
                    {
                        path: "orders",
                        element: <Orders />
                    },
                    {
                        path: "addresses",
                        element: <Addresses />
                    },
                    {
                        path: "messages",
                        element: <Messages />
                    },
                    {
                        path: "favorites",
                        element: <Favorites />
                    },
                    {
                        path: "profile",
                        element: <Profile />
                    },
                ]
            },
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <AuthPage />,
                handle: { hideRootLayout: true }
            },
            // {
            //     path: "rules",
            //     element: <RulesPage />
            // },
        ]
    },
])

export default router