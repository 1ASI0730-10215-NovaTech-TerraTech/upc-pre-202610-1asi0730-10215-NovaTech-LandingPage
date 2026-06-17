# TerraTech - Landing Page

Official landing page for **TerraTech**, the smart agricultural monitoring platform. This project introduces the product, highlights its key features, and directs users to the main web application.

---

## Description

TerraTech is a technology solution designed for farmers who want to optimize irrigation, monitor soil moisture, and receive recommendations based on real-time IoT sensor data.

This **landing page** serves the following purposes:

- Present TerraTech's value proposition.
- Showcase key features and benefits.
- Provide access to the main web application (frontend).
- Offer information about the team and the project.

---

## Features

- **Responsive design** (optimized for desktop and mobile devices).
- **Internationalization** (support for English and Spanish via `i18n`).
- **Main sections**: Hero, Features, About Us, Call to Action.
- **Direct link** to the main application for registered users.
- **Footer** with links to terms, conditions, and social media.
- **Reusable Vue 3 components** built with the Composition API.

---

## Technologies Used

| Technology | Description |
|------------|-------------|
| **Vue 3** | Progressive framework for building user interfaces |
| **Vite** | Fast and modern build tool |
| **Vue Router** | Routing for single-page application navigation |
| **Vue I18n** | Internationalization (EN/ES) |
| **CSS3** | Custom styles with CSS variables |
| **FontAwesome** (optional) | Iconography library |

---

## Project Structure

```
Grupo-Web-Landing/
├── public/
│ └── assets/ # Static assets (images, favicon)
├── src/
│ ├── locales/ # Translation files (en.json, es.json)
│ ├── shared/
│ │ └── presentation/
│ │ ├── components/ # Reusable components (footer, toolbar, etc.)
│ │ └── views/ # Page views: Home, About, Subscription
│ ├── app.vue # Root component
│ ├── i18n.js # Internationalization configuration
│ ├── main.js # Application entry point
│ ├── router.js # Route definitions
│ └── style.css # Global styles
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Installation and Local Development

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/1ASI0730-10215-NovaTech-TerraTech/upc-pre-202610-1asi0730-10215-NovaTech-LandingPage.git
   ```
   
2. Install dependencies:
   ```bash
   npm install
   ```
   
3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```
   
## Internationalization

The landing page supports two languages:

 - English (en)

 - Spanish (es)

Language selection is handled by the language-switcher-component.vue component and persists via cookie or application state.

Translation files are located in src/locales/.

## Contributors

| Apellidos y Nombres | Código |
|--------------------|---------|
| Aguilar Untiveros, Rodrigo Fabrizio | U202318309 |
| Howard Robles, Guillermo Arturo | U202222275 |
| Perez Encarnación, Breithner Rodolfo | U202418577 |
| Retuerto Rodríguez, Jorge Manuel | U202318612 |