// define MessageHeading component
const MessageHeading: React.FC = () => {
  return (
    <>
      {/* start div for message heading */}
      <div className="bg-purple-600 py-3 lg:py-4">
        <div className="mb-0 px-8">
          <h1 className="text-white text-lg lg:text-2xl font-bold">Message</h1>
        </div>
      </div>
      {/* end div */}
    </>
  );
};
// export MessageHeading component
export default MessageHeading;
