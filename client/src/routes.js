import Admin from "./pages/Admin";
import {ABOUT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, PCFAQ_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, AFISH_ROUTE, ORDERS_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import About from "./pages/About";
import PCFaq from "./pages/PCFaq";
import Afish from "./pages/Afish";
import Orders from "./pages/Orders";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: ORDERS_ROUTE,
        Component: Orders
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: PCFAQ_ROUTE,
        Component: PCFaq
    },
    {
        path: AFISH_ROUTE,
        Component: Afish
    }
]
