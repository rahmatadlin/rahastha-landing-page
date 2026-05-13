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

## Deployment production (Ubuntu VM dari nol)

Dokumen ini untuk **VM Ubuntu baru (fresh install)**, stack **Next.js**, alur **Git** (`git clone` / `git pull`), **npm**, **Nginx** reverse proxy, dan **PM2**. Domain contoh: **rahastha.id** dan **www.rahastha.id**.

Repository proyek: [github.com/rahmatadlin/rahastha-landing-page](https://github.com/rahmatadlin/rahastha-landing-page).

Prinsip untuk VM **resource terbatas**: hindari menyalin `node_modules` / `.next` lewat SCP; clone tipis; `npm ci --omit=dev` di server; bersihkan cache npm bila perlu.

---

### 1. Dependency di server (Ubuntu)

**Update indeks paket dan upgrade paket keamanan (disarankan):**

```bash
sudo apt update
sudo apt upgrade -y
```

**Paket dasar produksi (Git, build native, curl, firewall):**

```bash
sudo apt install -y git curl ca-certificates build-essential ufw
```

- `git` — clone/pull repository  
- `build-essential` — kompilasi modul native Node bila diperlukan  
- `curl` — unduh skrip / health check  
- `ufw` — firewall sederhana (opsional tapi disarankan)

**Nginx:**

```bash
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

**Node.js LTS + npm (menggunakan NodeSource — stabil untuk production):**

Cek [NodeSource distributions](https://github.com/nodesource/distributions) untuk **nomor LTS terbaru** (misalnya `22.x`), lalu:

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

**PM2 (process manager):**

```bash
sudo npm install -g pm2
pm2 -v
```

**Firewall (opsional, best practice):**

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

---

### 2. Autentikasi Git di VM (best practice)

Untuk server production, **SSH key** lebih disarankan daripada menyimpan password atau token di disk untuk `git pull` rutin.

#### Mengapa SSH lebih direkomendasikan daripada HTTPS + password/token?

| Aspek | SSH key | HTTPS + token |
|--------|---------|----------------|
| Otomasi | Cocok untuk `git pull` tanpa prompt | Token bisa expire / perlu refresh |
| Keamanan | Private key hanya di server; revoke dengan hapus key di GitHub/GitLab | Token tersimpan di remote URL atau credential helper — risiko bocor lebih tinggi |
| Audit | Satu key per server / per environment | Token sering dipakai lintas tool |

#### Langkah: generate SSH key di VM

```bash
ssh-keygen -t ed25519 -C "deploy@rahastha-vm" -f ~/.ssh/id_ed25519_deploy -N ""
```

Tambahkan ke ssh-agent (opsional, agar tidak prompt berulang):

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_deploy
```

**Tambahkan public key ke GitHub / GitLab**

```bash
cat ~/.ssh/id_ed25519_deploy.pub
```

- **GitHub:** Settings → SSH and GPG keys → New SSH key → paste isi `.pub`  
- **GitLab:** Preferences → SSH Keys  

**Konfigurasi SSH untuk host Git (opsional, jelas dan rapi):**

```bash
nano ~/.ssh/config
```

Contoh isi:

```
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_deploy
  IdentitiesOnly yes
```

```bash
chmod 600 ~/.ssh/config
```

**Uji koneksi:**

```bash
ssh -T git@github.com
# atau
ssh -T git@gitlab.com
```

**Clone dengan SSH (bukan HTTPS):**

```bash
cd ~
git clone --depth 1 git@github.com:rahmatadlin/rahastha-landing-page.git
```

`--depth 1` = **shallow clone** — hemat disk dan waktu; cukup untuk deploy dari branch terbaru.

#### Private repo: alternatif fine-grained Personal Access Token (PAT)

Jika SSH tidak memungkinkan:

1. GitHub: Settings → Developer settings → Personal access tokens → **Fine-grained tokens** — scope minimal: **Contents: Read-only** untuk repo tersebut.  
2. Clone HTTPS:

```bash
git clone --depth 1 https://github.com/rahmatadlin/rahastha-landing-page.git
```

Git akan meminta username + token (token sebagai password), atau simpan di credential helper — **risiko**: token di `~/.git-credentials` atau cache; rotasi token rutin; jangan commit token.

---

### 3. Setup project di VM

Asumsi path aplikasi: `/var/www/rahastha-landing-page` (bisa disesuaikan).

```bash
sudo mkdir -p /var/www
sudo chown -R "$USER":"$USER" /var/www
cd /var/www
git clone --depth 1 git@github.com:rahmatadlin/rahastha-landing-page.git
cd rahastha-landing-page
```

**Environment production**

```bash
nano .env.production
```

Minimal:

```env
NODE_ENV=production
PORT=3000
```

Next.js membaca `.env.production` saat `next build` dan `next start`. Variabel `NEXT_PUBLIC_*` harus sudah ada **sebelum** `npm run build` jika dipakai di client.

**Install dependency production saja (hemat ruang):**

```bash
npm ci --omit=dev
```

Jika tidak ada `package-lock.json` di repo (tidak disarankan), ganti dengan:

```bash
npm install --omit=dev
```

**Build:**

```bash
npm run build
```

---

### 4. PM2

**Start aplikasi (gunakan `PORT` dari environment):**

```bash
cd /var/www/rahastha-landing-page
export PORT=3000
pm2 start npm --name "rahastha-web" -- start
```

Atau satu baris:

```bash
PORT=3000 pm2 start npm --name "rahastha-web" -- start
```

**Simpan daftar proses & auto-start saat reboot:**

```bash
pm2 save
pm2 startup
```

Jalankan perintah `sudo` yang ditampilkan PM2 (copy-paste dari output `pm2 startup`), lalu:

```bash
pm2 save
```

**Perintah berguna:**

```bash
pm2 status
pm2 logs rahastha-web
pm2 restart rahastha-web
```

---

### 5. Nginx (reverse proxy ke Next.js)

Buat site (ganti path jika berbeda):

```bash
sudo nano /etc/nginx/sites-available/rahastha
```

Isi (HTTP — sebelum SSL; domain **rahastha.id**):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name rahastha.id www.rahastha.id;

    location / {
        proxy_pass http://127.0.0.1:3000;
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

**Enable site, nonaktifkan default bila bentrok, uji & reload:**

```bash
sudo ln -sf /etc/nginx/sites-available/rahastha /etc/nginx/sites-enabled/rahastha
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

Pastikan DNS **A record** `rahastha.id` dan `www.rahastha.id` mengarah ke IP VM sebelum SSL.

**SSL dengan Certbot (HTTPS):**

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d rahastha.id -d www.rahastha.id
```

Certbot akan menambahkan blok `listen 443 ssl` dan redirect HTTP→HTTPS. Setelah itu:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

**Catatan:** Pastikan `PORT` di PM2 sama dengan `proxy_pass` (di sini **3000**).

---

### 6. Mekanisme update deployment

Alur aman setiap ada perubahan kode:

```bash
cd /var/www/rahastha-landing-page
git fetch origin
git pull --ff-only
npm ci --omit=dev
npm run build
pm2 restart rahastha-web
```

Jika hanya perubahan aset statis tanpa dependency baru, bisa skip `npm ci` — tapi untuk konsistensi production, `npm ci` setelah pull tetap disarankan.

**Contoh `deploy.sh`** (simpan di server, mis. `/var/www/rahastha-landing-page/deploy.sh`):

```bash
#!/usr/bin/env bash
set -euo pipefail
APP_DIR="/var/www/rahastha-landing-page"
cd "$APP_DIR"
git fetch origin
git pull --ff-only
npm ci --omit=dev
npm run build
pm2 restart rahastha-web
echo "Deploy selesai."
```

```bash
chmod +x deploy.sh
./deploy.sh
```

---

### 7. Optimasi production & hemat storage

- **Repository:** pastikan `.gitignore` mencakup `node_modules/`, `.next/`, `.env*.local`, log editor, dll — **jangan** commit folder build atau dependency.  
- **Server:** jangan upload `node_modules` / `.next` via SCP; selalu `npm ci --omit=dev` + `npm run build` di VM.  
- **npm cache (jika disk penuh):**

```bash
npm cache clean --force
```

- **PM2 log rotation (disarankan):**

```bash
pm2 install pm2-logrotate
```

- **Cek penggunaan disk:**

```bash
df -h
sudo du -sh /var/www/* 2>/dev/null | sort -h
du -sh ~/.npm 2>/dev/null
```

- **Next.js `output: 'standalone'` (opsional, mengurangi ukuran artefak runtime jika Anda pindah ke `node server.js` dari folder standalone)**  
  Tambahkan di `next.config.ts`:

  ```ts
  const nextConfig = { output: "standalone" as const };
  ```

  Lalu build; jalankan dengan `node .next/standalone/server.js` (dengan menyalin `public` dan `.next/static` sesuai dokumentasi Next). Untuk proyek ini, mode **`npm start`** + PM2 sudah cukup dan paling sederhana.

---

### 8. Ringkasan perintah cepat (checklist)

| Step | Perintah / aksi |
|------|------------------|
| Update OS | `sudo apt update && sudo apt upgrade -y` |
| Paket dasar | `sudo apt install -y git curl build-essential nginx ufw` |
| Node LTS | Install via NodeSource, lalu `node -v` |
| PM2 | `sudo npm install -g pm2` |
| Clone | `git clone --depth 1 git@github.com:rahmatadlin/rahastha-landing-page.git` |
| Env | Buat `.env.production` |
| Install + build | `npm ci --omit=dev && npm run build` |
| PM2 | `PORT=3000 pm2 start npm --name rahastha-web -- start` lalu `pm2 save` + `pm2 startup` |
| Nginx | File di `sites-available`, symlink `sites-enabled`, `nginx -t`, reload |
| SSL | `certbot --nginx -d rahastha.id -d www.rahastha.id` |

---

## Color Palette


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
