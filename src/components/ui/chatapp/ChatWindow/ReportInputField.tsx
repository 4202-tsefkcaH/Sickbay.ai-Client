'use client';

import ChatContext from '@/lib/chat-context';
import axios from 'axios';
import { useContext, useState } from 'react';
import PromptLoad from '@/assets/chatload.gif';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const InputField = () => {
	const [prompt, setPrompt] = useState('');
	const [loading, setLoading]:any = useState(false);
	const { setReportBot, uploaded }:any = useContext(ChatContext);
	const router = useRouter();

	const handlePromptChange = (event: any) => {
		const { value } = event.target;
		setPrompt((prevPrompt: any) => {
			return value;
		});
	};
	
	const user_id = localStorage.getItem('id');
	const makePromptRequest = async () => {
		setLoading(true);
		if(!user_id) {
			router.push('/login');
			return;
		};
		const response = await axios.post(
			'http://127.0.0.1:8080/api/llm',
			{ prompt, user_id, text: uploaded },
		);
		setReportBot((prevChats:any) => {
			const newChats = [...prevChats, {
				question: prompt,
				answer: response.data,
			}];
			return newChats;
		});
		setLoading(false);
		setPrompt('');
	};
	
	return (
		<div className="w-full h-[10vh] flex justify-center">
			<form
				className="bg-[#4B4F5B] w-[81%] rounded-2xl flex items-center"
				onSubmit={(e) => {
					e.preventDefault();
					makePromptRequest();
				}}
			>
				{ !loading && <svg
					width="38"
					height="38"
					viewBox="0 0 38 38"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="mx-4"
				>
					<rect
						x="0.193848"
						y="0.258301"
						width="37.1613"
						height="37.1613"
						rx="6.96774"
						fill="#404450"
					/>
					<path
						d="M13.4664 11.1453C11.5017 11.5379 10.0217 13.0179 9.62909 14.9826C9.23643 13.0179 7.75651 11.5379 5.79175 11.1453C7.75651 10.7526 9.23643 9.2727 9.62909 7.30794C10.0217 9.2727 11.5017 10.7526 13.4664 11.1453ZM23.2793 10.86C21.61 9.74883 21.1622 9.74883 19.495 10.86C20.6062 9.19068 20.6062 8.74286 19.495 7.07568C21.1643 8.18689 21.6122 8.18689 23.2793 7.07568C22.1681 8.74286 22.1681 9.19286 23.2793 10.86ZM14.5697 22.4729C12.9003 21.3617 12.4525 21.3617 10.7853 22.4729C11.8965 20.8036 11.8965 20.3558 10.7853 18.6886C12.4547 19.7998 12.9025 19.7998 14.5697 18.6886C13.4584 20.3558 13.4584 20.8058 14.5697 22.4729ZM26.9911 17.6202C25.5076 16.6309 25.104 16.6309 23.6226 17.6202C24.6119 16.1367 24.6119 15.7331 23.6226 14.2517C25.1062 15.241 25.5097 15.241 26.9911 14.2517C26.0018 15.7353 26.0018 16.1359 26.9911 17.6202Z"
						fill="#EEEEEE"
					/>
					<path
						d="M15.9879 15.5394L15.4747 16.0527C14.9078 16.6195 14.9078 17.5387 15.4747 18.1055L26.7656 29.3964C27.3325 29.9633 28.2516 29.9633 28.8185 29.3964L29.3317 28.8832C29.8986 28.3163 29.8986 27.3972 29.3317 26.8303L18.0408 15.5394C17.4739 14.9725 16.5548 14.9725 15.9879 15.5394Z"
						fill="#EEEEEE"
					/>
					<path
						d="M15.4744 16.0527L15.9877 15.5394C16.2599 15.2672 16.6291 15.1143 17.0141 15.1143C17.3991 15.1143 17.7683 15.2672 18.0406 15.5394L19.5802 17.0791L17.0141 19.6452L15.4744 18.1055C15.2022 17.8333 15.0493 17.4641 15.0493 17.0791C15.0493 16.6941 15.2022 16.3249 15.4744 16.0527Z"
						fill="#EEEEEE"
					/>
				</svg> }
				{ loading && <Image src={PromptLoad} alt='loading' className='mx-4 w-10 rounded-full'/>}
				<input
					type="text"
					className="bg-transparent outline-none flex-grow text-[#EEEEEE]"
					placeholder="Ask questions, or type ‘/’ for commands"
					onChange={handlePromptChange}
					value={prompt}
				/>
				<svg
					width="35"
					height="38"
					viewBox="0 0 35 38"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="mx-4 cursor-pointer"
					onClick={makePromptRequest}
				>
					<path
						d="M27.0069 19.4382L12.3288 19.4382M11.1058 10.84L26.4991 18.3034C27.4471 18.763 27.4471 20.1134 26.4991 20.573L11.1058 28.0364C10.0513 28.5477 8.93041 27.4698 9.40015 26.3961L12.2231 19.9437C12.3641 19.6214 12.3641 19.255 12.2231 18.9327L9.40015 12.4803C8.93041 11.4066 10.0513 10.3287 11.1058 10.84Z"
						stroke="#ABABAB"
						strokeWidth="1.16129"
						strokeLinecap="round"
					/>
				</svg>
			</form>
		</div>
	);
};

export default InputField;
