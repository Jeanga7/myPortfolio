import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <Link href="/" aria-label="Accueil">
          JG
        </Link>
      </header>
      <section aria-labelledby="page-title">
        <p>The Living Signature</p>
        <h1 id="page-title">Portfolio en préparation</h1>
        <p>Jean Gabriel Goudiaby · Software Engineer / Full-stack Developer</p>
      </section>
      <footer>
        <small>Une nouvelle expérience arrive bientôt.</small>
      </footer>
    </main>
  );
}
