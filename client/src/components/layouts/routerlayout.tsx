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
const UserViewProfile: any = lazy(
  () => import("../users/profiles/userViewProfile.tsx")
);
const Chat: any = lazy(() => import("../users/chats.tsx"));
const Stories: any = lazy(() => import("../users/stories.tsx"));
const Groups: any = lazy(() => import("../users/groups.tsx"));
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
          path: "/",
          element: <UserLogin />,
        },

        {
          path: "/user/register",
          element: <UserRegister />,
        },

        {
          path: "/user/change-password",
          element: <UserChangePassword />,
        },

        {
          path: "/user/create-profile",
          element: <UserCreateProfile />,
        },

        {
          path: "/user/content/profile",
          element: <UserViewProfile />,
        },

        {
          path: "/user/content/chat",
          element: <Chat />,
        },

        {
          path: "/user/content/story",
          element: <Stories />,
        },

        {
          path: "/user/content/groups",
          element: <Groups />,
        }
      ],
    },

    {
      path: "/*",
      element: <Notfound />,
    },
  ]);

  return (
    <>
      <Suspense>
        <RouterProvider router={routerPath} />
      </Suspense>
    </>
  );
};

export default Routerlayout;
