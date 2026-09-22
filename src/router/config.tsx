import type { RouteObject } from "react-router-dom";
import SiteLayout from "../components/feature/SiteLayout";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Academics from "../pages/academics/page";
import Departments from "../pages/departments/page";
import Administration from "../pages/administration/page";
import Students from "../pages/students/page";
import Clubs from "../pages/clubs/page";
import Admissions from "../pages/admissions/page";
import News from "../pages/news/page";
import NewsArticle from "../pages/news/detail/page";
import Gallery from "../pages/gallery/page";
import Contact from "../pages/contact/page";
import NotFound from "../pages/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "academics", element: <Academics /> },
      { path: "departments", element: <Departments /> },
      { path: "administration", element: <Administration /> },
      { path: "students", element: <Students /> },
      { path: "clubs", element: <Clubs /> },
      { path: "admissions", element: <Admissions /> },
      { path: "news", element: <News /> },
      { path: "news/:id", element: <NewsArticle /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
