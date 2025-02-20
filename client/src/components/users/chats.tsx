import { useState, useEffect } from "react";
import Headings from "./contents/headings.tsx";
import ContentLists from "./contents/contentLists.tsx";
import MessageHeading from "./contents/messgaeHeading.tsx";
import Conversations from "./contents/conversations.tsx";

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
      <div className="grid gap-0 grid-cols-1 lg:grid-cols-8">
        {/* start first section of chatList content */}
        <section className="col-auto w-full bg-slate-50 h-[664px] border lg:col-span-3">
          <div>
            <Headings headingTitle={headingTitle} />
          </div>
          <div>
            <ContentLists />
          </div>
        </section>
        {/* end first section */}
        {/* start second section of messages content */}
        <section className="col-auto border w-full bg-slate-50 h-[664px] lg:col-span-5">
          <div>
            <MessageHeading />
          </div>
          <div className="mt-[33rem]">
            <Conversations />
          </div>
        </section>
        {/* end second section */}
      </div>
      {/* end div */}
    </>
  );
};
// export Chats functional components
export default Chats;
