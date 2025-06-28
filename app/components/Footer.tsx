import Image from "next/image";

export default function Footer() {
  return (
      <footer className="flex justify-between p-4 items-center fixed bottom-0 left-0 right-0">
        <p className="color-cream">Engineering a<br />better tomorrow</p>
        <div className="flex gap-1">
          <a href="#"><Image src="/symbols/XSymbol.png" alt="X Symbol" width={32} height={32} /></a>
          <a href="#"><Image src="/symbols/GithubSymbol.png" alt="Github Symbol" width={32} height={32} /></a>
          <a href="#"><Image src="/symbols/LinkedInSymbol.png" alt="LinkedIn Symbol" width={32} height={32} /></a>
          <a href="#"><Image src="/symbols/EmailSymbol.png" alt="Email Symbol" width={32} height={32} /></a>
        </div>
      </footer>
  )
}