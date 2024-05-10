const Searchbar = () => {
	return (
		<div className="w-full h-[6%] flex bg-[#373940] rounded-lg items-center">
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
                className="mx-2"
			>
				<path
					d="M6.54839 12.6129C9.75521 12.6129 12.3548 10.0133 12.3548 6.80645C12.3548 3.59964 9.75521 1 6.54839 1C3.34158 1 0.741943 3.59964 0.741943 6.80645C0.741943 10.0133 3.34158 12.6129 6.54839 12.6129Z"
					stroke="#575B65"
					strokeWidth="1.39355"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14.6774 14.9355L10.6516 10.9097"
					stroke="#575B65"
					strokeWidth="1.39355"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
            <input type="text" className="bg-transparent focus:outline-none flex-grow text-[#efefef]" placeholder="Search.."/>
		</div>
	);
};

export default Searchbar;
