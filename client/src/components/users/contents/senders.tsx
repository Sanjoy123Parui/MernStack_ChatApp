// here define sender messages component
const SenderMsg: React.FC = () => {
    return (
        <>
            {/* start div  for message content */}
            <div className="flex justify-end items-start gap-2.5 mb-4">
                <div className="flex flex-col w-auto max-w-[320px] leading-1.5 p-4 border-gray-200 bg-indigo-400 text-white 
                rounded-e-xl rounded-es-xl shadow-md ">
                    <p className="text-sm md:text-base font-normal py-2.5">Hello</p>

                    <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold">11:25 am</span>
                    </div>
                </div>
            </div>
            {/* end div */}
        </>
    );
}



// here was define sender component
const Senders: React.FC = () => {
    return (
        <>
            {/* this div start for Sender */}
            <div className="p-4 bg-gray-100 h-full overflow-y-auto">
                <SenderMsg />
            </div>
            {/* end div */}
        </>
    );
}

// export sender component
export default Senders;
