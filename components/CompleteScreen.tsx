"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "./ui/screen-model";

export function HeroScrollDemo() {
	return (
		<div className='flex flex-col overflow-hidden'>
			<ContainerScroll>
				<Image
					src={`/demo.png`}
					alt='hero'
					height={720}
					width={1472}
					className='mx-auto rounded-2xl object-cover h-full object-left-top'
					draggable={false}
					unoptimized
				/>
			</ContainerScroll>
		</div>
	);
}
