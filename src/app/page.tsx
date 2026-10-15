import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="approved-hero-surface">
      <header className="approved-hero-header">
        <Link href="/" aria-label="Accueil">
          <Image
            src="/images/brand/jg-monogram.svg"
            alt="JG"
            width={796}
            height={710}
            priority
            className="approved-hero-monogram"
          />
        </Link>
      </header>
    </main>
  );
}
