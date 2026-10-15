import { profile } from "@/lib/profile";

export function Footer() {
  return (
    <footer className="site-footer container">
      <p>{profile.name}</p>
      <p>The Living Signature <span aria-hidden="true">·</span> {profile.signature}</p>
    </footer>
  );
}
