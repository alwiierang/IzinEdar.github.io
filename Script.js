// Fungsi untuk menambahkan animasi pada tombol CTA ketika halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
  const ctaButton = document.querySelector(".cta-button");
  const ctaConsultation = document.querySelector(".cta-consultation");

  // Menambahkan efek hover untuk tombol CTA
  ctaButton.addEventListener("mouseover", function() {
    ctaButton.style.backgroundColor = "#25D366"; // Mengubah warna latar belakang
  });

  ctaButton.addEventListener("mouseout", function() {
    ctaButton.style.backgroundColor = "#4CAF50"; // Kembalikan warna semula
  });

  // Animasi untuk tombol dengan panah (tombol "Beli Sekarang!")
  const arrowButtons = document.querySelectorAll(".arrow-button");
  arrowButtons.forEach((button, index) => {
    button.addEventListener("mouseover", () => {
      button.style.transform = "scale(1.2)"; // Perbesar tombol saat hover
    });
    button.addEventListener("mouseout", () => {
      button.style.transform = "scale(1)"; // Kembalikan ukuran tombol
    });
  });

  // Fungsi untuk membuat efek scroll ke bagian tertentu saat tombol diklik
  ctaConsultation.addEventListener("click", function(event) {
    event.preventDefault(); // Menghentikan tindakan default klik link
    const targetSection = document.querySelector("#promo");
    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});
