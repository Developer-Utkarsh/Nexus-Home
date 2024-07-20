import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const inter = Cairo({
	subsets: ["latin"],
	weight: "400",
});
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
	title: "Nexus | Your Conferencing App",
	description:
		"Nexus is a fast and easy to use video conferencing app which helps to conduct and schedule meetings with personal rooms for personal meetings and recordings. Nexus uses less data during meetings and provides a fast and lag-free experience.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='dark'>
			<head>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
					integrity='sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=='
					crossOrigin='anonymous'
					referrerPolicy='no-referrer'
				/>
			</head>

			<body className={`scroll-smooth   ${inter.className}`}>
				<main>{children}</main>
				<Toaster />
			</body>
		</html>
	);
}
