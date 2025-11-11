import { useUserContactActions } from "../hooks/userContacthooks.ts";
import { ContactActionContext } from "../hooks/contexts/userContactContext.ts";

// define all user contact related context provider component with exporting
export const UserContactActionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const contactActiondata = useUserContactActions();

  return (
    <>
      <ContactActionContext.Provider value={contactActiondata}>
        {children}
      </ContactActionContext.Provider>
    </>
  );
};
