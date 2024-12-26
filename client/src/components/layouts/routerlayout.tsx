import {
    lazy,
    Suspense
} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Userlayout from './userlayout.tsx';

// here was define and import all children components
const UserLogin: any = lazy(() => import('../users/signup/userLogin.tsx'));
const UserRegister: any = lazy(() => import('../users/signup/userRegister.tsx'));
const UserCreate: any = lazy(() => import('../users/profiles/userCreate.tsx'));
const Notfound: any = lazy(() => import('../layouts/notfound.tsx'));

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
                },

            ]
        },

        {
            path: '/*',
            element: <Notfound />
        }
    ]);

    return (
        <>
            <Suspense>
                <RouterProvider router={routerPath} />
            </Suspense>
        </>
    );

}

export default Routerlayout;