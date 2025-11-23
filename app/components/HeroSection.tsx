import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="flex flex-col items-center justify-center h-screen overflow-hidden sticky top-0 px-4 sm:px-6">
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
			<div className="text-base sm:text-lg md:text-xl z-10 flex flex-col w-full max-w-xl">
				<p className="text-left self-end mb-2 sm:mb-0">
					A full stack developer
					<br />
					based in North Carolina
				</p>
				<div className="flex flex-col items-start">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-2 sm:mb-4 font-montserrat">
						Nathan Santiago
					</h1>
					<p className="text-sm sm:text-base md:text-lg">
						CS & Geo @ UNC Chapel Hill '27
					</p>
				</div>
			</div>
		</section>
	);
}
