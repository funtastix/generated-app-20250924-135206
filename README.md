# AuraStream

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)]([![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/funtastix/generated-app-20250924-134742))

A retro-themed, Spotify-like music streaming web app for a single album, featuring generative art and timeless quotes.

## About The Project

AuraStream is a visually striking single-page music player designed to showcase a single album with a unique retro-futuristic aesthetic. It evokes the feeling of the early internet and 90s computing culture through pixel art, neon glows, and glitch effects. The application provides a seamless listening experience with standard playback controls, a dynamic tracklist, and a persistent player bar. Instead of traditional album descriptions, it presents a rotating selection of timeless quotes, adding a layer of contemplative depth. The album art is a procedurally generated or heavily styled visual piece, reinforcing the unique, nostalgic theme.

### Key Features

*   **Retro-Futuristic UI:** A unique aesthetic inspired by 90s computing, featuring pixelated fonts, neon glows, and CRT scanline effects.
*   **Immersive Single-Page Experience:** The entire player is contained within a single, focused view.
*   **Full Playback Control:** Standard controls including play/pause, next/previous track, a draggable progress bar, and volume adjustment.
*   **Dynamic Tracklist:** Displays all album tracks, highlighting the currently playing song.
*   **Generative Album Art:** A dynamic, visually engaging centerpiece created with CSS.
*   **Contemplative Quotes:** Displays a rotating selection of timeless quotes in place of a traditional album description.
*   **Global State Management:** Powered by Zustand for a reactive and efficient UI.

## Technology Stack

This project is built with a modern, high-performance technology stack:

*   **Framework:** [React](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/aurastream.git
    cd aurastream
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    ```

### Running the Application

To start the development server, run the following command. The application will be available at `http://localhost:3000`.

```sh
bun dev
```

## Development Scripts

*   `bun dev`: Starts the Vite development server.
*   `bun build`: Builds the application for production. The output is generated in the `dist` directory.
*   `bun lint`: Runs ESLint to analyze the code for potential errors and style issues.
*   `bun preview`: Serves the production build locally for previewing.
*   `bun deploy`: Deploys the application to Cloudflare Workers.

## Deployment

This application is configured for seamless deployment to Cloudflare's global network.

### Deploying with Wrangler

To deploy the application, ensure you have the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed and configured.

Then, run the deployment script:

```sh
bun run deploy
```

### One-Click Deploy

Alternatively, you can deploy this project to your own Cloudflare account with a single click.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)]([![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/funtastix/generated-app-20250924-134742))

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.