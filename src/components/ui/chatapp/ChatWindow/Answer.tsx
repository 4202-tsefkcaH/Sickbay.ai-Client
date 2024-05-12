import { FC } from 'react';
import logo from "@/assets/logo-short.svg"
import Image from 'next/image';

interface AnswerProps {
	ans: any;
}

const Answer: FC<AnswerProps> = ({ ans }) => {
	return (
		<div className="w-full my-4 flex flex-col">
			<div className="flex items-center">
				<span className="flex justify-center items-center rounded-xl translate-y-4">
					<Image src={logo} alt="logo"/>
				</span>
				<span className="ml-4 text-white text-md font-semibold translate-y-2">
					Response
				</span>
			</div>
			<div className="bg-[#28303F] w-full px-14 py-5 text-[#FFFFFF] rounded-3xl">
				{/* {ans.split('\n').map((line: any, index: number) => ( */}
					<div  className='my-2'>{ans}</div>
				{/* ))} */}
			</div>
		</div>
	);
};

export default Answer;
