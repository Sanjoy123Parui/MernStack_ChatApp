import Headings from "./contents/headings.tsx";
import ContentLists from "./contents/contentLists.tsx";
import MessageHeading from "./contents/messgaeHeading.tsx";
import Messages from "./contents/messages.tsx";
import Conversations from "./contents/conversations.tsx";
// import EmptyContent from "./contents/emptyContent.tsx";

// here define Chats functional components
const Chats: React.FC = () => {
  // here was declare heading variables of Chats
  const headingTitle: string = "Chats";

  return (
    <>
      {/* start div grid-layout */}
      <div className="grid gap-0 grid-cols-1 lg:grid-cols-8">
        <section className="col-span-1 w-full h-[668px] border lg:col-span-3">
          <div>
            <Headings headingTitle={headingTitle} />
          </div>
          <div className="bg-slate-50">
            <ContentLists />
          </div>
        </section>


        <section className="col-span-1 border w-full h-[668px] lg:col-span-5">
          <div>
            <MessageHeading />
          </div>
          <div className="w-full h-[530px]">
            <Messages />
          </div>
          <div>
            <Conversations />
          </div>


          {/* <div className="bg-slate-50">
            <EmptyContent />
          </div> */}
        </section>
      </div>
      {/* end div */}
    </>
  );
};
// export Chats functional components
export default Chats;
