'use client';

import ChatContext from '@/lib/chat-context';
import { useContext, useState } from 'react';

const Chats = () => {
	const { feature, setFeature }: any = useContext(ChatContext);
	const [hov, setHov]: any = useState(0);

	const selStyle:string = "w-[80%] h-[40%] bg-[#595c53] text-white text-xl font-bold rounded-xl shadow-4xl shadow-red-500 flex justify-center items-center cursor-pointer";
	const notSelStyle:string = "w-[80%] h-[40%] bg-[#454444] text-white text-xl font-bold rounded-xl shadow-xl flex justify-center items-center cursor-pointer";

	return (
		<div className="mt-4 h-[87vh] flex flex-col items-center justify-evenly">
			<div
				className={hov==1||feature==1? selStyle: notSelStyle}
				onClick={() => setFeature(1)}
				onMouseEnter={() => setHov(1)}
				onMouseLeave={() => setHov(0)}
			>
				Chat Bot
			</div>
			<div
				className={hov==2||feature==2? selStyle: notSelStyle}
				onClick={() => setFeature(2)}
				onMouseEnter={() => setHov(2)}
				onMouseLeave={() => setHov(0)}
			>
				Report Results
			</div>
		</div>
	);
};

export default Chats;
