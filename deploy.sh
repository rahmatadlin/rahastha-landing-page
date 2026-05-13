#!/usr/bin/env bash
# Deploy production: pull, install prod deps, build, restart PM2.
# Jalankan dari root repo (contoh: /var/www/rahastha-landing-page).

set -euo pipefail

cd "$(dirname "$0")"

git fetch origin
git pull --ff-only
npm ci --omit=dev
npm run build
pm2 restart rahastha-web

echo "Deploy selesai."
