'use client';

import { useContext, useEffect, useState } from 'react';
import ChatSequence from './ChatSequence';
import InputField from './InputField';
import NewChatWindow from './NewChatWindow';
import ChatContext from '@/lib/chat-context';

const PromptWindow = () => {
	const { show }:any = useContext(ChatContext);

	return (
		<div className="bg-[#3F424A] w-full h-[90vh] rounded-t-lg relative">
			{!show && <NewChatWindow />}
			{show && <ChatSequence />}
			<InputField />
		</div>
	);
};

export default PromptWindow;
