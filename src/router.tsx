import { createBrowserRouter } from "react-router-dom";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Faq } from "./pages/Faq/Faq";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Map } from "./pages/Map/Map";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/faq",
    element: <Faq />
  },
  {
    path: "/contacts",
    element: <Contact />
  },
  {
    path: "/map",
    element: <Map />
  }
]);
