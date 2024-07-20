import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

type FormType = {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
};

export default function Contact() {
	const { toast } = useToast();
	const [isLoading, setIsLoading] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [forms, setForms] = useState<FormType>({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.1 },
		);

		const section = document.querySelector(".contact-section");
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	}, []);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setForms({ ...forms, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await axios.post("/api/contact/", forms);

			if (response.status === 201) {
				toast({
					title: "Message Submitted Successfully",
					description:
						"Your message reached us. We will reply to you soon :)",
				});
				setForms({
					firstName: "",
					lastName: "",
					email: "",
					message: "",
				});
			} else {
				throw new Error("Unexpected response status");
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			toast({
				title: "Something went wrong",
				description:
					"There was an error while submitting the form. Please try again later :(",
				variant: "destructive",
			});
		} finally {
			setIsLoading(false);
		}
	};

	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				when: "beforeChildren",
				staggerChildren: 0.1,
				delay: 0.5,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 1 ,

		
		delay: 0.5,



		} },
	};

	return (
		<section className='custom-screen-lg mx-auto z-20 mb-4 contact-section'>
			<motion.div
				className='relative bg-transparent z-10 max-w-4xl mx-auto space-y-4'
				initial='hidden'
				animate={isVisible ? "visible" : "hidden"}
				variants={containerVariants}
			>
				<Card className='relative mt-20 py-6 z-20 bg-transparent max-md:border-gray-800 max-md:rounded-none max-md:border-b-0 hover:border-purple-600/40 transition duration-500'>
					<CardHeader>
						<motion.div variants={itemVariants}>
							<CardTitle className='text-4xl text-stone-100'>
								Say Something
							</CardTitle>
						</motion.div>
						<motion.div variants={itemVariants}>
							<CardDescription className='text-stone-300'>
								Fill out the form below and we'll get back to
								you as soon as possible.
							</CardDescription>
						</motion.div>
					</CardHeader>
					<CardContent>
						<form className='space-y-4 z-20' onSubmit={onSubmit}>
							<motion.div
								className='grid grid-cols-1 md:grid-cols-2 gap-4 z-20'
								variants={itemVariants}
							>
								<div className='space-y-2'>
									<Label htmlFor='firstName'>
										First Name
									</Label>
									<Input
										id='firstName'
										value={forms.firstName}
										onChange={handleChange}
										name='firstName'
										placeholder='Enter your first name'
										className='bg-transparent hover:border-purple-600/40 focus:border-purple-600/60 focus:ring-purple-600/60 [&:not(:placeholder-shown)]:border-purple-600/60'
										required
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='lastName'>Last Name</Label>
									<Input
										id='lastName'
										value={forms.lastName}
										onChange={handleChange}
										name='lastName'
										placeholder='Enter your last name'
										className='bg-transparent hover:border-purple-600/40 focus:border-purple-600/60 focus:ring-purple-600/60 [&:not(:placeholder-shown)]:border-purple-600/60'
									/>
								</div>
							</motion.div>
							<motion.div
								className='space-y-2'
								variants={itemVariants}
							>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									value={forms.email}
									name='email'
									onChange={handleChange}
									placeholder='Enter your email'
									type='email'
									required
									className='bg-transparent hover:border-purple-600/40 focus:border-purple-600/60 focus:ring-purple-600/60 [&:not(:placeholder-shown)]:border-purple-600/60'
								/>
							</motion.div>
							<motion.div
								className='space-y-2'
								variants={itemVariants}
							>
								<Label htmlFor='message'>Message</Label>
								<Textarea
									id='message'
									required
									value={forms.message}
									className='bg-transparent hover:border-purple-600/40 focus:border-purple-600/60 focus:ring-purple-600/60 [&:not(:placeholder-shown)]:border-purple-600/60'
									onChange={handleChange}
									name='message'
									maxLength={200}
									placeholder='Enter your message'
								/>
							</motion.div>
							<motion.div variants={itemVariants}>
								<Button
									disabled={isLoading}
									type='submit'
									className='inline-flex rounded-md text-center group items-center w-full justify-center bg-gradient-to-br from-purple-500 via-black to-purple-500 border-input border-[1px] hover:from-purple-600 hover:to-purple-600 border-stone-400 transition hover:border-stone-300 sm:w-auto py-6 px-10 text-white'
								>
									{isLoading ? (
										<>
											Submitting
											<Loader2 className='animate-spin ml-3 w-4 h-4 flex items-center' />
										</>
									) : (
										<>
											Submit
											<ChevronRight className='w-4 h-4 ml-2 group-hover:translate-x-1 duration-300' />
										</>
									)}
								</Button>
							</motion.div>
						</form>
					</CardContent>
				</Card>
			</motion.div>
		</section>
	);
}
