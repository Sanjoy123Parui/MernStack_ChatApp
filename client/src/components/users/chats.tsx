import { useState, useEffect } from "react";
import Headings from "./contents/headings.tsx";
import ContentLists from "./contents/contentLists.tsx";
import MessageHeading from "./contents/messgaeHeading.tsx";

// here define Chats functional components
const Chats: React.FC = () => {
  // here was declare useState hooks for heading
  const [headingTitle] = useState<any>("Chat");

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
          {/* loaded contentHeading component */}
          <Headings headingTitle={headingTitle} />
          {/* start div for loading contentLists  */}
          <div>
            <ContentLists />
          </div>
          {/* end div */}
        </section>
        {/* end first section */}
        {/* start second section of messages content */}
        <section className="col-auto border w-full h-full lg:col-span-5">
          <MessageHeading />
        </section>
        {/* end second section */}
      </div>
      {/* end div */}
    </>
  );
};
// export Chats functional components
export default Chats;
