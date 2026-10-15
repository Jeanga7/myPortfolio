import Link from "next/link";
import Image from "next/image";
import { CONTACTS } from "@/config/contacts";

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
        <nav className="approved-hero-navigation" aria-label="Navigation principale">
          <Link href="#projets">Projets</Link>
          <Link href="#apropos">À propos</Link>
          <Link href="#expertise">Expertise</Link>
        </nav>
        <a className="approved-hero-contact" href={`mailto:${CONTACTS.email}`} target="_blank" rel="noopener noreferrer">
          <span className="approved-hero-contact-dot" aria-hidden="true" />
          <span>Me contacter</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 17 17"
            width="17"
            height="17"
            fill="none"
          >
            <path d="M4 13 13 4M6 4h7v7" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </a>
      </header>
      <p className="approved-hero-eyebrow">
        <span className="approved-hero-eyebrow-dot" aria-hidden="true" />
        <span>SOFTWARE ENGINEER · DAKAR</span>
      </p>
      <h1 className="approved-hero-title">
        <span>Bonjour,</span>
        <span>moi c’est <em>Gaby.</em></span>
      </h1>
      <p className="approved-hero-description">
        Je conçois et développe des produits numériques<br />
        qui résolvent de vrais problèmes.
      </p>
      <Link className="approved-hero-primary-cta" href="#projets">
        <span>Explorer mes projets</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 18 18"
          width="18"
          height="18"
          fill="none"
        >
          <path d="M4 14 14 4M7 4h7v7" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      </Link>
      <Image
        src="/images/hero/gaby-original.png"
        alt=""
        width={1122}
        height={1402}
        priority
        aria-hidden="true"
        className="approved-hero-right-composite"
      />
      <div className="approved-hero-note" aria-label="Code, créer, explorer, toujours plus loin">
        <span>Code</span>
        <span>Créer</span>
        <span>Explorer</span>
        <span>Toujours plus loin.</span>
        <svg aria-hidden="true" viewBox="0 0 60 14" width="60" height="14" fill="none">
          <path d="M3 10c13-6 29-7 54-4" stroke="#ff7a00" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
      <div
        className="approved-hero-location"
        aria-label="Basé à Dakar, Sénégal"
        style={{
          backdropFilter: "blur(16px) saturate(120%)",
          WebkitBackdropFilter: "blur(16px) saturate(120%)",
        }}
      >
        <div className="approved-hero-location-avatars" aria-hidden="true">
          <span className="approved-hero-location-avatar avatar-one" />
          <span className="approved-hero-location-avatar avatar-two" />
          <span className="approved-hero-location-avatar avatar-three" />
        </div>
        <div className="approved-hero-location-copy">
          <span className="approved-hero-location-title">
            <span className="approved-hero-location-dot location-dot-orange" aria-hidden="true" />
            Basé à Dakar, Sénégal
          </span>
          <span className="approved-hero-location-status">
            <span className="approved-hero-location-dot location-dot-green" aria-hidden="true" />
            Disponible pour de nouveaux projets
          </span>
        </div>
      </div>
      <span className="approved-hero-secondary-cta" aria-label="Télécharger mon CV, document non disponible">
        <svg aria-hidden="true" viewBox="0 0 18 18" width="18" height="18" fill="none">
          <path d="M9 2v9M5.5 7.5 9 11l3.5-3.5M3 14.5h12" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span>Télécharger mon CV</span>
      </span>
      <section className="approved-hero-stats" aria-label="Statistiques provisoires">
        <div className="approved-hero-stats-rule" aria-hidden="true" />
        <div className="approved-hero-stats-list">
          <div className="approved-hero-stat">
            <strong>+20</strong>
            <span>Projets réalisés</span>
          </div>
          <div className="approved-hero-stat">
            <strong>3+</strong>
            <span>Années d’expérience</span>
          </div>
          <div className="approved-hero-stat">
            <strong>∞</strong>
            <span>Toujours en apprentissage</span>
          </div>
        </div>
      </section>
      <nav className="approved-hero-social" aria-label="Réseaux sociaux et contact">
        <a className="approved-hero-social-icon" href={CONTACTS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub de Jean Gabriel Goudiaby">
          <svg viewBox="0 0 18 18" width="18" height="18" fill="currentColor"><path d="M9 2a7 7 0 0 0-2.2 13.65c.35.06.48-.15.48-.34v-1.2c-1.96.43-2.37-.83-2.37-.83-.32-.82-.78-1.04-.78-1.04-.64-.44.05-.43.05-.43.71.05 1.08.73 1.08.73.63 1.08 1.66.77 2.06.59.06-.46.25-.77.45-.95-1.56-.18-3.2-.78-3.2-3.48 0-.77.28-1.4.73-1.89-.07-.18-.32-.9.07-1.87 0 0 .6-.19 1.97.72A6.85 6.85 0 0 1 9 6.4a6.8 6.8 0 0 1 1.8.24c1.37-.91 1.97-.72 1.97-.72.39.97.14 1.69.07 1.87.45.49.73 1.12.73 1.89 0 2.71-1.65 3.3-3.22 3.48.25.22.47.64.47 1.29v1.91c0 .19.13.41.48.34A7 7 0 0 0 9 2Z" /></svg>
        </a>
        <a className="approved-hero-social-icon social-linkedin" href={CONTACTS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Jean Gabriel Goudiaby">in</a>
        <a className="approved-hero-social-icon social-instagram" href={CONTACTS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Jean Gabriel Goudiaby">
          <svg viewBox="0 0 20 20" width="20" height="20" fill="none">
            <rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="10" r="3.25" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="14.4" cy="5.7" r="1" fill="currentColor" />
          </svg>
        </a>
        <a className="approved-hero-social-icon" href={`mailto:${CONTACTS.email}`} aria-label="Envoyer un email à Jean Gabriel Goudiaby">
          <svg viewBox="0 0 20 18" width="20" height="18" fill="none"><rect x="2" y="3" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="m3 4 7 5 7-5" stroke="currentColor" strokeWidth="1.5" /></svg>
        </a>
        <span className="approved-hero-social-divider" aria-hidden="true" />
        <span>jeanga7</span>
        <span className="approved-hero-social-dot" aria-hidden="true" />
      </nav>
      <div className="approved-hero-scroll" aria-label="Scroller pour découvrir">
        <span className="approved-hero-scroll-mouse" aria-hidden="true"><span /></span>
        <span>Scroller pour découvrir</span>
        <svg aria-hidden="true" viewBox="0 0 14 8" width="14" height="8" fill="none"><path d="m1 1 6 6 6-6" stroke="currentColor" strokeWidth="1.5" /></svg>
      </div>
    </main>
  );
}
