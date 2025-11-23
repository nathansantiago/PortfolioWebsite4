import Image from "next/image";
import PortfolioCategory from "@/app/components/PortfolioCategory";

export default function PortfolioSection() {
	return (
		<section className="lg:grid lg:place-items-center lg:min-h-screen bg-cream lg:sticky lg:top-0">
			<div className="grid gap-y-0 lg:gap-y-8 lg:grid-cols-3 w-full text-black">
				<div className="sticky top-0 grid min-h-screen place-items-center bg-cream z-10">
					<PortfolioCategory
						imageUrl="/BrightstarPersonal.png"
						title="BRIGHTSTAR"
						role="CO-FOUNDER"
						dates="2024-Present"
						description="Frontend Design Lead"
					/>
				</div>
				<div className="sticky top-0 grid min-h-screen place-items-center bg-cream lg:bg-transparent z-20">
					<PortfolioCategory
						imageUrl="/SheNotPersonal.png"
						title="FREELANCE"
						role="HOBBYIST"
						dates="Since 2015"
						description="Lifetime Programmer"
					/>
				</div>
				<div className="sticky top-0 grid min-h-screen place-items-center bg-cream lg:bg-transparent z-30">
					<PortfolioCategory
						imageUrl="/VirnikaPersonal.png"
						title="VIRNIKA"
						role="ENGINEER"
						dates="2024-Present"
						description="Software Developer"
					/>
				</div>
			</div>
		</section>
	);
}
