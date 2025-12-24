import { ContactActionContext } from "../../hooks/contexts/userContactContext.ts";
import { useUserContactActions } from "../../hooks/userContacthooks.ts";

// declare and exporting contact related context provider component
export const UserContactActionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const contactActiondata: any = useUserContactActions();

  return (
    <>
      <ContactActionContext.Provider value={contactActiondata}>
        {children}
      </ContactActionContext.Provider>
    </>
  );
};
