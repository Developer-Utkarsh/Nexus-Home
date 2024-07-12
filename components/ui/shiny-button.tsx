// "use client";

import Link from "next/link";

const ShinyButton = ({ text = "shiny-button" }) => {
	return (
		<Link
			href='https://github.com/Developer-Utkarsh/Nexus'
			className='inline-flex w-full justify-center items-center gap-x-2 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto py-4 px-10 rounded-full'
		>
			<i className='fa-brands fa-github'></i>
			Star on Github
		</Link>
	);
};

export default ShinyButton;
