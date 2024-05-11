import { useContext } from "react";
import Chat from "./Chat";
import ChatContext from "@/lib/chat-context";

const ChatSequence = () => {
	const { activeSession }:any = useContext(ChatContext);

	return (
		<div
			className="w-full h-[75vh] flex flex-col items-center overflow-y-scroll pb-32 divide-y-2 divide-gray-500"
			style={{ scrollbarWidth: 'none' }}
		>
			{activeSession.chats.map((chat:any, index:number) => <Chat key={index} chat={chat}/>)}
		</div>
	);
};

export default ChatSequence;
