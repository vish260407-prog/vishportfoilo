# Vishmitha's Portfolio Website

Full Stack Developer | Passionate about building scalable web applications with modern technologies. Focused on clean code, responsive UI, backend development, and continuous learning. 🚀

Developed using **React + Tailwind CSS v4 + Framer Motion** for fluid animations, smooth viewport reveals, and interactive mouse-glow states.

## Folder Structure
```text
my portfolio/
├── public/
│   ├── assets/
│   │   ├── hero-portrait.png   (Cutout-style portrait of Tiara)
│   │   ├── about-portrait.png  (Editorial portrait for bio section)
│   │   └── polaroid-event.png   (Podcast event action photo)
│   ├── favicon.svg             (Default icon)
│   └── icons.svg               (Icon definitions)
├── src/
│   ├── components/
│   │   ├── Header.jsx          (Navigation, social links, mobile drawers)
│   │   ├── Hero.jsx            (Large serif text, annotations, curved SVGs)
│   │   ├── About.jsx           (Cream board split copy, tilted polaroid)
│   │   ├── Values.jsx          (Textured values grid, marquee double text, mouse reflection)
│   │   └── Footer.jsx          (Map links, logo, copyright, social handles)
│   ├── App.jsx                 (Root container, site frame outline, monogram brand badge)
│   ├── index.css               (Tailwind v4 imports, global frames, overlays, and custom keyframes)
│   └── main.jsx                (DOM render mount point)
├── vite.config.js              (Vite compilation and build plugin config)
├── package.json                (Dependencies and script commands)
└── README.md                   (This documentation)
```

---

## Brand Guide & Style Settings

### 1. Palette
- **Deep Burgundy**: `#7B1E28` (Primary brand typography, button background, values card)
- **Warm Cream**: `#F8F3EC` (Global body background, values font, about panels)
- **Charcoal Accent**: `#2B1F1D` (Nav menu items, outer frame border, values backdrop background)
- **Warm Gold**: `#C5A059` (Cursive section tags, card titles, card dividers)

### 2. Typography Hierarchy
- **Headings**: `'Playfair Display', Georgia, serif`
  - High contrast serif with tight letter tracking (`tracking-tight`).
  - Hero headline: `HI, I'm TIARA` using a very large type scale.
- **Body text**: `'Inter', system-ui, sans-serif`
  - Clean, neutral sans-serif. Highly legible at `text-sm` and `text-base` sizes with custom letter-spacing.
- **Accents**: `'Caveat', cursive`
  - Used for warm handwritten touches like `Hey, I'm Tiara`.

---

## Build and Local Execution

### Prerequisites
Make sure **Node.js** (v18 or higher) is installed on your computer.

### Steps to Run
1. Open your terminal in the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the local development server:
   ```bash
   npm run dev
   ```
4. Build the production bundle:
   ```bash
   npm run build
   ```

---

## Platform Integration Guides

This codebase contains clean custom classes that can be mapped to visual builders:

### 1. Squarespace (Fluid Engine)
- **Fonts**: Go to **Website Tools** > **Custom CSS** and upload custom fonts or link via Site Header code injection:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet">
  ```
- **Custom CSS Overrides**: Copy the design token declarations in `src/index.css` directly to Squarespace's Custom CSS panel.
- **Outer Page Frame**: Add a Code Block in the Footer with the page frame element:
  ```html
  <div class="site-frame" aria-hidden="true"></div>
  ```
  And paste the corresponding CSS rules for `.site-frame` into your CSS.
- **Hero & About Layouts**: Recreate using Squarespace's **Fluid Engine** editor by overlapping text and image blocks, setting Z-indices, and utilizing negative margins. Use a **Code Block** for custom inline SVGs (the annotation arrows).

### 2. Webflow (Designer)
- **Style Panel mapping**: Create Global Color Swatches for Burgundy, Cream, Gold, and Charcoal.
- **Layout & Structure**:
  - Set section margins to match the grid paddings.
  - Set the Polaroid element block to `Transform: Rotate(7deg)`.
  - For the **Values backdrop**, overlay a div with the custom CSS `linear-gradient` for diagonal shadows and custom SVG data for the grain.
- **Animations**: Recreate the Framer Motion fade-ups using Webflow **Interactions** (Scroll into View trigger with easing set to `Out-Cubic` or `Out-Quart`).
