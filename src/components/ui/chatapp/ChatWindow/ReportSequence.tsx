"use client";

import { useContext } from "react";
import Chat from "./Chat";
import ChatContext from "@/lib/chat-context";

const ReportSequence = () => {
	const {reportBot}:any = useContext(ChatContext); 

	return (
		<div
			className="w-full h-[75vh] flex flex-col items-center overflow-y-scroll pb-32 divide-y-2 divide-gray-500"
			style={{ scrollbarWidth: 'none' }}
		>
			{reportBot.map((report:any, index:number) => <Chat key={index} chat={report}/> )}
		</div>
	);
};

export default ReportSequence;
