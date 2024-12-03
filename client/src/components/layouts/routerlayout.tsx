import {lazy} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Userlayout from './userlayout.tsx';

// here declare or impor lazyloading router path of all components
const UserRegister:any = lazy(()=>import('../users/signup/userRegister.tsx'));
const UserLogin:any = lazy(()=>import('../users/signup/userLogin.tsx'));

// here declare all router path
const routerPath:any = createBrowserRouter([
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

// here was define router layout functional component
const Routerlayout = ()=>{

    return(
        <>
            {/* here provide all route path for loaded */}
            <RouterProvider router={routerPath}/>
        </>
    )

}

// export router layout component
export default Routerlayout;