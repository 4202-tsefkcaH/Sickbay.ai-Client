import Chats from "./Chats";
import Heading from "./Heading";
import Searchbar from "./Searchbar";

const Sidebar = () => {
	return (
		<div className="h-full px-2 flex flex-col bg-[#282A2E]">
			<Heading />
            <Searchbar />
            <Chats />
		</div>
	);
};

export default Sidebar;
