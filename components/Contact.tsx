import React, { useState } from "react";
import axios from "axios";
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
	const [forms, setForms] = useState<FormType>({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});

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
						"Your message reached to us, We will reply you soon :)",
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

	return (
		<section className='custom-screen-lg mx-auto z-20 mb-4'>
			<div className='relative bg-transparent z-10 max-w-4xl mx-auto space-y-4'>
				<Card className='relative mt-20 py-6 z-20 bg-transparent max-md:border-gray-800 max-md:rounded-none max-md:border-b-0 hover:border-purple-600/40 transition duration-500'>
					<CardHeader>
						<CardTitle className='text-4xl text-stone-100'>
							Say Something
						</CardTitle>
						<CardDescription className='text-stone-300'>
							Fill out the form below and we'll get back to you as
							soon as possible.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form className='space-y-4 z-20' onSubmit={onSubmit}>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 z-20'>
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
							</div>
							<div className='space-y-2'>
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
							</div>
							<div className='space-y-2'>
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
							</div>
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
						</form>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
