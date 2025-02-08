// here import packages of libraies
import { useEffect } from "react";

// define userCreate functional component
const UserCreateProfile: React.FC = () => {
  // declare useEffect hook
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      {/* start section content for create user profile content */}
      <section className="body-font overflow-hidden">
        <h1>Create Profile</h1>
      </section>
      {/* end section */}
    </>
  );
};

// here export UserCreate functional component
export default UserCreateProfile;
