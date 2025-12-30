// Initialize Lucide icons
lucide.createIcons();

// URL parametrelerini al
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const token = urlParams.get('token');

// Eğer userId veya token yoksa hata göster
if (!userId || !token) {
  document.getElementById('message').style.display = 'block';
  document.getElementById('message').className = 'message error';
  document.getElementById('message').textContent = 'Geçersiz veya eksik bağlantı. Lütfen e-postanızdaki linki kontrol edin.';
  document.getElementById('resetForm').style.display = 'none';
}

const API_BASE_URL = 'https://api.menulen.com';

// Form submit handler
document.getElementById('resetForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const messageDiv = document.getElementById('message');
  const submitBtn = document.getElementById('submitBtn');
  const loadingDiv = document.getElementById('loading');

  // Validasyon
  if (newPassword !== confirmPassword) {
    messageDiv.style.display = 'block';
    messageDiv.className = 'message error';
    messageDiv.textContent = 'Şifreler eşleşmiyor!';
    return;
  }

  if (newPassword.length < 10) {
    messageDiv.style.display = 'block';
    messageDiv.className = 'message error';
    messageDiv.textContent = 'Şifre en az 10 karakter olmalıdır!';
    return;
  }

  // Loading göster
  submitBtn.disabled = true;
  loadingDiv.classList.add('active');
  messageDiv.style.display = 'none';

  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        token: token,
        newPassword: newPassword,
        confirmPassword: confirmPassword
      })
    });

    const data = await response.json();

    if (response.ok && data.success) {
      // Başarılı
      messageDiv.style.display = 'block';
      messageDiv.className = 'message success';
      messageDiv.textContent = data.message || 'Şifreniz başarıyla sıfırlandı! Artık yeni şifrenizle giriş yapabilirsiniz.';
      document.getElementById('resetForm').style.display = 'none';

      // Mobil cihazda ise uygulamayı açmayı dene
      if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        setTimeout(function () {
          window.location.href = 'menulen://login';
        }, 2000);
      }
    } else {
      // Hata
      messageDiv.style.display = 'block';
      messageDiv.className = 'message error';
      messageDiv.textContent = data.message || 'Şifre sıfırlama başarısız. Lütfen tekrar deneyin.';
    }
  } catch (error) {
    messageDiv.style.display = 'block';
    messageDiv.className = 'message error';
    messageDiv.textContent = `Bir hata oluştu: ${error.message || error}`;
    console.error('Error:', error);
  } finally {
    submitBtn.disabled = false;
    loadingDiv.classList.remove('active');
  }
});

