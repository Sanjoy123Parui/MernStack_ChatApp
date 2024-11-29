// import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Userlayout from './userlayouts.tsx';
import UserRegister from '../components/users/signup/userRegister.tsx';
import UserLogin from "../components/users/signup/userLogin.tsx";

// here was define route path objects
export const routerPath:unknown = createBrowserRouter([
    {
        path:'/',
        element:<Userlayout/>,
        children:[

            {
                path:'/',
                element:<UserRegister/>
            },
            
            {
                path:'/user/login',
                element:<UserLogin/>
            }
        ]
    }
]);