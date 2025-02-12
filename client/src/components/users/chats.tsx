import { useEffect } from "react";

// here define Chats functional components
const Chats: React.FC = () => {
  // declare useEffect hook
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      {/* start div grid-layout */}
      <div className="grid gap-0 grid-cols-1 w-full h-full lg:grid-cols-8">
        <div className="col-auto border lg:col-span-3">
          <h1 className="text-black font-bold">01</h1>
        </div>
        <div className="col-auto border  lg:col-span-5">
          <h1 className="text-black font-bold">02</h1>
        </div>
      </div>
      {/* end div */}
    </>
  );
};
// export Chats functional components
export default Chats;
