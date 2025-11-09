import {
  useToggleAccountSettings,
  useSettingUserToggle,
} from "../hooks/settinghooks.ts";
import {
  SettingsContext,
  SettingToggleContext,
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
  const userSettingsConfigdata: any = useSettingUserToggle();
  return (
    <>
      <SettingToggleContext.Provider value={userSettingsConfigdata}>
        {children}
      </SettingToggleContext.Provider>
    </>
  );
};
