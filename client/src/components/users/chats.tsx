import { useEffect } from "react";
import Headings from "./contents/headings.tsx";

// here define Chats functional components
const Chats: React.FC = () => {
  // declare useEffect hook
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      {/* start div grid-layout */}
      <div className="grid gap-0 grid-cols-1 bg-gray-50 lg:grid-cols-8">
        {/* start first section of chatList content */}
        <section className="col-auto w-full h-full border lg:col-span-3">
          <Headings />
        </section>
        {/* end first section */}
        {/* start second section of messages content */}
        <section className="col-auto border w-full h-full lg:col-span-5">
          <h1>Messages</h1>
        </section>
        {/* end second section */}
      </div>
      {/* end div */}
    </>
  );
};
// export Chats functional components
export default Chats;
