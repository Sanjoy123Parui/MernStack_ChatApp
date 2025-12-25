import {
  useUsernavMenuActions,
  useToggleAccountSettings,
  useSettingUserToggle,
} from "../../hooks/settinghooks.ts";

import {
  NavMenuBarContext,
  SettingsContext,
  SettingToggleContext,
} from "../../hooks/contexts/userSettingContexts.ts";

// here was define with export UserAccessoriesProvider component
export const UserNavMenuProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const userNavdata: any = useUsernavMenuActions();
  return (
    <>
      <NavMenuBarContext.Provider value={userNavdata}>
        {children}
      </NavMenuBarContext.Provider>
    </>
  );
};

export const UserAccessoriesProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // here declare custom hooks data for user settings accessories
  const userSettings: any = useToggleAccountSettings();
  return (
    <>
      <SettingsContext.Provider value={userSettings}>
        {children}
      </SettingsContext.Provider>
    </>
  );
};

// here was define with export UserSettingsProvider component
export const UserSettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const userSettingsConfigdata: any = useSettingUserToggle();
  return (
    <>
      <SettingToggleContext.Provider value={userSettingsConfigdata}>
        {children}
      </SettingToggleContext.Provider>
    </>
  );
};

// here define and exporting main context provider component of usersettingproviders component
export const UserSettingContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <UserNavMenuProviders>
        <UserAccessoriesProvider>
          <UserSettingsProvider>{children}</UserSettingsProvider>
        </UserAccessoriesProvider>
      </UserNavMenuProviders>
    </>
  );
};
