// Internationalization (i18n) support
const translations = {
  tr: {
    // Navigation
    'nav.home': 'Giriş',
    'nav.about': 'Hakkında',
    'nav.contact': 'İletişim',
    'nav.download': 'İndir',
    
    // Hero Section
    'hero.title1': 'Gitmeden Gör.',
    'hero.title2': 'Bilerek Seç.',
    'hero.description': '"Bugün ne yesek?", "Fiyatlar nasıl?" sorularına son! Şehrindeki yüzlerce kafe ve restoranın güncel menülerini ve fiyatlarını anında keşfet',
    
    // Features Section
    'features.title': 'Özellikler',
    'features.subtitle': 'Google Maps\'ten restoranı bulun, topluluk tarafından yüklenen güncel menüleri ve fotoğrafları inceleyin.',
    'features.maps.title': 'Haritada Arama',
    'features.maps.description': 'Google Maps altyapısıyla yakınınızdaki veya aradığınız tüm restoranlara anında ulaşın.',
    'features.menus.title': 'GÜNCEL MENÜLER',
    'features.menus.description': 'Kullanıcılar tarafından yüklenen fotoğraflar ve URL\'ler ile her zaman en güncel menülere bakın.',
    'features.ratings.title': 'PUAN & YORUM',
    'features.ratings.description': 'Sadece yemeğe değil, menülerin güncelliğine ve doğruluğuna da puan verin, topluluğa katılın.',
    
    // About Section
    'about.title': 'Nedir?',
    'about.what.title': 'Menülen Nedir?',
    'about.what.description': '"Gitmeden Gör, Bilerek Seç" felsefesiyle yola çıktık. Menülen, restoran ve kafe ziyaretçilerinin en sık yaşadığı "Fiyatlar ne kadar?", "Acaba menüde ne var?" veya "Aradığım o özel tatlı burada var mı?" gibi sorulara en net cevabı vermek için kurulmuş bir topluluk platformudur.',
    'about.vision.title': 'Vizyonumuz',
    'about.vision.description': 'Türkiye\'deki tüm yeme-içme mekanlarının menülerine tek bir yerden, güncel ve şeffaf bir şekilde ulaşılmasını sağlamak.',
    'about.how.title': 'Bu Nasıl Çalışıyor?',
    'about.how.description': 'Menülen\'in gücü, Google Maps\'in kapsamlı restoran veritabanı ile siz değerli kullanıcılarımızın katkılarını birleştirmekten gelir:',
    'about.step1.title': 'Siz Yüklersiniz',
    'about.step1.description': 'Gittiğiniz bir mekanın menü fotoğrafını çeker veya menü URL\'ini yüklersiniz.',
    'about.step2.title': 'Siz Yorumlarsınız',
    'about.step2.description': 'Sadece yemeği değil, menünün doğruluğunu veya güncelliğini de puanlarsınız.',
    'about.step3.title': 'Biz Doğrularız',
    'about.step3.description': 'Eklenen her içerik, admin ekibimizin onayından geçerek yayınlanır.',
    'about.step4.title': 'Herkes Görür',
    'about.step4.description': 'Başka bir kullanıcı sizin eklediğiniz güncel menüye bakarak bilerek seçim yapar.',
    'about.summary': 'Kısacası Menülen, bir restorana gitmeden önce bilinçli karar vermenizi sağlayan dijital menü rehberinizdir.',
    
    // Download Section
    'download.title': 'Hemen İndir',
    'download.description': 'Menülen\'i telefonuna indir ve keşfetmeye başla!',
    'download.coming': 'Android sürümü çok yakında!',
    
    // Contact Section
    'contact.title': 'İletişim',
    'contact.subtitle': 'Sorularınız veya önerileriniz için bizimle iletişime geçin',
    'contact.email': 'E-posta',
    'contact.instagram': 'Instagram',
    
    // Footer
    'footer.privacy': 'Gizlilik Politikası',
    'footer.rights': 'Tüm hakları saklıdır.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.download': 'Download',
    
    // Hero Section
    'hero.title1': 'See Before You Go.',
    'hero.title2': 'Choose Wisely.',
    'hero.description': 'No more "What should we eat today?" or "How much does it cost?" Instantly discover up-to-date menus and prices from hundreds of cafes and restaurants in your city',
    
    // Features Section
    'features.title': 'Features',
    'features.subtitle': 'Find restaurants on Google Maps, browse current menus and photos uploaded by the community.',
    'features.maps.title': 'MAP SEARCH',
    'features.maps.description': 'Instantly access all restaurants near you or search anywhere with Google Maps infrastructure.',
    'features.menus.title': 'CURRENT MENUS',
    'features.menus.description': 'Always check the latest menus with photos and URLs uploaded by users.',
    'features.ratings.title': 'RATINGS & REVIEWS',
    'features.ratings.description': 'Rate not just the food, but also the accuracy and currency of menus. Join the community.',
    
    // About Section
    'about.title': 'What is it?',
    'about.what.title': 'What is Menulen?',
    'about.what.description': 'We started with the philosophy "See Before You Go, Choose Wisely". Menulen is a community platform created to provide the clearest answers to the most common questions restaurant and cafe visitors have, such as "How much does it cost?", "What\'s on the menu?" or "Do they have that special dessert I\'m looking for?"',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To provide access to menus of all dining establishments in Turkey from a single place, in a current and transparent way.',
    'about.how.title': 'How Does It Work?',
    'about.how.description': 'Menulen\'s power comes from combining Google Maps\' comprehensive restaurant database with contributions from you, our valued users:',
    'about.step1.title': 'You Upload',
    'about.step1.description': 'Take a photo of the menu at a venue you visit or upload the menu URL.',
    'about.step2.title': 'You Review',
    'about.step2.description': 'Rate not only the food but also the accuracy or currency of the menu.',
    'about.step3.title': 'We Verify',
    'about.step3.description': 'Every content added is published after approval by our admin team.',
    'about.step4.title': 'Everyone Sees',
    'about.step4.description': 'Another user makes an informed choice by looking at the current menu you added.',
    'about.summary': 'In short, Menulen is your digital menu guide that helps you make informed decisions before visiting a restaurant.',
    
    // Download Section
    'download.title': 'Download Now',
    'download.description': 'Download Menulen to your phone and start exploring!',
    'download.coming': 'Android version coming soon!',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with us for questions or suggestions',
    'contact.email': 'Email',
    'contact.instagram': 'Instagram',
    
    // Footer
    'footer.privacy': 'Privacy Policy',
    'footer.rights': 'All rights reserved.',
  }
};

