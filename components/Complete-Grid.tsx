import { cn } from "@/lib/utils";
import {
	IconCalendar,
	IconUserCircle,
	IconUsers,
	IconVideo,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

export function BentoImage({ path }: { path: string }) {
	return (
		<Image
			src={path}
			alt='Bento Image'
			width={120}
			height={60}
			className='rounded-lg w-[100%] h-[70%] '
			unoptimized={true}
		/>
	);
}

export function BentoGridSecondDemo() {
	return (
		<BentoGrid className='max-w-4xl mx-auto md:auto-rows-[20rem]'>
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={item.className}
					icon={item.icon}
				/>
			))}
		</BentoGrid>
	);
}
const Skeleton = () => (
	<div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black'></div>
);
const items = [
	{
		title: "Public Meetings",
		description:
			"Host and join open meetings with participants from around the world.",
		header: <BentoImage path='/public-meetings.jpg' />,
		className: "md:col-span-2",
		icon: <IconUsers className='h-4 w-4 text-neutral-500' />,
	},
	{
		title: "Meeting Recordings",
		description:
			"Record and securely store your meetings for future reference.",
		header: <BentoImage path='/recordings-bento.jpg' />,
		className: "md:col-span-1",
		icon: <IconVideo className='h-4 w-4 text-neutral-500' />,
	},
	{
		title: "Book Meetings",
		description:
			"Schedule and organize meetings with an intuitive bookmarking system.",
		header: <BentoImage path='/book.jpg' />,

		className: "md:col-span-1",
		icon: <IconCalendar className='h-4 w-4 text-neutral-500' />,
	},
	{
		title: "User Profiles",
		description:
			"Customize your profile and manage your meeting preferences.",
		header: <BentoImage path='/profiles.jpg' />,
		className: "md:col-span-2",
		icon: <IconUserCircle className='h-4 w-4 text-neutral-500' />,
	},
];
