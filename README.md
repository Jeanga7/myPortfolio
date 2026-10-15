# Gaby · jeanga7

Portfolio de Jean Gabriel Goudiaby, Software Engineer / Full-stack Developer.
**The Living Signature** : une présence éditoriale claire, chaleureuse et précise.
La mission P00 fournit une fondation fonctionnelle, pas le Hero final.

## Développement

Bun **1.2.15** (gestionnaire retenu), Node.js **20.9 minimum** ; validation locale avec Node 24.21.0.

```sh
bun install --frozen-lockfile
bun run dev
```

Ouvrir http://localhost:3000. Un seul lockfile : `bun.lock`.

```sh
bun run typecheck
bun run lint
bun run build
bun run start
```

`typecheck` génère les types de routes Next.js avant TypeScript. Le lint refuse aussi les avertissements.
Aucune variable obligatoire en local. Avant tout déploiement validé, définir `SITE_URL`
avec l’origine HTTPS publique confirmée pour les URL canoniques et sociales ; voir `.env.example`.
Sans cette variable, aucune URL canonique n’est inventée (Next peut utiliser localhost pour l’image sociale).

## Stack et structure

Next.js 16.2.3 / React 19.2.4, TypeScript strict, Tailwind CSS 4.
Composants serveur par défaut, React Compiler conservé. Aucun moteur 3D, store global,
service GitHub fictif ou bibliothèque d’animation.

- `src/app/` : page, layout, CSS global, métadonnées et image sociale.
- `src/components/layout/` : header et footer.
- `src/components/sections/` : présentation du profil.
- `src/lib/profile.ts` : identité et liens réels.
- `public/doc/` : CV existant conservé.
- `docs/` : audit, architecture, direction et historique.
- `images/qa/` : preuves de validation lorsqu’elles sont disponibles.

Les futures primitives UI et l’intégration 2D de Gaby sont décrites dans l’architecture.
Aucune illustration validée n’est présente : aucune image de substitution n’est utilisée.

## Documents

- [Audit](docs/FOUNDATION_AUDIT.md)
- [Direction artistique](docs/DESIGN_DIRECTION.md)
- [Architecture et conventions](docs/ARCHITECTURE.md)
- [Changelog et contrôles](docs/FOUNDATION_CHANGELOG.md)
- [PRD historique, non applicable au produit actif](docs/archive/prd-spatial.md)

La branche `archive/pre-foundation-reset-2026-10-15` conserve l’état local complet avant nettoyage.
Ne pas déployer ni commencer la prochaine phase sans validation.
