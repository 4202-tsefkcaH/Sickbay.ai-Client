import PromptWindow from "./PromptWindow";

const ChatWindow = () => {
	return (
		<div className="h-[100vh] bg-[#282A2E]">
            <h1 className="h-[10vh] w-full pl-10 text-white text-3xl font-bold flex items-center">Cosmic Evolution</h1>
            <PromptWindow />
		</div>
	);
};

export default ChatWindow;
