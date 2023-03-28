import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import News from "../pages/News";

const routes = [
    {
        path: '/home',
        element: Home
    },
    {
        path: '/news',
        element: News
    },
    {
        path: '/about',
        element: About,
        needLogin: true
    },
    {
        path: '/login',
        element: Login
    }
]

export default routes