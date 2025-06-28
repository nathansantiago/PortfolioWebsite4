import Image from "next/image";

interface PortfolioCategoryProps {
	imageUrl: string;
	title: string;
	role: string;
	dates: string;
	description: string;
}

export default function PotfolioCategory(props: PortfolioCategoryProps) {
	return (
		<div className="mx-auto max-w-1/2 text-center">
			<Image
				src={props.imageUrl}
				alt={props.imageUrl}
				width={550}
				height={782}
				quality={90}
				className="h-full w-full object-cover"
			/>
			<header className="my-8">
				<h3 className="font-montserrat text-xl">{props.title}</h3>
				<p className="text-base">{props.role}</p>
			</header>
			<div>
				<p className="text-xs font-bold">{props.dates}</p>
				<p className="text-xs">{props.description}</p>
			</div>
		</div>
	);
}
