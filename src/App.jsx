// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CreateOrder from "./pages/CreateOrder";
import { createBrowserRouter, RouterProvider  } from "react-router-dom"; 
import Home from "./features/ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CartOrder from './features/order/CreateOrder';
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./features/ui/AppLayout";
import Error from "./features/ui/Error";
import { loader as orderLoader } from "./features/order/Order";
import { action as createOrderAction } from "./features/order/CreateOrder";
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
       
        children:[
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
                loader: menuLoader,
                errorElement: <Error />,
            },
            {
                path: "/cart",
                element:<Cart />
            },
            {
                path: "/order/new",
                element:<CreateOrder />,
                action: createOrderAction,
            },
            {
                path:'/order/:orderId',
                element:<Order/>,
                loader: orderLoader,
                errorElement: <Error />,
            },
        ]},

    
])
function App() {
    return <RouterProvider router={router} />
}

export default App
