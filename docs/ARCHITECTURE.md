# Architecture P00

## Décisions

Une seule route éditoriale, rendue statiquement par les Server Components de l’App Router.
`layout.tsx` assemble le lien d’évitement, Header, contenu et Footer ; `page.tsx` assemble
l’introduction et Profile. Aucun JavaScript applicatif client nécessaire aux liens.
Le runtime Next/React peut néanmoins charger ses propres scripts.
`profile.ts` centralise l’identité, le CV existant et GitHub, sans API ni données de démonstration.

Les guides de la version installée dans `node_modules/next/dist/docs/` ont été lus avant
implémentation : layouts/pages, CSS, images, métadonnées/images OG et icônes.
Next 16.2.3, React 19.2.4 et les versions restantes ne sont pas mises à jour massivement.
Bun 1.2.15 est fixé dans packageManager. Le lockfile existant est élagué ; un second lockfile npm
n’est pas conservé. Sharp et unrs-resolver restent explicitement trusted, sans ignoreScripts contradictoire.

## Structure

```text
src/
  app/                     page, layout, globals.css, icon.svg, opengraph-image.tsx
  components/
    layout/                Header.tsx, Footer.tsx
    sections/              Profile.tsx
  lib/                     profile.ts
public/doc/                CV existant
docs/archive/              ancien PRD
images/qa/                 captures et résultats de validation
```

Créer `components/ui/` lorsqu’une primitive réellement réutilisée apparaît.
Créer `components/character/` et `public/images/gaby/` avec les illustrations validées.
Pas de dossiers vides, de faux renderer ou de composant inutilisé pour anticiper.
`src/styles/` n’est pas nécessaire : un CSS global court suffit ; utiliser des CSS Modules
si des styles spécifiques grossissent. Les futures sections restent des composants distincts.

## Frontière du personnage (contrat prévu, non implémenté)

L’appelant utilisera `GabyCharacter` avec des propriétés sémantiques :
`pose: "guide"`, `alt: string`, `className?: string`. Un catalogue interne fera correspondre
la pose à l’illustration validée ; le composant rendra `next/image` avec dimensions intrinsèques
et `sizes` adaptés. Une illustration décorative aura `alt=""`.
Aucun chemin d’asset ni détail du renderer ne sera exposé dans les sections.
Une future implémentation GLB pourra remplacer l’intérieur de cette frontière en conservant
ces propriétés et un fallback 2D. Ce sera une décision séparée avec budget de performance ;
P00 ne fournit ni prop GLB fictive, ni import Three.js, ni fonction vide.

## Tokens et conventions

`globals.css` expose background, foreground, muted, accent, border, font-body,
content-width et gutter. Tailwind 4 reçoit les couleurs principales et la police via `@theme inline`.
Espacements en rem, gouttières fluides, rupture à 40 rem pour le profil et le footer.
Styles de focus contrastés, lien d’évitement, cibles de liens principales d’au moins 44 px,
HTML sémantique et mouvement désactivé en préférence réduite.
Pas de hauteur de viewport imposée, overflow global ou police réseau.
TypeScript strict ; imports `@/`, composants PascalCase, aucun `any` explicite.

## SEO et contenu

Métadonnées basées uniquement sur l’identité fournie. Image OG typographique locale,
icône JG et langue française. `SITE_URL` facultatif localement mais à renseigner avec
une origine validée avant publication. Sans domaine confirmé, pas de canonical ou sitemap inventé.
La CV est conservé sans modification ; sa fraîcheur et son accessibilité PDF restent à valider
par le propriétaire. Le contenu HTML ne dépend pas du PDF pour présenter l’identité.
