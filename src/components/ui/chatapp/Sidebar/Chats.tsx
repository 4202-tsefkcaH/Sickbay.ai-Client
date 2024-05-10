'use client';

import { useContext } from "react";
import ChatCard from "./ChatCard";
import ChatContext from "@/lib/chat-context";

const Chats = () => {
	const {chatHistory}:any = useContext(ChatContext);
	return (
		<div
			className="w-full mt-4 h-[87%] flex flex-col overflow-y-scroll"
			style={{ scrollbarWidth: 'none' }}
		>
			{chatHistory && chatHistory.map((session:any, index:number) => (
				<ChatCard key={index} session={session}/>
			))}
		</div>
	);
};

export default Chats;
