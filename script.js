// JavaScript untuk aksi klik pada tombol "Jelajahi"
document.getElementById('exploreBtn').addEventListener('click', function() {
    window.scrollTo({
        top: document.getElementById('products').offsetTop,
        behavior: 'smooth'
    });
});
