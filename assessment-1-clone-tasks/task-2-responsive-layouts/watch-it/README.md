# Task 2 – watch.it

A responsive movie website built with React and Vite, based on the supplied specification and wireframes.

## Features

- watch.it heading, genre navigation and Search button.
- Six movie cards with images, descriptions and Watch Now buttons.
- One-column layout on mobile.
- Two-column layout on tablet.
- Featured and horizontal movie cards on desktop.
- Reusable Header and MovieCard function components.

## Technologies

- React and Vite
- CSS Flexbox, Grid and media queries
- Google Fonts: Lato and Teko

## Responsive design

- Mobile: below 720px.
- Tablet: from 720px.
- Desktop: from 1024px.
- Main content maximum width: 900px.
- Large spacing: 16px on mobile, 32px on tablet and 48px on desktop.

## Project files

- `src/App.jsx`: movie information, header and reusable movie cards.
- `src/App.css`: header, buttons and responsive card layouts.
- `src/index.css`: fonts, colours, global styles and spacing variables.

## Run locally

Open a terminal in the `watch-it` folder.

Install dependencies:

```powershell
npm.cmd install
```

Start the development server:

```powershell
npm.cmd run dev
```

Open the Local URL displayed in the terminal.

## Checks

Build the production version:

```powershell
npm.cmd run build
```

Check the JavaScript with ESLint:

```powershell
npm.cmd run lint
```

Both commands completed successfully during testing. The layout was also reviewed in the browser at mobile, tablet and desktop widths.

## Assets

Movie images and descriptions come from the supplied task materials.

The image imports reference the neighbouring `assets` folder. Keep that folder alongside the `watch-it` project folder.

The original specification and wireframes remain in the parent task folder.

## Current limitations

Search and Watch Now buttons are visual elements without search or playback functionality. Genre links move to the movie section without filtering the cards.

## Assistance acknowledgement

ChatGPT (Codex) assisted with the React page structure, reusable movie cards, responsive CSS, explanatory comments and troubleshooting.

Prompts included “Let's start Task 2” with the supplied specification, wireframes and movie text, followed by requests to review and explain the code.