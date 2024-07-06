"use client";

import { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import SparklesText from "./sparkles-text";
import HomeButton from "../HomeButton";
import ShinyButton from "../ui/shiny-button";
import AnimatedGradientText from "../AnimatedGradientText";
import { cn } from "@/lib/utils";

type FadeTextProps = {
	className?: string;
	direction?: "up" | "down" | "left" | "right";
	framerProps?: Variants;
	text: string;
};

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
			<motion.div className={className}>
				<AnimatedGradientText>
					🎉 <hr className='mx-2 h-4 w-[1px] shrink-0 bg-gray-300' />{" "}
					<span
						className={cn(
							`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
						)}
					>
						Introducing Nexus 2.0
					</span>
				</AnimatedGradientText>
				<motion.h1 className='text-white leading-[1.75] text-[54px] max-md:text-4xl max-sm:text-3xl font-semibold text-center'>
					<strong>Meet</strong>, <strong>Collaborate</strong> &
					<strong> Succeed</strong> Meetings
					<span className='text-[32px] max-md:text-3xl max-sm:text-2xl gap-2  font-bold tracking-wide text-zinc-300 justify-center items-center flex'>
						- The <SparklesText text='Nexus' /> Way
					</span>
				</motion.h1>
				<motion.div className='mt-12 mb-4 gap-8 flex flex-wrap justify-center items-center'>
					<HomeButton />
					<ShinyButton />
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
