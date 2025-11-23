'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.innerWidth >= 1024) {
				setIsHidden(false);
				return;
			}

			const documentHeight = document.documentElement.scrollHeight;

			const scrollPercentage = (window.scrollY / (documentHeight - window.innerHeight)) * 100;
			setIsHidden(scrollPercentage > 10);
		};

		handleScroll(); // Initial check
		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, []);

	return (
		<footer className={`flex justify-between p-4 items-center fixed bottom-0 left-0 right-0 transition-opacity duration-300 ${isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
			<p className="color-cream">
				Engineering a<br />
				better tomorrow
			</p>
			<div className="flex gap-1">
				<a href="https://github.com/nathansantiago">
					<Image
						src="/symbols/GithubSymbol.png"
						alt="Github Symbol"
						width={32}
						height={32}
					/>
				</a>
				<a href="https://www.linkedin.com/in/nathan-santiago/">
					<Image
						src="/symbols/LinkedInSymbol.png"
						alt="LinkedIn Symbol"
						width={32}
						height={32}
					/>
				</a>
			</div>
		</footer>
	);
}
