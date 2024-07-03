import React from "react";
import ReactDom from "react-dom/client"
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Contact";
import Error from "./Error";
import About from "./About";
import RestaurantMenu from "./RestaurantMenu";
import { NotAvialable } from "./herosection";


// console.log("hi rajiv");
// const heading = React.createElement("h1" ,{},"hi Rajiv how are you?");
// const Heading = () => {
//     return (<h1>how are you rajiv!!</h1>)
// }
const AppLayout = () => {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}

const appRouter = createBrowserRouter([
    {
      path: "/", // show path for routing
      element: <AppLayout />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [
        // show children component for routing
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/recipes/:id",
          element: <RestaurantMenu />,
        },
        {
          path: "/hero",
          element: <NotAvialable/>,
        },
      ],
    },
  ]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);