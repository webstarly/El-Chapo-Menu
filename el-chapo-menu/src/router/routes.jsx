import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "@/components/Error";
import Home from "@/pages/Home";
import App from "@/App";

  const router =  createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Home/>
            },
           
        ]
    },

    

  ])
  export default router;