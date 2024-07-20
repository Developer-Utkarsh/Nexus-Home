import { NextResponse } from "next/server";
import { connect } from "@/lib/db";
import { Contact } from "@/lib/Modals/ContactModal";

const timeZone = "Asia/Kolkata";

export async function POST(req: Request) {
	try {
		await connect();

		const { email, message, firstName, lastName } = await req.json();

		// Input validation
		if (!email || !message || !firstName || !lastName) {
			return NextResponse.json(
				{ error: "All fields are required" },
				{ status: 400 },
			);
		}

		const newContact = await Contact.create({
			email,
			message,
			firstName,
			lastName,
			createdAt: new Date().toLocaleString("en-US", { timeZone }),
		});

		console.log(
			"New Contact Message Stored to DB Successfully:",
			newContact._id,
		);

		return NextResponse.json(
			{ msg: "Contact message is created successfully" },
			{ status: 201 },
		);
	} catch (error) {
		console.error("Error creating contact message:", error);
		return NextResponse.json(
			{ error: "An error occurred while creating the contact message" },
			{ status: 500 },
		);
	}
}
