# 🚀 Deployment Guide - Menülen Landing Page

## 📦 Production Build

### Local Build (Development)
```bash
# Dependencies'leri yükle
npm install

# Production build oluştur
npm run build

# Build'i test et (preview)
npm run preview
```

Build çıktısı: `dist/` klasörü (2.9MB optimize edilmiş dosyalar)

---

## 🌐 Sunucuda Deployment

### Seçenek 1: **Cloudflare Pages** (Önerilen - Ücretsiz)

1. **GitHub'dan Otomatik Deploy:**
   - https://pages.cloudflare.com/ adresine git
   - "Create a project" > "Connect to Git"
   - `cemreguner/Menulen-LandingPage` repository'sini seç
   - Build ayarları:
     ```
     Build command: npm run build
     Build output directory: dist
     Root directory: /
     ```
   - "Save and Deploy" tıkla
   - Otomatik SSL sertifikası gelir
   - Custom domain: `www.menulen.com.tr` eklenebilir

2. **Her push'ta otomatik deploy olur!**

---

### Seçenek 2: **Vercel** (Ücretsiz)

```bash
# Vercel CLI yükle (global)
npm i -g vercel

# Deploy et
vercel --prod

# veya GitHub entegrasyonu
# vercel.com'da proje bağla
```

Build ayarları:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

### Seçenek 3: **Netlify** (Ücretsiz)

1. **GitHub'dan otomatik:**
   - https://app.netlify.com/start
   - Repository'yi seç
   - Build ayarları:
     ```
     Build command: npm run build
     Publish directory: dist
     ```

2. **Manual Deploy:**
   ```bash
   npm install -g netlify-cli
   npm run build
   netlify deploy --prod --dir=dist
   ```

---

### Seçenek 4: **Geleneksel Sunucu** (Apache/Nginx)

#### 1. Build al
```bash
npm install
npm run build
```

#### 2. `dist/` klasörünü sunucuya yükle
```bash
# SCP ile
scp -r dist/* user@server:/var/www/menulen.com.tr/

# veya FTP ile dist/ içeriğini public_html'e yükle
```

#### 3. Nginx Konfigürasyonu
```nginx
server {
    listen 80;
    server_name www.menulen.com.tr menulen.com.tr;
    root /var/www/menulen.com.tr;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
    
    # Cache static assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing (fallback to index.html)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}

# SSL (Let's Encrypt)
# certbot --nginx -d menulen.com.tr -d www.menulen.com.tr
```

#### 4. Apache .htaccess (varsa)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml
</IfModule>

# Cache control
<FilesMatch "\.(css|js|jpg|jpeg|png|gif|svg|woff|woff2)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

---

## 🔧 Environment Variables

Eğer API base URL'i değiştirmek isterseniz:

**`src/verify-email.js` ve `src/reset-password.js`:**
```javascript
const API_BASE_URL = 'https://api.menulen.com'; // Production
// const API_BASE_URL = 'http://localhost:3000'; // Development
```

---

## ✅ Deployment Checklist

- [ ] `npm run build` başarılı
- [ ] `npm run preview` ile test edildi
- [ ] Domain DNS ayarları yapıldı (A record veya CNAME)
- [ ] SSL sertifikası aktif (HTTPS)
- [ ] Google Search Console'a sitemap gönderildi
  - Sitemap URL: `https://www.menulen.com.tr/sitemap.xml`
- [ ] Google Analytics eklendi (opsiyonel)
- [ ] robots.txt erişilebilir: `https://www.menulen.com.tr/robots.txt`
- [ ] Manifest.json yüklü: `https://www.menulen.com.tr/manifest.json`

---

## 🔗 Faydalı Linkler

- **Build Preview:** `npm run preview` (local)
- **Google Search Console:** https://search.google.com/search-console
- **Cloudflare Pages:** https://pages.cloudflare.com
- **Vercel:** https://vercel.com
- **Netlify:** https://netlify.com

---

## 📊 Build Optimizasyonları

Mevcut build:
- ✅ Minified CSS (12.85 KB)
- ✅ Minified JS (2.90 KB)
- ✅ Gzip compression
- ✅ Asset optimization
- ✅ Tree shaking
- ✅ Code splitting

**Total size: 2.9MB** (assets dahil)

---

## 🐛 Sorun Giderme

### Build hatası alıyorsanız:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Assets yüklenmiyor:
- Base path'i kontrol edin: `vite.config.js`
- Public klasöründe dosyalar olmalı
- Nginx/Apache'de static file serving aktif olmalı

### CSS/JS yüklenmiyor:
- Browser cache'i temizleyin
- CDN cache'i temizleyin (Cloudflare Purge Cache)
- Build'i yeniden alın

