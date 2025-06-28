import type { Metadata } from "next";
import { Montserrat, Courier_Prime } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
});

const courierPrime = Courier_Prime({
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
	variable: "--font-courier",
});

export const metadata: Metadata = {
	title: "Nathan Santiago",
	description: "My fourth portfolio website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.variable} ${courierPrime.variable} antialiased text-cream`}
			>
				{children}
				<Footer />
			</body>
		</html>
	);
}
