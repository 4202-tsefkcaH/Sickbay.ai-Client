import Chats from "./Chats";
import Heading from "./Heading";

const Sidebar = () => {
	return (
		<div className="h-full px-2 flex flex-col bg-[#282A2E]">
			<Heading />
            <Chats />
		</div>
	);
};

export default Sidebar;
