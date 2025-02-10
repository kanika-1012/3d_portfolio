# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
3d_portfolio
├─ .eslintrc.cjs
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ desktop_pc
│  │  ├─ license.txt
│  │  ├─ scene.bin
│  │  ├─ scene.gltf
│  │  └─ textures
│  │     ├─ Material.002_baseColor.png
│  │     ├─ Material.023_baseColor.jpeg
│  │     ├─ Material.024_baseColor.jpeg
│  │     ├─ Material.074_0_baseColor.png
│  │     ├─ Material.074_10_baseColor.jpeg
│  │     ├─ Material.074_11_baseColor.png
│  │     ├─ Material.074_12_baseColor.jpeg
│  │     ├─ Material.074_13_baseColor.png
│  │     ├─ Material.074_14_baseColor.png
│  │     ├─ Material.074_15_baseColor.png
│  │     ├─ Material.074_16_baseColor.png
│  │     ├─ Material.074_17_baseColor.png
│  │     ├─ Material.074_18_baseColor.png
│  │     ├─ Material.074_18_emissive.png
│  │     ├─ Material.074_19_baseColor.png
│  │     ├─ Material.074_1_baseColor.jpeg
│  │     ├─ Material.074_20_baseColor.png
│  │     ├─ Material.074_21_baseColor.png
│  │     ├─ Material.074_22_baseColor.png
│  │     ├─ Material.074_23_baseColor.png
│  │     ├─ Material.074_24_baseColor.png
│  │     ├─ Material.074_24_emissive.png
│  │     ├─ Material.074_25_baseColor.jpeg
│  │     ├─ Material.074_26_baseColor.png
│  │     ├─ Material.074_27_baseColor.png
│  │     ├─ Material.074_27_emissive.png
│  │     ├─ Material.074_28_baseColor.png
│  │     ├─ Material.074_29_baseColor.png
│  │     ├─ Material.074_2_baseColor.jpeg
│  │     ├─ Material.074_30_baseColor.png
│  │     ├─ Material.074_31_baseColor.png
│  │     ├─ Material.074_32_baseColor.jpeg
│  │     ├─ Material.074_33_baseColor.png
│  │     ├─ Material.074_34_baseColor.jpeg
│  │     ├─ Material.074_35_baseColor.png
│  │     ├─ Material.074_36_baseColor.jpeg
│  │     ├─ Material.074_39_baseColor.jpeg
│  │     ├─ Material.074_3_baseColor.png
│  │     ├─ Material.074_40_baseColor.png
│  │     ├─ Material.074_4_baseColor.png
│  │     ├─ Material.074_4_emissive.png
│  │     ├─ Material.074_5_baseColor.png
│  │     ├─ Material.074_6_baseColor.png
│  │     ├─ Material.074_7_baseColor.png
│  │     ├─ Material.074_8_baseColor.png
│  │     ├─ Material.074_9_baseColor.png
│  │     ├─ Material.074_9_emissive.png
│  │     ├─ Material.074_baseColor.png
│  │     ├─ Material_baseColor.jpeg
│  │     ├─ Material_metallicRoughness.png
│  │     └─ Tasten_2_baseColor.jpeg
│  └─ planet
│     ├─ license.txt
│     ├─ scene.bin
│     ├─ scene.gltf
│     └─ textures
│        ├─ Clouds_baseColor.png
│        └─ Planet_baseColor.png
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ backend.png
│  │  ├─ carrent.png
│  │  ├─ close.svg
│  │  ├─ company
│  │  │  ├─ meta.png
│  │  │  ├─ shopify.png
│  │  │  ├─ starbucks.png
│  │  │  └─ tesla.png
│  │  ├─ creator.png
│  │  ├─ github.png
│  │  ├─ herobg.png
│  │  ├─ index.js
│  │  ├─ jobit.png
│  │  ├─ logo.svg
│  │  ├─ menu.svg
│  │  ├─ mobile.png
│  │  ├─ tech
│  │  │  ├─ css.png
│  │  │  ├─ docker.png
│  │  │  ├─ figma.png
│  │  │  ├─ git.png
│  │  │  ├─ html.png
│  │  │  ├─ javascript.png
│  │  │  ├─ mongodb.png
│  │  │  ├─ nodejs.png
│  │  │  ├─ reactjs.png
│  │  │  ├─ redux.png
│  │  │  ├─ tailwind.png
│  │  │  ├─ threejs.svg
│  │  │  └─ typescript.png
│  │  ├─ tripguide.png
│  │  └─ web.png
│  ├─ components
│  │  ├─ About.jsx
│  │  ├─ BlockchainDemo.jsx
│  │  ├─ canvas
│  │  │  ├─ Ball.jsx
│  │  │  ├─ Computers.jsx
│  │  │  ├─ Earth.jsx
│  │  │  ├─ index.js
│  │  │  └─ Stars.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Experience.jsx
│  │  ├─ Feedbacks.jsx
│  │  ├─ Hero.jsx
│  │  ├─ index.js
│  │  ├─ Loader.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Tech.jsx
│  │  └─ Works.jsx
│  ├─ constants
│  │  └─ index.js
│  ├─ hoc
│  │  ├─ index.js
│  │  └─ SectionWrapper.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ styles.js
│  └─ utils
│     └─ motion.js
├─ tailwind.config.js
└─ vite.config.js

```