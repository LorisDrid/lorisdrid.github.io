+++
title = "Gamble Together — Multiplayer Casino Games"
date = "2026-06-17"
description = "Casino-style mini-games — blackjack, roulette and poker — to play solo or online with friends. Fictional chips only."
[taxonomies]
tags = ["Next.js", "TypeScript", "Socket.io", "Multiplayer", "Game"]
[extra]
category = "Projects"
title_fr = "Gamble Together — Jeux de casino multijoueurs"
description_fr = "Des mini-jeux de casino — blackjack, roulette et poker — à jouer en solo ou en ligne entre amis. Jetons fictifs uniquement."
github_url = "https://github.com/LorisDrid/Gamble-Together"
github_label = "GitHub — LorisDrid/Gamble-Together"
body_en = "Gamble Together is a collection of casino-style mini-games — blackjack, European roulette and no-limit Texas Hold'em — playable solo or online with friends, using fictional chips only (no real money, ever). Friends join a private table with a 4-letter code, and a tournament mode chains several games into one competition with elimination or fixed-round legs and escalating stakes. The server is fully authoritative — every shuffle, spin and chip calculation happens server-side, so the client only renders state and sends intents. Persistent guest profiles and leaderboards track stats per device, no account required."
body_fr = "Gamble Together est une collection de mini-jeux de casino — blackjack, roulette européenne et Texas Hold'em no-limit — jouables en solo ou en ligne entre amis, avec des jetons fictifs uniquement (jamais d'argent réel). Les amis rejoignent une table privée via un code à 4 lettres, et un mode tournoi enchaîne plusieurs jeux en une compétition avec élimination ou manches à nombre de tours fixe et mises croissantes. Le serveur fait autorité — chaque mélange, lancer et calcul de jetons se fait côté serveur, le client se contentant d'afficher l'état et d'envoyer des intentions. Des profils invités persistants et des classements suivent les statistiques par appareil, sans compte."
techs = ["Next.js & TypeScript frontend in a pnpm monorepo", "Node.js + Socket.io authoritative real-time game server", "Shared, unit-tested pure game logic (blackjack, roulette, poker with side pots)", "SQLite persistence via built-in node:sqlite for profiles & leaderboards", "Playwright end-to-end tests; designed for self-hosting on a Raspberry Pi"]
techs_fr = ["Frontend Next.js & TypeScript dans un monorepo pnpm", "Serveur de jeu temps réel Node.js + Socket.io faisant autorité", "Logique de jeu pure et testée unitairement (blackjack, roulette, poker avec side pots)", "Persistance SQLite via node:sqlite intégré pour profils & classements", "Tests end-to-end Playwright ; pensé pour l'auto-hébergement sur Raspberry Pi"]
thumbnail = "images/gamble-together-preview.svg"
[extra.cover]
image = "images/gamble-together-preview.svg"
alt = "Gamble Together — casino mini-games"
+++
