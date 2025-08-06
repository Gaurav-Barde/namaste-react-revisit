import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./components/AppLayout";
import Body from "./components/Body";
// import { Contact } from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
import { lazy, Suspense } from "react";

const Review = lazy(() => import("./components/Contact"));

// router configuration
const appRouter = createBrowserRouter([
  {
    // home page route
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        // contact page route
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading About...</h1>}>
            <Review />
          </Suspense>
        ),
      },
      {
        // about page route
        path: "/about",
        element: <About />,
      },
      {
        // restaurant info route
        path: "/restaurants/:resId",
        element: <RestaurantInfo />,
      },
    ],
    errorElement: <Error />,
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<RouterProvider router={appRouter} />);
