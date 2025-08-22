// here define UserLanding component
const UserLanding: React.FC = () => {
  const headingTitle: string = `hiChat is a Chat Web Application`;
  const desc: string = `Here is you can messages on your friends and join the group of communities`;
  return (
    <>
      {/* Enhanced landing card for brand and logo */}
      <div className="w-full flex flex-col justify-center items-center px-4 py-8 md:px-8 md:py-12">
        <h2 className="text-3xl md:text-4xl text-center font-extrabold text-indigo-700 mb-6 tracking-tight drop-shadow-sm">
          {headingTitle}
        </h2>
        <p className="leading-relaxed font-medium text-lg md:text-xl text-gray-700 mb-8 text-center">
          {desc}
        </p>
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-indigo-400 via-blue-300 to-indigo-200 mb-2"></div>
      </div>
    </>
  );
};

export default UserLanding;
