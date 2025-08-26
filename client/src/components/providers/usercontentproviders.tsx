import {
  TogglePasswordContext,
  ImageProfileCropContext,
} from "../hooks/contexts/userContentContext.ts";
import { useTogglePassword, useProfileAvtar } from "../hooks/contentshooks.ts";

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
