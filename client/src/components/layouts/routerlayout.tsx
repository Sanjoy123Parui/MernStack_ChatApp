import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Userlayout from './userlayout.tsx';

// here declare or import lazyloading router path of all components

// here declare user functional component path import
const UserLogin: any = lazy(() => import('../users/signup/userLogin.tsx'));
const UserRegister: any = lazy(() => import('../users/signup/userRegister.tsx'));
const CreateUser: any = lazy(() => import('../users/profiles/userCreate.tsx'));



// here was define router layout functional component
const Routerlayout: React.FC = () => {

    // here declare all router path
    const routerPath: any = createBrowserRouter([
        {
            path: `/`,
            element: <Userlayout />,
            children: [
                {
                    path: `/`,
                    element: <UserLogin />
                },
                {
                    path: `/user/register`,
                    element: <UserRegister />
                },
                {
                    path: `/user/chat/profile`,
                    element: <CreateUser />
                }
            ]
        }
    ]);

    return (
        <>
            {/* here provide all route path for loaded */}
            <RouterProvider router={routerPath} />
        </>
    );

}

// export router layout component
export default Routerlayout;