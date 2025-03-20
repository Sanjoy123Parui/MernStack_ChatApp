import Headings from "./contents/headings.tsx";
import ContentLists from "./contents/contentLists.tsx";
import EmptyContent from "./contents/emptyContent.tsx";

// define Stories functional component
const Stories: React.FC = () => {
  // here was declare heading variables of Stories
  const headingTitle: string = "Stories";
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
          <div className="bg-slate-50">
            <EmptyContent />
          </div>
        </section>
      </div>
      {/* end div */}
    </>
  );
};

// export Stories component
export default Stories;
