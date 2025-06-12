import { createBrowserRouter } from "react-router-dom";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export { router };
