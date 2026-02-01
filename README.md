# The Collapse Protocol

A procedural text-based survival simulator. "Dungeon Crawler Carl" meets "The Matrix" — dark, cynical, gamified, and slick.

## Quick Start

Load nvm (required once per terminal session)
```bash
source ~/.nvm/nvm.sh
```

```bash
npm install
npm run dev
```

## Helpful GIT commands
- See what changed
git status

- Stage a specific file you want to commit
git add README.md

- Or stall all changed files
git add .

- Commit with a message
git commit -m "Your commit message here"

- Push to GitHub
git push origin main

- Quick one liner for small changes
git add . && git commit -m "Update readme" && git push origin main

- See what changed (before staging)
git diff

- See recent commits
git log --oneline

- Get latest from GitHub before pushing
git pull origin main

## About

The Collapse Protocol is an immersive, text-based interactive web experience where players navigate a reality-breaking apocalypse. Users enter their name, location, and a "useless talent," then experience a glitch-filled transition before facing procedurally generated scenarios with cynical humor and survival choices.

Features:
- CRT scanline overlay and terminal-style aesthetics
- Typewriter text animations
- Health and Sanity stat tracking
- Glitch effects and screen shake
- Procedurally stitched narrative scenarios

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS 4
- Framer Motion
