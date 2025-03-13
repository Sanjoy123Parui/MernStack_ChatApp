// here define UserLanding component
const UserLanding: React.FC = () => {
  const headingTitle: string = `hiChat is a Chat Web Application`;
  const desc: string = `Here is you can messages on your friends and join the group of communities`;
  return (
    <>
      {/* start div for brand and logo of landing page content */}
      <div className="p-12 w-full lg:w-1/2 hidden lg:flex flex-col items-start">
        <h2 className="text-2xl title-font font-bold text-gray-900 my-4">
          {headingTitle}
        </h2>
        <p className="leading-relaxed font-medium text-lg text-gray-700 mb-8">
          {desc}
        </p>
      </div>
      {/* end div */}
    </>
  );
};

export default UserLanding;
