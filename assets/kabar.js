/* ============================================================
   Kabar terbaru yang tampil di beranda.

   Yang paling atas yang ditampilkan. Menambah kabar baru cukup
   menyisipkan satu entri di urutan pertama, tidak perlu mengubah
   halamannya.

   Arti tiap kolom:
     label    tulisan kecil di kotak hijau
     judul    kalimat utama, tulis pendek
     isi      satu paragraf penjelas
     aksi     tulisan pada tautannya
     href     halaman tujuan
     hari     angka tanggal yang tampil besar
     bulan    nama bulan
     ket      keterangan di bawah tanggal
     sorot    keterangan tambahan, boleh dikosongkan
   ============================================================ */

var KABAR = [
  {
    label: 'Materi Baru',
    judul: 'Materi Pertemuan 11 sudah bisa diunduh',
    isi: 'Praktik Tableau lanjutan: pecah satu garis tren pakai shelf Color, bandingkan SUM dengan AVG, ' +
         'hitung pertumbuhan antar tahun lewat Quick Table Calculation, susun crosstab berwarna, ' +
         'lalu bikin peta pakai Show Me. Ada lembar kerja langkah demi langkah selama 80 menit.',
    aksi: 'Buka daftar materi',
    href: 'bahan.html#tm11',
    hari: '31',
    bulan: 'Oktober',
    ket: 'Pertemuan 11',
    sorot: '38 slide, 3 berkas'
  },
  {
    label: 'Materi Baru',
    judul: 'Materi Pertemuan 10 sudah bisa diunduh',
    isi: 'Memulai Tableau Public dari nol: bikin akun pakai email kampus, pasang aplikasinya, ' +
         'masukkan data Global Superstore, lalu susun tiga worksheet sampai terbit di profil kalian. ' +
         'Modul dan slidenya ada di daftar materi, lengkap dengan dua berkas datanya.',
    aksi: 'Buka daftar materi',
    href: 'bahan.html#tm10',
    hari: '24',
    bulan: 'Oktober',
    ket: 'Pertemuan 10',
    sorot: '28 slide, 4 berkas'
  },
  {
    label: 'Soal Ujian',
    judul: 'Soal Project UTS sudah keluar',
    isi: 'Semester Ganjil 2026/2027. Tiap kelompok mengerjakan klasifikasi, regresi, dan klaster ' +
         'sekaligus dari satu dataset Kaggle. Ketentuan lengkap, syarat dataset, bobot nilai, ' +
         'dan ceklis sebelum mengumpulkan sudah tersedia.',
    aksi: 'Buka ketentuannya',
    href: 'uts.html',
    hari: '10',
    bulan: 'Oktober',
    ket: 'Sabtu, 07.10 WIB',
    sorot: 'Kumpul sampai 23.59'
  }
];
