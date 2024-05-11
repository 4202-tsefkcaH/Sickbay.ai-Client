'use client';

import ChatContext from '@/lib/chat-context';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

const Heading = () => {
	const { addNewSession }: any = useContext(ChatContext);
	const [hov, setHov] = useState(false);
	const router = useRouter();

	return (
		<div className="h-[7vh] my-2 w-full flex justify-between items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				id="left-arrow"
				className="w-12"
			>
				<g
					fill={hov ? '#ffffff' : '#b5b5b5'}
					className="color000000 svgShape cursor-pointer"
					onMouseEnter={() => setHov(true)}
					onMouseLeave={() => setHov(false)}
					onClick={() => router.back()}
				>
					<path
						d="M22 12a10 10 0 1 0-10 10 10 10 0 0 0 10-10zm-11.86 3.69-2.86-3a.49.49 0 0 1-.1-.15.54.54 0 0 1-.1-.16.94.94 0 0 1 0-.76 1 1 0 0 1 .21-.33l3-3a1 1 0 0 1 1.42 1.42L10.41 11H16a1 1 0 0 1 0 2h-5.66l1.25 1.31a1 1 0 0 1-1.45 1.38z"
						fill={hov ? '#ffffff' : '#b5b5b5'}
						className="color000000 svgShape"
					></path>
				</g>
			</svg>
			<h1 className="text-xl font-bold text-[#ffffff]">My Chats</h1>
			<div className="w-20 flex">
				<svg
					width="38"
					height="38"
					viewBox="0 0 38 38"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="mr-2 cursor-pointer"
					onClick={addNewSession}
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M28.0934 0H10.6807C4.611 0 0.806396 4.296 0.806396 10.3776V26.7837C0.806396 32.8653 4.59331 37.1613 10.6807 37.1613H28.0934C34.1808 37.1613 37.9677 32.8653 37.9677 26.7837V10.3776C37.9677 4.296 34.1808 0 28.0934 0Z"
						fill="#23C69E"
					/>
					<path
						d="M19.387 11.7568V25.3709"
						stroke="white"
						strokeWidth="1.74194"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M26.2005 18.563H12.5735"
						stroke="white"
						strokeWidth="1.74194"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<svg
					width="38"
					height="38"
					viewBox="0 0 38 38"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="cursor-pointer"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M27.8676 0H10.4549C4.38517 0 0.580566 4.296 0.580566 10.3776V26.7837C0.580566 32.8653 4.36748 37.1613 10.4549 37.1613H27.8676C33.9549 37.1613 37.7419 32.8653 37.7419 26.7837V10.3776C37.7419 4.296 33.9549 0 27.8676 0Z"
						fill="#1E1F22"
					/>
					<circle cx="19.1613" cy="18.5807" r="1.16129" fill="#D9D9D9" />
					<circle cx="26.1288" cy="18.5807" r="1.16129" fill="#D9D9D9" />
					<circle cx="12.1935" cy="18.5807" r="1.16129" fill="#D9D9D9" />
				</svg>
			</div>
		</div>
	);
};

export default Heading;
