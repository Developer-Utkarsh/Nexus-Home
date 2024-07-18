export const Marquee: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className='w-full overflow-hidden flex justify-center items-center z-10'>
			<div className=' flex max-w-[90vw] overflow-hidden justify-center items-center'>
				<div className='flex  animate-marquee [--duration:45s]'>
					{children}
					{children}
				</div>
			</div>
		</div>
	);
};
