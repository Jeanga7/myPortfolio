import { profile } from "@/lib/profile";

export function Header() {
  return (
    <header className="site-header container">
      <a className="identity" href="#presentation" aria-label="JG — présentation de Gaby">
        <span className="monogram" aria-hidden="true">JG</span>
        <span>{profile.signature}</span>
      </a>
      <nav aria-label="Navigation principale">
        <a href="#profil">Profil</a>
        <a href={profile.github}>GitHub ↗</a>
      </nav>
    </header>
  );
}
