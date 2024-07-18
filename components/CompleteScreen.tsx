"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "./ui/screen-model";

export function HeroScrollDemo() {
	return (
		<div className='flex flex-col overflow-hidden'>
			<ContainerScroll>
				<img
					src={`/demo.png`}
					alt='hero'
					className='mx-auto rounded-2xl object-fill h-full object-left-top w-full'
					draggable={false}
				/>
			</ContainerScroll>
		</div>
	);
}
