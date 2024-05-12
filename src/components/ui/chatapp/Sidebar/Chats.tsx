'use client';

import ChatContext from "@/lib/chat-context";
import { useContext } from "react";

const Chats = () => {
	const {setFeature}:any = useContext(ChatContext);

	return (
		<div
			className="mt-4 h-[87vh] flex flex-col items-center justify-evenly"
		>
			<div className="w-[80%] h-[40%] bg-[#595c53] text-white text-xl font-bold rounded-xl shadow-xl flex justify-center items-center cursor-pointer" onClick={() => setFeature(1)}>Chat Bot</div>
			<div className="w-[80%] h-[40%] bg-[#454444] text-white text-xl font-bold rounded-xl shadow-xl flex justify-center items-center cursor-pointer" onClick={() => setFeature(2)}>Report Results</div>
		</div>
	);
};

export default Chats;
