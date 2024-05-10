'use client';

import ChatContext from '@/lib/chat-context';
import { FC, useContext, useState } from 'react';

interface ChatCardProp {
	session: any;
}

const ChatCard: FC<ChatCardProp> = ({ session }) => {
	const { switchSession, activeSession }: any = useContext(ChatContext);
	const [hov, setHov] = useState(false);

	return (
		<div
			className={`${
				(session['_id']['$oid']===activeSession['_id']['$oid']) || hov ? 'bg-[#1E1F22]' : ' '
			} h-28 w-full my-2 px-2 rounded-lg flex cursor-pointer`}
			onMouseEnter={() => setHov(true)}
			onMouseLeave={() => setHov(false)}
			onClick={() => switchSession(session)}
		>
			<div className="h-full mr-2 py-3">
				<svg
					width="15"
					height="14"
					viewBox="0 0 15 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
				>
					<g style={{ mixBlendMode: 'lighten' }}>
						<rect
							x="0.77417"
							y="0.0327148"
							width="13.9355"
							height="13.9355"
							fill="url(#pattern0_2210_2315)"
						/>
						<rect
							x="0.77417"
							y="0.0327148"
							width="13.9355"
							height="13.9355"
							fill="#10A37F"
							style={{ mixBlendMode: 'multiply' }}
						/>
					</g>
					<defs>
						<pattern
							id="pattern0_2210_2315"
							patternContentUnits="objectBoundingBox"
							width="1"
							height="1"
						>
							<use
								xlinkHref="#image0_2210_2315"
								transform="translate(-0.333333 -0.176471) scale(0.0294118)"
							/>
						</pattern>
						<image
							id="image0_2210_2315"
							width="51"
							height="46"
							xlinkHref="data:image/png;base64,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"
						/>
					</defs>
				</svg>
			</div>
			<div className="flex flex-col">
				<div className="text-[#EEEEEE] pt-2 pb-1 font-bold text-md">
					{session.chatHeading}
				</div>
				<p className="py-1 pl-0.5 text-[#ABABAB] text-sm text-ellipsis overflow-hidden line-clamp-3">
					{session.chatContent}
				</p>
			</div>
		</div>
	);
};

export default ChatCard;
