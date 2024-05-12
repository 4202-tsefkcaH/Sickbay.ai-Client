'use client';

import { useContext } from "react";
import ChatContext from "@/lib/chat-context";
import NewChatWindow from "./NewChatWindow";
import PromptWindow from "./PromptWindow";
import FileUploader from "../../FileUploader";
import QueryWindow from "./QueryWindow";

const heading = ['Use a feature', 'Chat Bot', 'Report Results'];

const ChatWindow = () => {
	const { feature, uploaded }:any = useContext(ChatContext);
	const comp = [<NewChatWindow key={0}/>, <PromptWindow key={1} />, ( Object.keys(uploaded).length===0 ?  <FileUploader key={2} /> : <QueryWindow key={2}/>)] 

	return (
		<div className="h-[100vh] bg-[#282A2E]">
            <h1 className="h-[10vh] w-full text-white text-3xl font-bold flex justify-center items-center">{heading[feature]}</h1>
			<div className="bg-[#3F424A] w-full h-[90vh] rounded-t-lg relative">
				{comp[feature]}
			</div>
		</div>
	);
};

export default ChatWindow;
