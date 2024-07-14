"use client";

import { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import SparklesText from "./sparkles-text";
import HomeButton from "../HomeButton";
import ShinyButton from "../ui/shiny-button";
import AnimatedGradientText from "../AnimatedGradientText";
import { cn } from "@/lib/utils";
import { HeroScrollDemo } from "../CompleteScreen";

type FadeTextProps = {
	className?: string;
	direction?: "up" | "down" | "left" | "right";
	framerProps?: Variants;
	text: string;
};

// ... existing code ...

export function FadeText({
	direction = "up",
	className,
	framerProps = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { type: "spring" } },
	},
	text,
}: FadeTextProps) {
	const directionOffset = useMemo(() => {
		const map = { up: 10, down: -10, left: -10, right: 10 };
		return map[direction];
	}, [direction]);

	const axis = direction === "up" || direction === "down" ? "y" : "x";

	const FADE_ANIMATION_VARIANTS = useMemo(() => {
		const { hidden, show, ...rest } = framerProps as {
			[name: string]: { [name: string]: number; opacity: number };
		};

		return {
			...rest,
			hidden: {
				...(hidden ?? {}),
				opacity: hidden?.opacity ?? 0,
				[axis]: hidden?.[axis] ?? directionOffset,
			},
			show: {
				...(show ?? {}),
				opacity: show?.opacity ?? 1,
				[axis]: show?.[axis] ?? 0,
			},
		};
	}, [directionOffset, axis, framerProps]);

	return (
		<motion.div
			initial='hidden'
			animate='show'
			viewport={{ once: true }}
			variants={FADE_ANIMATION_VARIANTS}
		>
			<motion.div className='flex px-4 flex-col max-sm:pb-8'>
				<div>
					<AnimatedGradientText>
						🎉{" "}
						<hr className='mx-2 h-4 w-[1px] shrink-0 bg-gray-300' />{" "}
						<span
							className={cn(
								`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
							)}
						>
							Introducing Nexus 2.0
						</span>
					</AnimatedGradientText>
				</div>
				<motion.h1
					className='text-white leading-[1.5] max-sm:leading-[1.51] text-[58px] max-md:text-5xl max-sm:text-4xl font-semibold text-center mt-4'
					variants={{
						hidden: { opacity: 0, y: 10 },
						show: {
							opacity: 1,
							y: 0,
							transition: { duration: 1 },
						},
					}}
				>
					<strong>Meet</strong>, <strong>Collaborate</strong> &{" "}
					<strong>Succeed</strong> Meetings
					<motion.span
						className='text-[40px] max-md:text-4xl max-sm:text-3xl gap-2 font-bold tracking-wide text-zinc-300 justify-center items-center flex max-sm:mt-2'
						variants={{
							hidden: { opacity: 0, y: 10 },
							show: {
								opacity: 1,
								y: 0,
								transition: { delay: 1, duration: 0.75 },
							},
						}}
					>
						- The <SparklesText text='Nexus' /> Way
					</motion.span>
				</motion.h1>
				<motion.div
					className='mt-12 mb-4 gap-8 max-sm:gap-4 flex flex-wrap justify-center z-50 items-center'
					variants={{
						hidden: { opacity: 0, y: 10 },
						show: {
							opacity: 1,
							y: 0,
							transition: { delay: 1.5, duration: 1 },
						},
					}}
				>
					<HomeButton />
					<ShinyButton />
				</motion.div>
			</motion.div>
			<motion.div
				className='bg-transparent   absolute text-left  inset-x-0 w-full z-50 fade-up top-[68%] max-md:top-[90%] '
				initial='hidden'
				animate='visible'
				whileInView='inView'
				variants={{
					hidden: { opacity: 0, y: 10 },
					visible: {
						opacity: 1,
						y: 0,
						transition: {
							delay: 2,
							duration: 1,
						},
					},
				}}
			>
				<motion.div
					animate={{
						y: [0, -10, 0],
					}}
					transition={{
						y: {
							repeat: Infinity,
							repeatType: "reverse",
							duration: 1,
						},
					}}
				>
					<HeroScrollDemo />
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
