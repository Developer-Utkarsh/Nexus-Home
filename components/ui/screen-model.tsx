"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const containerRef = useRef<any>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
	});
	const [isMobile, setIsMobile] = React.useState(false);

	React.useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	const scaleDimensions = () => {
		return isMobile ? [0.7, 0.9] : [0.85, 0.9];
	};

	const rotate = useTransform(scrollYProgress, [0, 1], [15, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
	const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

	return (
		<div
			className='h-[42rem] flex items-center justify-center relative  p-0 md:p-0 max-md:-top-48 '
			ref={containerRef}
		>
			<div
				className='w-full relative'
				style={{
					perspective: "900px",
				}}
			>
				<Card rotate={rotate} translate={translate} scale={scale}>
					{children}
				</Card>
			</div>
		</div>
	);
};

export const Card = ({
	rotate,
	scale,
	children,
}: {
	rotate: MotionValue<number>;
	scale: MotionValue<number>;
	translate: MotionValue<number>;
	children: React.ReactNode;
}) => {
	return (
		<motion.div
			style={{
				rotateX: rotate,
				scale,
				boxShadow:
					"0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
			}}
			className='max-w-[75%] max-sm:max-w-[95%] -mt-0 mx-auto h-[18rem] md:h-[100%] w-full border border-[#7c7c7c] md:p-0 bg-[#0A0A0A] rounded-xl shadow-2xl'
		>
			<div className=' h-full w-full  overflow-hidden rounded-xl  md:rounded-xl   '>
				{children}
			</div>
		</motion.div>
	);
};
