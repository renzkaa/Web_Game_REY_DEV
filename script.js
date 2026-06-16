// Logika Memunculkan Popup Download
function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}

// BARU: Logika Animasi Transisi Muncul Antar Section (Home -> Games -> About)
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("header, section");

    const observerOptions = {
        root: null,      // Menggunakan viewport layar browser
        threshold: 0.15  // Animasi jalan jika 15% bagian section sudah masuk layar
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan class untuk memicu animasi CSS
                entry.target.classList.add("section-visible");
                // Opsional: hapus baris di bawah jika ingin animasi berulang tiap di-scroll ulang
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});