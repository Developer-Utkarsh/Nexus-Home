import { connect } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		await connect();
		return NextResponse.json({
			message: "Database connected successfully",
		});
	} catch (error) {
		console.error("Database connection error:", error);
		return NextResponse.json(
			{ error: "Failed to connect to the database" },
			{ status: 500 },
		);
	}
}
