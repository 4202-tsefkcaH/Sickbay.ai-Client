'use client';

import { FC } from "react";
import Chat from "./Chat";

interface ChatSequenceProps {
	chats: any
}

const ChatSequence:FC<ChatSequenceProps> = ({chats}) => {
	
	return (
		<div
			className="w-full h-[75vh] flex flex-col items-center overflow-y-scroll pb-32 divide-y-2 divide-gray-500"
			style={{ scrollbarWidth: 'none' }}
		>
			{chats && chats.map((chat:any, index:number) => <Chat key={index} chat={chat}/>)}
		</div>
	);
};

export default ChatSequence;
