# Audit des fondations — P00, 15 octobre 2026

## Périmètre et sauvegarde

Inspection de package.json, bun.lock, app, canvas, ui, lib, public, README, AGENTS,
CLAUDE, PRD, ESLint, TypeScript et Next. Base main : `a4cc6ee` ; trois commits initiaux.
Le working tree avait 12 fichiers modifiés et 6 entrées de fichiers non suivis (dont le CV).
Ils sont intégralement conservés dans le commit `21d0bd4` de
`archive/pre-foundation-reset-2026-10-15`, avant toute suppression.
La branche `chore/portfolio-foundation-reset` part de cette sauvegarde.
Aucun historique main réécrit, aucune ancienne branche supprimée.

## Problèmes confirmés avant nettoyage

| Constat / preuve | Conséquence | Traitement |
| --- | --- | --- |
| page.tsx client importe Scene avec ssr:false | Présentation principale dépendante du JS/WebGL, sans contenu éditorial SSR | Page serveur sémantique |
| globals.css impose 100vw/100vh et overflow:hidden ; layout bloque aussi le scroll | Contenu inaccessible en débordement, risque mobile/zoom | Flux normal responsive |
| Canvas : DPR jusqu’à 2, ombres, Bloom, Environment, sphères 64×64, boucles useFrame | Coût GPU et animations continues ; pas de politique reduced-motion | Moteur supprimé, sans prétendre à un gain chiffré non mesuré |
| HUD : boutons CV et CONTACT sans action | Faux contrôles actifs | Liens GitHub et CV réels |
| Terminal ne fait que stocker le texte ; absent des imports actifs | Recherche fictive et composant mort | Retiré |
| NodeModal sans consommateur | Composant mort | Retiré |
| InfoPanel : fermeture par icône sans nom accessible, pas de gestion Escape/focus ; modale historique sans rôle dialog | Navigation clavier et lecteur d’écran incomplètes | Panneaux supprimés |
| Node sélectionné par événements de pointeur sur groupe 3D, sans équivalent clavier | Navigation essentielle inaccessible au clavier | Liens natifs |
| github.ts renvoie listes vides et contribution 0 ; aucun consommateur | Fonctions factices | Retiré |
| Lint exécuté : 2 erreurs, 5 warnings | any dans Connection, lecture de ref au rendu dans Node ; symboles inutilisés | Sources supprimées |
| tsc --noEmit exécuté directement : succès | Aucune erreur TypeScript confirmée ; any masquait une faiblesse de typage | Strict conservé |
| GSAP et lucide-react sans import ; Framer uniquement dans panneaux | Dépendances sans usage final | Retirées |
| Zustand et graph.ts/json servent uniquement le graphe | Couplage sans utilité éditoriale | Retirés |
| bun.lock ne déclare pas lucide-react présent dans package.json ; package-lock local concurrent | Gestionnaire ambigu / manifests divergents | Bun seul, lock régénéré sans mise à jour massive |
| ignoreScripts et trustedDependencies contiennent les mêmes paquets | Intention contradictoire | trustedDependencies conservé seul |
| Métadonnées/OG annoncent expérience 3D, domaine Vercel par défaut et compétences non revalidées | Identité/SEO périmés | Identité fournie, domaine configurable |
| README Create Next App, PRD spatial, SVG de démo et favicon Next | Documentation et identité obsolètes | README remplacé, PRD archivé, assets de démo retirés |
| Deux polices Google au build | Dépendance réseau et ressources supplémentaires | Police système provisoire |

Détail lint : Connection `LineHandle` inutilisé + `any` ; Node `react-hooks/refs` ;
Universe `getNodeChildren` et `setActiveOrbit` inutilisés ; github.ts endpoint et argument inutilisés.
Le premier essai `bun exec tsc` était une invocation inadaptée à Bun 1.2.15 ; le binaire local
`./node_modules/.bin/tsc --noEmit` a ensuite réussi.

## Dépendances retirées

`@react-three/drei`, `@react-three/fiber`, `@react-three/postprocessing`, `three`,
`@types/three`, `postprocessing`, `framer-motion`, `gsap`, `lucide-react`, `zustand`.
GSAP pourra être réévalué avec le futur système d’animations ; aucune anticipation installée.
Next, React, Tailwind 4, TypeScript, ESLint et React Compiler restent en place.

## Fichiers générés et temporaires

Aucun .next, node_modules, tsbuildinfo ou secret suivi trouvé ; les exclusions existantes sont conservées.
`package-lock.json` était non suivi avant sauvegarde et est retiré de la fondation (Bun retenu).
Le CV est un asset utilisateur, pas un fichier temporaire : conservé à l’identique.
Les captures QA sont des preuves volontairement suivies, pas des sorties de build.

## Recommandations, non défauts confirmés

- Choisir et licencier la typographie finale, fournir les illustrations Gaby approuvées.
- Confirmer le domaine public avant canonical/sitemap et déploiement.
- Revalider l’actualité et l’accessibilité du CV avec son propriétaire.
- Mesurer Core Web Vitals sur l’hébergement cible ; aucun score Lighthouse ou résultat terrain revendiqué.
- Étendre les contrôles à Safari, Firefox, appareils physiques et lecteurs d’écran.
- Ajouter CI et budget de performance lorsque la prochaine phase est définie.

Les contrôles P00 et leurs limites sont consignés dans FOUNDATION_CHANGELOG.md.
