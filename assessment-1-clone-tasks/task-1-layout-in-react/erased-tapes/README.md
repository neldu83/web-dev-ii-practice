# Task 1 – Erased Tapes

A React page based on the supplied Erased Tapes design and assets.

## Features

- Website logo and navigation.
- Article introduction and text arranged into three columns on desktop.
- Album gallery with one large image and four smaller images.
- Author biography, portrait and social media icons.
- Three reader comments.
- Footer with copyright information and social media icons.
- Layout adjustments for smaller screens.

## Technologies

- React and Vite
- CSS Flexbox, Grid and media queries
- Google Fonts: Josefin Sans and Protest Guerrilla

## Components

- `App.jsx`: page layout and article content.
- `Author.jsx`: author biography, portrait and icons.
- `Comment.jsx`: reusable reader comment.

## Run locally

Open a terminal in the `erased-tapes` folder.

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

Both commands completed successfully during testing.

## Assets

Images, icons and article text come from the supplied task materials. Image imports reference the neighbouring `assets` folder, which must remain alongside the project folder.

## Current limitations

The Our Artists and Our Story navigation links have no matching sections. Social media icons are displayed as images without clickable links.

## Assistance acknowledgement

ChatGPT (Codex) assisted with code suggestions, layout development, reusable components, explanatory comments and troubleshooting.

Prompts included “CAN YOU PUT SIMPLE COMMENTS” and “GIVE ME THE FULL CODE”, alongside follow-up requests to review and explain the implementation.