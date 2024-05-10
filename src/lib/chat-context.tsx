'use client';

import axios from 'axios';
import { FC, createContext, useEffect, useState } from 'react';

const ChatContext = createContext({});

interface ProviderProps {
	children: any;
}

export const ChatContextProvider: FC<ProviderProps> = ({ children }) => {
	const [chatHistory, setChatHistory]: any = useState([]);
	const [show, setShow] = useState(false);
	const [activeSession, setActiveSession]: any = useState();
	const user_id = localStorage["id"];
	useEffect(() => {
		axios
			.get(`http://127.0.0.1:8080/api/chatHistory/${user_id}`)
			.then((res) => {
				setChatHistory(res.data);
				setActiveSession(res.data[0]);
				if (res.data.length !== 0) setShow(true);
			});
	}, []);

	// add new chat
	const addNewSession = async () => {
		setShow(false);
		const timenow = new Date();
		const makeDocument = await axios.post(
			'http://127.0.0.1:8080/api/new-session',
			{ user_id, timenow },
		);

		setChatHistory((prevChatHistory: any) => {
			let newChatHistory = [...prevChatHistory];
			const index = newChatHistory.findIndex(
				(sess) => sess.sessionID === activeSession.sessionID,
			);
			newChatHistory[index] = activeSession;
			newChatHistory = [
				...newChatHistory,
				{
					_id: { "$oid": makeDocument.data },
					chatHeading: 'New Chat',
					chatContent:
						'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti rem molestiae ut dolorum suscipit ratione magnam blanditiis. Molestiae velit autem nam eveniet eos dolore.',
					cTime: new Date(),
					chats: [],
				},
			];
			return newChatHistory;
		});

		setActiveSession({
			_id: { "$oid": makeDocument.data },
			chatHeading: 'New Chat',
			chatContent:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti rem molestiae ut dolorum suscipit ratione magnam blanditiis. Molestiae velit autem nam eveniet eos dolore.',
			cTime: timenow,
			chats: [],
		});
	};

	const switchSession = (session: any) => {
		setChatHistory((prevChatHistory: any) => {
			const newChatHistory = [...prevChatHistory];
			const index = newChatHistory.findIndex(
				(sess) => sess['_id'] === activeSession['_id'],
			);
			newChatHistory[index] = activeSession;
			return newChatHistory;
		});
		setActiveSession(session);
		setShow(session.chats.length !== 0);
	};


	
	const updateChat = async (chat: any) => {
		setActiveSession((prevState: any) => {
			const newState = { ...prevState };
			newState.chats = [...newState.chats, chat];
			return newState;
		});
		setShow(true);
	};

	return (
		<ChatContext.Provider
			value={{
				chatHistory,
				activeSession,
				show,
				addNewSession,
				switchSession,
				updateChat,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};

export default ChatContext;
