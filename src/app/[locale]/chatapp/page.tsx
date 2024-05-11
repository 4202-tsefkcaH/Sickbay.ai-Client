import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import ChatWindow from '@/components/ui/chatapp/ChatWindow/ChatWindow';
import Sidebar from '@/components/ui/chatapp/Sidebar/Sidebar';
import { ChatContextProvider } from '@/lib/chat-context';
import { Suspense } from 'react';
import ChatLoading from './ChatLoading';

const ChatApp = () => {
	return (
		<Suspense fallback={<ChatLoading />}>
			<ChatContextProvider>
				<div className="flex h-[100vh] w-[100vw] bg-[#282A2E]">
					<ResizablePanelGroup direction="horizontal">
						<ResizablePanel defaultSize={20} minSize={15}>
							<Sidebar />
						</ResizablePanel>
						<ResizableHandle
							withHandle
							className="text-transparent bg-transparent"
						/>
						<ResizablePanel defaultSize={80} minSize={70}>
							<ChatWindow />
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</ChatContextProvider>
		</Suspense>
	);
};

/* 
	ChatHistory: [
		{
			ChatHeading,
			ChatContent,
			ChatTime,
			Active : True/False,
			chats: [ {
				Question,
				Answer,
				pTime,
			} ]
		}
	]
	show: true/false
*/

export default ChatApp;
