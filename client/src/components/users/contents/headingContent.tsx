import SearchContent from './searchContent.tsx';


// here define headingContent functional component
const HeadingContent: React.FC = () => {


    return (
        <>
            {/* start div for chatList heading */}
            <div className="bg-purple-600 py-2 md:py-3 lg:py-4">
                <div className="mb-0 px-8">
                    <h1 className="text-white text-sm md:text-lg lg:text-2xl font-bold">
                        Chats
                    </h1>
                </div>
            </div>
            {/* end div */}

            {/* start div for search user or group List */}
            <div className="p-4">
                <SearchContent />
            </div>
            {/* end div */}

        </>
    )
}

// export HeadingContent functional component
export default HeadingContent;
