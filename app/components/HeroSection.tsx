import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="flex flex-col items-center justify-center h-screen overflow-hidden">
			<Image
				src="/HeroBackground.png"
				alt="Hero Background"
				fill
				className="object-cover -z-10"
				priority
				quality={90}
				placeholder="blur"
				blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
			/>
			<div className="text-xl z-10 flex flex-col w-xl ">
				<p className="text-left self-end">
					A full stack developer
					<br />
					based in North Carolina
				</p>
				<div className="flex flex-col items-start">
					<h1 className="text-6xl font-medium mb-4 font-montserrat">
						Nathan Santiago
					</h1>
					<p className="text-cream-background opacity-70 self-start">
						Hear from me
					</p>
					<input
						placeholder="Your email"
						type="email"
						className="border-b border-cream w-full placeholder:opacity-80 focus:outline-none"
					/>
				</div>
			</div>
		</section>
	);
}
