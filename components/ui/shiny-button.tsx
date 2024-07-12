// "use client";

import Link from "next/link";

const ShinyButton = ({ text = "shiny-button" }) => {
	return (
		<Link
			href='https://github.com/Developer-Utkarsh/Nexus'
			className='flex gap-2 cursor-pointer text-white  bg-gradient-to-r hover:from-gray-800 hover:to-black px-6 py-3 rounded-full hover:scale-105 duration-200 justify-center items-center text-lg backdrop-blur-xl border-[0.75px] border-gray-800  z-50 max-sm:text-base max-sm:px-4 max-sm:py-2'
		>
			<i className='fa-brands fa-github'></i>
			Star on Github
		</Link>
	);
};

export default ShinyButton;