class I18n {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.init();
  }

  detectLanguage() {
    // Check if user has a saved preference
    const savedLang = localStorage.getItem('menulen_lang');
    if (savedLang && (savedLang === 'tr' || savedLang === 'en')) {
      return savedLang;
    }

    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    
    // Check if it's Turkish
    if (browserLang.toLowerCase().startsWith('tr')) {
      return 'tr';
    }
    
    // Default to English for all other languages
    return 'en';
  }

  init() {
    // Apply translations on page load
    this.applyTranslations();
    
    // Save preference
    localStorage.setItem('menulen_lang', this.currentLang);
    
    // Update HTML lang attribute
    document.documentElement.lang = this.currentLang;
  }

  applyTranslations() {
    // Get all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.translate(key);
      
      if (translation) {
        // Check if it's an input placeholder
        if (element.hasAttribute('placeholder')) {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
  }

  translate(key) {
    return translations[this.currentLang][key] || key;
  }

  setLanguage(lang) {
    if (lang !== 'tr' && lang !== 'en') return;
    
    this.currentLang = lang;
    localStorage.setItem('menulen_lang', lang);
    document.documentElement.lang = lang;
    this.applyTranslations();
  }

  getCurrentLanguage() {
    return this.currentLang;
  }
}

// Export for use in main.js
window.I18n = I18n;

