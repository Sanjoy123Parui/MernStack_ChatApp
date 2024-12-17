import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Userlayout from './userlayout.tsx';

// here was define and import all children components
const UserLogin = lazy(() => import('../users/signup/userLogin.tsx'));
const UserRegister = lazy(() => import('../users/signup/userRegister.tsx'));
const UserCreate = lazy(() => import('../users/profiles/userCreate.tsx'));

// here was create routerlayout functional component
const Routerlayout: React.FC = () => {

    // here was define route path of all components
    const routerPath: any = createBrowserRouter([
        {
            path: '/',
            element: <Userlayout />,
            children: [
                {
                    path: '/',
                    element: <UserLogin />
                },
                {
                    path: '/user/register',
                    element: <UserRegister />
                },
                {
                    path: '/user/chat/profile',
                    element: <UserCreate />
                }
            ]
        }
    ]);

    return (
        <>
            <RouterProvider router={routerPath} />
        </>
    );

}

export default Routerlayout;