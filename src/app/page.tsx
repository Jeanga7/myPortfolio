import { Profile } from "@/components/sections/Profile";
import { profile } from "@/lib/profile";

export default function Home() {
  return (
    <main id="contenu" className="container" tabIndex={-1}>
      <section id="presentation" className="introduction" aria-labelledby="intro-title">
        <p className="eyebrow">The Living Signature</p>
        <h1 id="intro-title">Gaby<span className="signature-dot">.</span></h1>
        <p className="role">{profile.role}</p>
        <p className="intro-note">Une approche personnelle de l’ingénierie logicielle.</p>
        <a className="primary-link" href="#profil">Faire connaissance <span aria-hidden="true">↓</span></a>
      </section>
      <Profile />
    </main>
  );
}
