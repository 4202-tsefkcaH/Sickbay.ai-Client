"use client";

import { useContext } from "react";
import Chat from "./Chat";
import ChatContext from "@/lib/chat-context";

const ChatSequence= () => {
	const {chatBot}:any = useContext(ChatContext);

	return (
		<div
			className="w-full h-[75vh] flex flex-col items-center overflow-y-scroll pb-32 divide-y-2 divide-gray-500"
			style={{ scrollbarWidth: 'none' }}
		>
			{chatBot.map((chating:any, index:number) => <Chat key={index} chat={chating}/> )}
		</div>
	);
};

export default ChatSequence;
