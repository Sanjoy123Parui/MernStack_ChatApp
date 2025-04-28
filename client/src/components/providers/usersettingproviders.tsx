import { useToggleAccountSettings, useUserRemoveAccounts } from "../hooks/settinghooks.ts";
import { SettingsContext, UserAccountRemoveContext } from "../hooks/contexts/userSettingContexts.ts"

// here was define with export UserAccessoriesProvider component
export const UserAccessoriesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // here declare custom hooks data for user settings accessories
    const userSettings: any = useToggleAccountSettings();
    return (
        <>
            <SettingsContext.Provider value={userSettings}>
                {children}
            </SettingsContext.Provider>
        </>
    );
}

// here was define with export UserAccountRemover component
export const UserAccountRemover: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    // here declare custom hooks data for user account removal
    const userAccountRemoval: any = useUserRemoveAccounts();

    return (
        <>
            <UserAccountRemoveContext.Provider value={userAccountRemoval}>
                {children}
            </UserAccountRemoveContext.Provider>
        </>
    );
}