# Pixel Squeeze

Web application that lets you compress images and convert to .webp / .jpg / .png file formats in browser.

<img src="https://i.imgur.com/4ddCEpg.png" alt="Screenshot" width="650">

## Installation

1. Clone the repository
2. Install dependencies

```bash
yarn
```

3. Start development server

```bash
yarn start
```

## Tech Stack

- React
- React-dropzone
- File API

## Features

- Convert images to webp / jpg / png formats
- Change image quality parameter (1-100)
- Side-by-site comparison
- Download individual compressed image
- Download .zip archive with compressed images

## Roadmap

- Dark theme
- AVIF support
- Resize images

## Issues

Not all browsers support the quality parameter and conversion to webp type. Consult [this table](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility) for browser compatibility.

Use desktop Chrome, Firefox, Opera, or Edge browsers for optimal performance.
