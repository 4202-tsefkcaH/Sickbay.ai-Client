'use client';

import axios from 'axios';
import { FC, createContext, useEffect, useState } from 'react';

const ChatContext = createContext({});

interface ProviderProps {
	children: any;
}

export const ChatContextProvider: FC<ProviderProps> = ({ children }) => {
	const [feature, setFeature] = useState<number>(0);
	const [show, setShow] = useState<boolean>(false);
	const [uploaded, setUploaded] = useState<any>({});
	const [chatBot, setChatBot]:any = useState([]);
	const [reportBot, setReportBot]:any = useState([]);

	return (
		<ChatContext.Provider
			value={{
				feature,
				setFeature,
				show,
				setShow,
				uploaded,
				setUploaded,
				chatBot,
				setChatBot,
				reportBot,
				setReportBot
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};

export default ChatContext;
