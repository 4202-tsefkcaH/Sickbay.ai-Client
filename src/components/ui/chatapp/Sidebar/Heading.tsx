'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Heading = () => {
	const [hov, setHov] = useState(false);
	const [home, setHome] = useState(false);
	const router = useRouter();

	return (
		<div className="h-[7vh] my-2 w-full flex justify-between items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				id="left-arrow"
				className="w-12 cursor-pointer"
				onMouseEnter={() => setHov(true)}
				onMouseLeave={() => setHov(false)}
				onClick={() => router.back()}
			>
				<g fill={hov ? '#ffffff' : '#b5b5b5'} className="color000000 svgShape">
					<path
						d="M22 12a10 10 0 1 0-10 10 10 10 0 0 0 10-10zm-11.86 3.69-2.86-3a.49.49 0 0 1-.1-.15.54.54 0 0 1-.1-.16.94.94 0 0 1 0-.76 1 1 0 0 1 .21-.33l3-3a1 1 0 0 1 1.42 1.42L10.41 11H16a1 1 0 0 1 0 2h-5.66l1.25 1.31a1 1 0 0 1-1.45 1.38z"
						fill={hov ? '#ffffff' : '#b5b5b5'}
						className="color000000 svgShape"
					></path>
				</g>
			</svg>
			<h1 className="text-2xl text-center w-2/3 font-bold text-[#ffffff]">
				My Chats
			</h1>
			<svg
				className="w-10 cursor-pointer"
				version="1.1"
				id="Capa_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="-49.54 -49.54 594.48 594.48"
				xmlSpace="preserve"
				onMouseEnter={() => setHome(true)}
				onMouseLeave={() => setHome(false)}
				onClick={() => router.push('/')}
				fill={home ? '#000000' : '#303030'}
			>
				<g id="SVGRepo_bgCarrier" strokeWidth="0">
					<rect
						x="-49.54"
						y="-49.54"
						width="594.48"
						height="594.48"
						rx="297.24"
						fill="#e6e6e6"
						strokeWidth="0"
					></rect>
				</g>
				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
					fill={home ? '#ffffff' : '#b5b5b5'}
				></g>
				<g id="SVGRepo_iconCarrier">
					{' '}
					<g>
						{' '}
						<g>
							{' '}
							<g>
								{' '}
								<path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"></path>{' '}
								<path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"></path>{' '}
							</g>{' '}
						</g>{' '}
					</g>{' '}
				</g>
			</svg>
		</div>
	);
};

export default Heading;
