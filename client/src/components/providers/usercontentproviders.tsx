import {
  ImageProfileCropContext,
  UserContentToggleContext,
} from "../../hooks/contexts/userContentContext.ts";
import {
  useProfileAvtar,
  useUserContentHeadingOption,
} from "../../hooks/contentshooks.ts";

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

// here define and exporting main context provider component of usercontentproviders component
export const UserContentProviderContext: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <AvatarProvider>
        <UserToggleContentOptionProvider>
          {children}
        </UserToggleContentOptionProvider>
      </AvatarProvider>
    </>
  );
};
