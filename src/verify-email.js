// Initialize Lucide icons
lucide.createIcons();

// URL parametrelerini al
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const token = urlParams.get('token');

// API Base URL
const API_BASE_URL = 'https://api.menulen.com';

// Sayfa yüklendiğinde doğrulamayı yap
window.addEventListener('DOMContentLoaded', async function () {
  const messageDiv = document.getElementById('message');
  const loadingDiv = document.getElementById('loading');
  const iconDiv = document.getElementById('icon');

  // Eğer userId veya token yoksa hata göster
  if (!userId || !token) {
    loadingDiv.style.display = 'none';
    iconDiv.textContent = '❌';
    messageDiv.style.display = 'block';
    messageDiv.className = 'message error';
    messageDiv.textContent = 'Geçersiz veya eksik bağlantı. Lütfen e-postanızdaki linki kontrol edin.';
    return;
  }

  try {
    // Backend API'ye istek at
    const response = await fetch(`${API_BASE_URL}/api/auth/verify-email?userId=${encodeURIComponent(userId)}&token=${encodeURIComponent(token)}`);
    const data = await response.json();

    if (response.ok && data.success) {
      loadingDiv.style.display = 'none';
      iconDiv.textContent = '✅';
      messageDiv.style.display = 'block';
      messageDiv.className = 'message success';
      messageDiv.textContent = 'E-posta adresiniz başarıyla doğrulandı! Uygulama üzerinden giriş yapabilirsiniz.';
    } else {
      // Hata durumu
      loadingDiv.style.display = 'none';
      iconDiv.textContent = '❌';
      messageDiv.style.display = 'block';
      messageDiv.className = 'message error';
      messageDiv.textContent = data.message || 'E-posta doğrulama başarısız.';
    }
  } catch (error) {
    loadingDiv.style.display = 'none';
    iconDiv.textContent = '❌';
    messageDiv.style.display = 'block';
    messageDiv.className = 'message error';
    messageDiv.textContent = `Bir hata oluştu: ${error.message || error}`;
    console.error('Error:', error);
  }
});

