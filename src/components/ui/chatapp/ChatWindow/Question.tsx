import { FC } from 'react';

interface QuestionProps {
	ques: string;
}

const Question: FC<QuestionProps> = ({ ques }) => {
	return (
		<div className="w-full my-4 flex flex-col">
			<div className="flex items-center">
				<span className="w-11 h-11 bg-[#9f9f9f] flex justify-center items-center rounded-xl translate-y-4">
					<svg
						height="30px"
						width="30px"
						version="1.1"
						id="Capa_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 60.671 60.671"
						xmlSpace="preserve"
						fill="#000000"
					>
						<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
						<g
							id="SVGRepo_tracerCarrier"
							strokeLinecap="round"
							strokeLinejoin="round"
						></g>
						<g id="SVGRepo_iconCarrier">
							<g>
								<g>
									<ellipse
										style={{ fill: '#010002' }}
										cx="30.336"
										cy="12.097"
										rx="11.997"
										ry="12.097"
									></ellipse>
									<path
										style={{ fill: '#010002' }}
										d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9 C48.354,35.818,42.661,30.079,35.64,30.079z"
									></path>
								</g>
							</g>
						</g>
					</svg>
				</span>
				<span className="ml-3 text-white text-md font-semibold translate-y-2">
					You
				</span>
			</div>
			<div className="bg-[#4B4F5B] w-full px-14 py-5 text-[#FFFFFF] rounded-3xl">
				{ques.split('\n').map((line: any, index: number) => (
					<div key={index} className="my-2">
						{line}
					</div>
				))}
			</div>
		</div>
	);
};

export default Question;
