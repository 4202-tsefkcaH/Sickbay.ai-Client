'use client';

import axios from 'axios';
import { FC, createContext, useState } from 'react';

const ChatContext = createContext({});

interface ProviderProps {
	children: any;
}

export const ChatContextProvider: FC<ProviderProps> = ({ children }) => {
	const [chatHistory, setChatHistory]: any = useState([]);
	const [show, setShow] = useState(false);
	const [activeSessionID, setActiveSessionID]:any = useState('');

	// add new chat
	const addNewSession = async () => {
		setShow(false);
		const makeDocument = await axios.post("http://127.0.0.1:8080/api/new-session", {token: "yasharma0701@gmail.com"});
		setChatHistory((prevChatHistory: any) => {
			const newChatHistory = [...prevChatHistory];
            newChatHistory.forEach((session:any) => {
                session.active = false;
            });
			newChatHistory.push({
				sessionID: makeDocument.data,
				chatHeading: 'New Chat',
				chatContent:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti rem molestiae ut dolorum suscipit ratione magnam blanditiis. Molestiae velit autem nam eveniet eos dolore.',
				cTime: new Date(),
				active: true,
				chats: [],
			});
			console.log(newChatHistory);
			return newChatHistory;
		});
		setActiveSessionID(makeDocument.data);
	};

	// switch between chat
	const switchSession = (sessionID: any) => {
		let size = 0;
		setChatHistory((prevChatHistory: any) => {
			const newChatHistory = [...prevChatHistory];
			newChatHistory.forEach((session) => {
				session.active = (sessionID == session.sessionID);
                if(session.active) size = session.chats.length;
			});
            console.log(newChatHistory);
            return newChatHistory;
		});
		setActiveSessionID(sessionID);
		setShow(size !== 0);
	};

	// update chat
	const updateChat = (chat: any, sessionID: any) => {
		setChatHistory((prevChatHistory: any) => {
			const newChatHistory = [...prevChatHistory];
			newChatHistory.forEach((session) => {
				if (sessionID === session.sessionID) {
					session.chats.push(chat);
				}
			});
            return newChatHistory;
		});
		setShow(true);



	};

	return (
		<ChatContext.Provider
			value={{ chatHistory, activeSessionID, show, addNewSession, switchSession, updateChat }}
		>
			{children}
		</ChatContext.Provider>
	);
};

export default ChatContext;
