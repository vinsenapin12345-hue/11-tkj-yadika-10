document.addEventListener('DOMContentLoaded', () => {
  // Tombol Interaktif pada Beranda
  const btnSapa = document.getElementById('btn-sapa');

  if (btnSapa) {
    btnSapa.addEventListener('click', () => {
      alert('Halo! Selamat datang di website resmi kelas kami 👋');
    });
  }

  // Smooth Scroll untuk Navigasi
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
// Fungsi Pindah Tab Jadwal
function switchTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(`tab-${tabName}`).classList.add('active');
  event.currentTarget.classList.add('active');
}
// Fungsi Membuka Lightbox Foto
function openLightbox(src, captionText) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('caption');

  lightbox.style.display = 'flex';
  lightboxImg.src = src;
  caption.innerText = captionText;
}

// Fungsi Menutup Lightbox Foto
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
// Fitur Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');

// Cek pilihan tema dari simpanan sebelumnya (localStorage)
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  if (themeToggleBtn) themeToggleBtn.innerText = '☀️';
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Simpan pilihan ke localStorage & ganti ikon tombol
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeToggleBtn.innerText = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      themeToggleBtn.innerText = '🌙';
    }
  });
}
// 1. Tombol Back to Top (Tampil saat scroll melebihi 300px)
const btnTop = document.getElementById('btn-back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTop.style.display = 'flex';
  } else {
    btnTop.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// 2. Animasi Scroll Reveal
const revealElements = document.querySelectorAll('.section, .card, .card-pengurus, .card-galeri');

// Beri class 'reveal' ke semua elemen pilihan
revealElements.forEach(el => el.classList.add('reveal'));

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Jalankan sekali saat halaman pertama dimuat
// 1. Tombol Back to Top (Tampil saat scroll melebihi 300px)
const btnTop = document.getElementById('btn-back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTop.style.display = 'flex';
  } else {
    btnTop.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// 2. Animasi Scroll Reveal
const revealElements = document.querySelectorAll('.section, .card, .card-pengurus, .card-galeri');

// Beri class 'reveal' ke semua elemen pilihan
revealElements.forEach(el => el.classList.add('reveal'));

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Jalankan sekali saat halaman pertama dimuat