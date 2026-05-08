# Rahastha Bina Unggul — Company Profile Website

Modern company profile website untuk PT. Rahastha Bina Unggul, dibangun dengan **Next.js App Router**, **TypeScript**, dan **Tailwind CSS**.

---

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript 5**
- **Tailwind CSS 4**
- **Inter** (Google Fonts)

---

## Struktur Proyek

```
src/
├── app/
│   ├── globals.css       # Global styles & Tailwind theme
│   ├── layout.tsx        # Root layout (Inter font, metadata)
│   └── page.tsx          # Main page (komposisi semua section)
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # Reusable button (variants: primary/secondary/outline/ghost)
│   │   ├── Card.tsx            # Reusable card component
│   │   ├── SectionContainer.tsx # Section wrapper dengan max-width & padding
│   │   └── SectionLabel.tsx    # Label kecil di atas heading
│   ├── Navbar.tsx        # Sticky navbar + hamburger menu mobile
│   └── Footer.tsx        # Footer dengan grid info kontak
├── sections/
│   ├── HeroSection.tsx        # Hero dengan gradient green
│   ├── AboutSection.tsx       # Tentang kami 2-kolom
│   ├── ServicesSection.tsx    # Layanan 2 kategori (prinsipal & perkebunan)
│   ├── FeaturesSection.tsx    # 4 keunggulan perusahaan
│   ├── StatsSection.tsx       # Statistik (tahun berdiri, mitra, klien)
│   └── CTASection.tsx         # Call-to-action dengan background gelap
├── types/
│   └── index.ts          # TypeScript interfaces
└── lib/
    └── data.ts            # Static data (nav items, stats, contact)
```

---

## Menjalankan Lokal

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build production
npm run build

# Start production server
npm start
```

Server berjalan di: `http://localhost:3000`

---

## Deployment di Ubuntu Server + Nginx

### 1. Build & Start (PM2 Recommended)

```bash
# Install PM2 globally
npm install -g pm2

# Build production
npm run build

# Start dengan PM2
PORT=3000 pm2 start npm --name "rahastha-web" -- start

# Auto-start saat server reboot
pm2 startup
pm2 save
```

### 2. Konfigurasi Nginx

Buat file konfigurasi Nginx:

```bash
sudo nano /etc/nginx/sites-available/rahastha
```

Isi dengan konfigurasi berikut:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Aktifkan konfigurasi:

```bash
sudo ln -s /etc/nginx/sites-available/rahastha /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 3. SSL dengan Certbot (HTTPS)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### 4. Environment Variables

Buat file `.env.production` di root project:

```env
PORT=3000
NODE_ENV=production
```

---

## Color Palette

| Token        | Hex       | Keterangan              |
|--------------|-----------|-------------------------|
| Primary      | `#1B5E20` | Dark Green (utama)      |
| Primary Light| `#2E7D32` | Hover state             |
| Secondary    | `#C9A227` | Gold (aksen)            |
| Dark BG      | `#0a3d0e` | Background section gelap|

---

## Sections

1. **Navbar** — Sticky dengan smooth scroll & hamburger mobile
2. **Hero** — Full-height dengan gradient hijau gelap
3. **Tentang Kami** — 2 kolom dengan placeholder gambar
4. **Layanan Kami** — 2 kategori (Prinsipal & Perkebunan)
5. **Keunggulan** — 4 kolom dengan ikon & hover animasi
6. **Stats** — Background hijau dengan angka-angka pencapaian
7. **CTA** — Call-to-action dengan gradient gelap
8. **Footer** — 4 kolom: brand, alamat, kontak, navigasi

---

© 2025 PT. Rahastha Bina Unggul. All rights reserved.
