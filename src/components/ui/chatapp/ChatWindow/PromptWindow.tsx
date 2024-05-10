'use client';

import { useContext, useState } from 'react';
import ChatSequence from './ChatSequence';
import InputField from './InputField';
import NewChatWindow from './NewChatWindow';
import ChatContext from '@/lib/chat-context';

const PromptWindow = () => {
	const {show, updateChat, chatHistory}:any = useContext(ChatContext);
	const [chats, setChats]:any = useState([]);

	const addChatHandler = (chat:any) => {
		chatHistory.forEach((session:any) => {
			if(session.active) {
				setChats((prevChats:any) => {
					const newChats = [...prevChats];
					newChats.push(chat);
					return newChats;
				});
				updateChat(chat, session.sessionID);
			}
		})
	}

	return (
		<div className="bg-[#3F424A] w-full h-[90vh] rounded-t-lg relative">
			{!show && <NewChatWindow />}
			{show && <ChatSequence chats={chats} />}
			<InputField addChat={addChatHandler} />
		</div>
	);
};

export default PromptWindow;
