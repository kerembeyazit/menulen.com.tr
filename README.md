# Menülen Landing Page

Modern ve responsive bir app landing page tasarımı.

## Özellikler

- ✨ Modern ve şık tasarım
- 📱 Tamamen responsive (mobil, tablet, desktop)
- 🎨 Özelleştirilebilir renk teması
- 🖼️ Otomatik ekran görüntüsü carousel'i
- 🎯 Smooth scroll navigasyon
- ⚡ Vite ile hızlı geliştirme
- 🎭 Smooth animasyonlar ve geçişler

## Teknolojiler

- [Vite](https://vitejs.dev/) - Build tool
- Vanilla JavaScript
- CSS3 (Flexbox & Grid)
- HTML5

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development sunucusunu başlat
npm run dev

# Production build
npm run build

# Build'i önizle
npm run preview
```

## Geliştirme

Sunucu başlatıldıktan sonra tarayıcınızda şu adresi açın:
```
http://localhost:5173/
```

## Proje Yapısı

```
landing/
├── public/
│   └── assets/
│       ├── logo.png
│       └── screens/          # Uygulama ekran görüntüleri
│           ├── Home.png
│           ├── Place Detail.png
│           ├── Lists.png
│           ├── List Details.png
│           └── Favorites.png
├── src/
│   ├── main.js              # Ana JavaScript dosyası
│   └── style.css            # Stil dosyası
└── index.html               # Ana HTML dosyası
```

## Özelleştirme

### Renk Teması

`src/style.css` dosyasındaki CSS değişkenlerini düzenleyerek renk temasını değiştirebilirsiniz:

```css
:root {
  --primary-color: #FE1D16;    /* Ana renk */
  --text-dark: #373737;        /* Koyu metin */
  --text-light: #FFF;          /* Açık metin */
}
```

### Ekran Görüntüleri

Carousel'de gösterilecek ekran görüntülerini değiştirmek için `public/assets/screens/` klasörüne yeni görseller ekleyin ve `index.html` dosyasındaki `.screen-image` elementlerini güncelleyin.

## Bölümler

1. **Hero** - Ana başlık ve uygulama ekran görüntüleri carousel'i
2. **Özellikler** - Uygulamanın ana özellikleri
3. **Hakkında** - Uygulama hakkında detaylı bilgi
4. **İndir** - App Store ve Google Play download butonları
5. **İletişim** - İletişim bilgileri

## Lisans

© 2025 Menülen. Tüm hakları saklıdır.

