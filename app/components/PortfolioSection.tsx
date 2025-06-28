import Image from "next/image";
import PortfolioCategory from "@/app/components/PortfolioCategory";

export default function PortfolioSection() {
	return (
		<section className="grid place-items-center lg:min-h-screen">
			<div className="grid gap-y-8 lg:grid-cols-3 lg:py-32 w-full">
				<div className="max-lg:sticky max-lg:top-0 max-lg:grid max-lg:min-h-screen max-lg:place-items-center">
					<PortfolioCategory
						imageUrl="/BrightstarPersonal.png"
						title="BRIGHTSTAR"
						role="CO-FOUNDER"
						dates="2024-Present"
						description="Frontend Design Lead"
					/>
				</div>
				<div className="max-lg:sticky max-lg:top-0 max-lg:grid max-lg:min-h-screen max-lg:place-items-center max-lg:bg-[#DBD6CC]">
					<PortfolioCategory
						imageUrl="/SheNotPersonal.png"
						title="FREELANCE"
						role="HOBBYIST"
						dates="Since 2015"
						description="Lifetime programmer"
					/>
				</div>
				<div className="max-lg:sticky max-lg:top-0 max-lg:grid max-lg:min-h-screen max-lg:place-items-center max-lg:bg-[#ECE8E1]">
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
