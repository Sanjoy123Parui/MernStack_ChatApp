// import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Userlayout from './userlayouts.tsx';

// here was define route path objects
export const routerPath = createBrowserRouter([
    {
        path:'/',
        element:<Userlayout/>,
        children:[]
    }
]);