// "use client";

import Link from "next/link";

const ShinyButton = ({ text = "shiny-button" }) => {
	return (
		<Link
			href='https://github.com/Developer-Utkarsh/Nexus'
			className='flex gap-2 cursor-pointer text-white  bg-gradient-to-r hover:from-gray-800 hover:to-black px-6 py-3 rounded-full hover:scale-105 duration-200 justify-center items-center text-lg backdrop-blur-3xl border border-separate border-zinc-700  z-50'
		>
			<i className='fa-regular hover:text-yellow-500 fa-star'></i>
			Star on Github
		</Link>
	);
};

export default ShinyButton;
