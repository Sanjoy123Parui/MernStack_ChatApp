import {
  useToggleAccountSettings,
  useUserSettingsConfig,
} from "../hooks/settinghooks.ts";
import {
  SettingsContext,
  SettingsConfigContext,
} from "../hooks/contexts/userSettingContexts.ts";

// here was define with export UserAccessoriesProvider component
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
  const userSettingsConfigdata: any = useUserSettingsConfig();
  return (
    <>
      <SettingsConfigContext.Provider value={userSettingsConfigdata}>
        {children}
      </SettingsConfigContext.Provider>
    </>
  );
};
