# React Animated App untuk Netlify

Aplikasi React dengan berbagai animasi CSS yang dapat di-deploy ke Netlify.

## Fitur Animasi

- ✨ Fade In - Animasi muncul dengan opacity
- 🚀 Slide - Animasi geser dari samping
- ⚡ Bounce - Animasi meloncat
- 🎯 Rotate - Animasi berputar
- 💎 Scale - Animasi zoom in/out
- ❤️ Pulse - Animasi denyut

## Cara Menjalankan Lokal

```bash
# Install dependencies
npm install

# Jalankan development server
npm start

# Build untuk production
npm run build
```

Aplikasi akan berjalan di `http://localhost:3000`

## Deploy ke Netlify

### Metode 1: Deploy Manual

1. Build aplikasi:
   ```bash
   npm run build
   ```

2. Drag & drop folder `build` ke Netlify dashboard

### Metode 2: Deploy dengan Git

1. Push repository ke GitHub/GitLab/Bitbucket
2. Import repository di Netlify dashboard
3. Netlify akan otomatis mendeteksi build settings dari `netlify.toml`

### Metode 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login ke Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Teknologi

- React 18.2.0
- CSS3 Animations
- Netlify untuk hosting

## Struktur Project

```
react-netlify-animated-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── netlify.toml
├── package.json
└── README.md
```
