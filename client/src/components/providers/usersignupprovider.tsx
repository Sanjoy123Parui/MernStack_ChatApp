import { UserLogoutContext, UserSignupContext, UserSigninContext } from "../hooks/contexts/userSignupContext.ts";
import { useUserLogoutModal, useSignupUser, useSigninUser } from "../hooks/signuphooks.ts";

// here was define and export user logout modal context provider component
export const UserLogoutModalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    // here destruct destruct data for custom hook for user signup and passing with props in context
    const userLogoutdata = useUserLogoutModal();

    return (
        <>
            <UserLogoutContext.Provider value={userLogoutdata}>
                {children}
            </UserLogoutContext.Provider>
        </>
    );
}


// here was define and export UserSignup context provider component
export const UserSignupContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    // destruct context data from custom hook
    const userSignupValue = useSignupUser();

    return (
        <>
            <UserSignupContext.Provider value={userSignupValue}>
                {children}
            </UserSignupContext.Provider>
        </>
    );
}


// here was define and export UserSignin context provider component
export const UserSigninContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    // destruct context data from custom hook
    const userSigninValue = useSigninUser();

    return (
        <>
            <UserSigninContext.Provider value={userSigninValue}>
                {children}
            </UserSigninContext.Provider>
        </>
    );
}