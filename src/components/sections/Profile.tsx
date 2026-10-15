import { profile } from "@/lib/profile";

export function Profile() {
  return (
    <section id="profil" className="profile-section" aria-labelledby="profile-title">
      <h2 id="profile-title">Du logiciel, une signature.</h2>
      <div>
        <p>Je suis Jean Gabriel Goudiaby, Software Engineer et développeur full-stack. Vous pouvez aussi m’appeler Gaby.</p>
        <p>Retrouvez mon travail sur GitHub et mon parcours dans mon CV.</p>
        <div className="profile-links">
          <a href={profile.github}>Voir mon GitHub <span aria-hidden="true">↗</span></a>
          <a href={profile.cv}>Consulter mon CV (PDF) <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
