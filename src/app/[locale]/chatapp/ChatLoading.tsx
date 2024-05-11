

const ChatLoading = () => {
    return (
        <div className="flex h-[100vh] w-[100vw] bg-[#282A2E]">
            <div className="h-full w-1/5 px-2 flex flex-col bg-[#282A2E]"></div>
            <div className="h-[100vh] flex-grow bg-[#282A2E]">
                <h1 className="h-[10vh] pl-10 w-full text-white text-3xl font-bold flex items-center">Loading...</h1>
                <div className="bg-[#3F424A] w-full h-[90vh] rounded-t-lg relative">
		        </div>
		    </div>
        </div>
    )
}

export default ChatLoading;