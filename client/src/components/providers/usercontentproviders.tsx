import {
  TogglePasswordContext,
  ImageProfileCropContext,
  UserContentToggleContext,
} from "../hooks/contexts/userContentContext.ts";
import {
  useTogglePassword,
  useProfileAvtar,
  useUserContentHeadingOption,
} from "../hooks/contentshooks.ts";

// here declare with export  for all content context Provider
export const TogglePasswordProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  let togglePassworddata: any = useTogglePassword(null);

  return (
    <>
      <TogglePasswordContext value={togglePassworddata}>
        {children}
      </TogglePasswordContext>
    </>
  );
};

export const AvatarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  let avatarData: any = useProfileAvtar();

  return (
    <>
      <ImageProfileCropContext value={avatarData}>
        {children}
      </ImageProfileCropContext>
    </>
  );
};

export const UserToggleContentOptionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const contentOptiondata: any = useUserContentHeadingOption();

  return (
    <>
      <UserContentToggleContext.Provider value={contentOptiondata}>
        {children}
      </UserContentToggleContext.Provider>
    </>
  );
};
