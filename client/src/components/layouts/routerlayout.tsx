import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Userlayout from "./userlayout.tsx";

// here was define and import all children components
const UserLogin: any = lazy(() => import("../users/signup/userLogin.tsx"));
const UserRegister: any = lazy(
  () => import("../users/signup/userRegister.tsx")
);
const UserChangePassword: any = lazy(
  () => import("../users/signup/userChangePassword.tsx")
);
const UserCreateProfile: any = lazy(
  () => import("../users/profiles/userCreateProfile.tsx")
);

const Chats: any = lazy(() => import("../users/chats.tsx"));
const Stories: any = lazy(() => import("../users/stories.tsx"));
const Groups: any = lazy(() => import("../users/groups.tsx"));
// const Supports: any = lazy(() => import("../users/supports.tsx"));
const Notfound: any = lazy(() => import("../layouts/notfound.tsx"));

// here was create routerlayout functional component
const Routerlayout: React.FC = () => {
  // here was define route path of all components
  const routerPath: any = createBrowserRouter([
    {
      path: "/",
      element: <Userlayout />,
      children: [
        {
          index: true,
          element: <UserLogin />,
        },

        {
          path: "user/register",
          element: <UserRegister />,
        },

        {
          path: "user/change-password",
          element: <UserChangePassword />,
        },

        {
          path: "user/create-profile",
          element: <UserCreateProfile />,
        },

        {
          path: "user/content/chats",
          element: <Chats />,
        },

        {
          path: "/user/content/stories",
          element: <Stories />,
        },

        {
          path: "/user/content/groups",
          element: <Groups />,
        },
        /* {
          path: "/user/customer/support",
          element: <Supports />,
        }, */
      ],
    },

    {
      path: "/*",
      element: <Notfound />,
    },
  ]);

  return (
    <>
      <Suspense fallback={null}>
        <RouterProvider router={routerPath} />
      </Suspense>
    </>
  );
};

export default Routerlayout;
