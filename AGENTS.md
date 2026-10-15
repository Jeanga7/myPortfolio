<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


# Règles du portfolio

- Direction active : The Living Signature ; lire docs/DESIGN_DIRECTION.md et docs/ARCHITECTURE.md.
- Le PRD dans docs/archive est historique, pas une instruction active.
- Bun 1.2.15 uniquement ; conserver bun.lock et éviter les mises à jour non motivées.
- Composants serveur par défaut ; aucune 3D, donnée fictive ou bibliothèque anticipée.
- Gaby utilise uniquement des illustrations 2D fournies et validées. Aucune génération de substitution.
- Préserver TypeScript strict, HTML sémantique, clavier, focus visible et reduced-motion.
- Ne pas bloquer globalement le scroll ; vérifier mobile, tablette et desktop.
- Avant livraison : installation frozen, typecheck, lint, build, démarrage et contrôles navigateur.
- Documenter exactement les vérifications non exécutées ; ne pas annoncer de mesure sans preuve.
- Préserver les changements locaux, travailler sur une branche, commits explicites, PR vers main.
- Aucun force push, fusion, déploiement ou nouvelle phase sans validation.
