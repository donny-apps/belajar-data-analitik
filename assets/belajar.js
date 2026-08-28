/* ============================================================
   Daftar bahan belajar mandiri dan sumber dataset.

   Seluruh tautan sudah diperiksa satu per satu pada 28 Agustus 2026.
   Video diperiksa lewat layanan oEmbed YouTube, jadi judul dan nama
   kanal di bawah ini diambil apa adanya dari YouTube, bukan ditulis
   dari ingatan. Kalau suatu saat ada yang mati, kabari dosen.
   ============================================================ */

/* ---------------- video Orange ---------------- */
var VIDEO_ORANGE = [
  {
    id: 'HXjnDIgGDuI', jenis: 'video', bahasa: 'Inggris',
    judul: 'Getting Started with Orange 01: Welcome to Orange',
    kanal: 'Orange Data Mining',
    guna: 'Video resmi dari pembuat Orange. Mulai dari nol: kenalan dengan kanvas, memasang widget pertama, dan menjalankan alur paling sederhana.',
    untuk: 'Tonton sebelum pertemuan 3'
  },
  {
    id: 'PLmNPvQr9Tf-ZSDLwOzxpvY-HrE0yv-8Fy', jenis: 'playlist', bahasa: 'Inggris',
    judul: 'Getting Started with Orange (seri lengkap)',
    kanal: 'Orange Data Mining',
    guna: 'Kelanjutan dari video di atas. Satu seri utuh sampai bisa memuat data sendiri, memvisualkan, dan menjalankan model.',
    untuk: 'Kalau mau paham menyeluruh'
  },
  {
    id: 'PLMVLkFFusfMA69hS3ciMN7LVPNa_sXtSj', jenis: 'playlist', bahasa: 'Indonesia',
    judul: 'Tutorial Orange Data Mining',
    kanal: 'Fahmi Noor Fiqri',
    guna: 'Seri berbahasa Indonesia yang membahas data mining secara visual di Orange. Enak buat yang belum nyaman dengan istilah bahasa Inggris.',
    untuk: 'Pilihan utama kalau bahasa Inggris masih berat'
  },
  {
    id: 'A22Mn38iz7s', jenis: 'video', bahasa: 'Indonesia',
    judul: 'Tutorial Orange Untuk Data Science dan Machine Learning',
    kanal: 'BISA AI Academy',
    guna: 'Rekaman webinar. Menjelaskan alur analisis dari data masuk sampai model jadi, dengan contoh yang dikerjakan langsung.',
    untuk: 'Gambaran menyeluruh dalam sekali duduk'
  },
  {
    id: 'WOyfHJvq8_I', jenis: 'video', bahasa: 'Indonesia',
    judul: 'Data Mining Tanpa Skill Coding Menggunakan Orange',
    kanal: 'Universitas Pendidikan Ganesha',
    guna: 'Penekanannya pas dengan kelas kita: menganalisis data tanpa menulis kode sama sekali.',
    untuk: 'Meyakinkan diri bahwa ini memang bisa dikerjakan'
  }
];

/* ---------------- video Tableau ---------------- */
var VIDEO_TABLEAU = [
  {
    id: 'M1v9ZMl0-3E', jenis: 'video', bahasa: 'Indonesia',
    judul: 'Tableau Dashboard Tutorial dalam 12 Menit',
    kanal: 'Wanda Kinasih',
    guna: 'Paling cepat. Dua belas menit, langsung jadi satu dashboard utuh di Tableau Public.',
    untuk: 'Tonton duluan sebelum pertemuan 9'
  },
  {
    id: 'kFlTFKyg5VU', jenis: 'video', bahasa: 'Indonesia',
    judul: 'Pengenalan Tableau #1',
    kanal: 'Guntur Budi',
    guna: 'Kenalan dengan tampilan Tableau: mana Rows, mana Columns, mana Marks, dan apa bedanya dimensi dengan measure.',
    untuk: 'Kalau tampilannya masih bikin bingung'
  },
  {
    id: 'mWZ2wbPY1IQ', jenis: 'video', bahasa: 'Indonesia',
    judul: 'Belajar Tableau untuk pemula, membuat dashboard data',
    kanal: 'Bima Ngulik Data',
    guna: 'Dari sambungin data sampai jadi dashboard penjualan. Alurnya mirip dengan yang diminta di Project Kuliah 2.',
    untuk: 'Latihan menyusun dashboard'
  },
  {
    id: 'MmBu7_ZOat8', jenis: 'video', bahasa: 'Indonesia',
    judul: 'Pelatihan Membuat Peta, Data Visualisasi dan Data Analitik dengan Tableau',
    kanal: 'Dias Satria',
    guna: 'Rekaman pelatihan yang cukup panjang, termasuk membuat visualisasi peta.',
    untuk: 'Kalau butuh peta di dashboard kalian'
  },
  {
    id: 'MLut9xpDRQg', jenis: 'video', bahasa: 'Indonesia',
    judul: 'Tableau Tutorial Indonesia 1, Membuat Visualisasi Peta Dunia',
    kanal: 'Dias Satria',
    guna: 'Fokus ke satu hal: bikin peta dunia yang datanya benar. Berguna buat kelompok yang datanya lintas negara.',
    untuk: 'Kelompok dengan data antarnegara'
  },
  {
    id: 'PLXBve0kMIQONML-uX4nX7v7CYMpZk6qlB', jenis: 'playlist', bahasa: 'Inggris',
    judul: 'Free Tableau Training Videos',
    kanal: 'Reporting Guru',
    guna: 'Kumpulan video latihan gratis yang cukup panjang, dari dasar sampai fitur lanjutan.',
    untuk: 'Kalau mau menggali lebih dalam'
  }
];

/* ---------------- situs dan kursus ---------------- */
var SITUS_BELAJAR = [
  { nama: 'Getting Started Orange', url: 'https://orangedatamining.com/getting-started/', ikon: '🍊',
    jenis: 'Panduan resmi', bahasa: 'Inggris', harga: 'Gratis',
    guna: 'Panduan resmi dari pembuat Orange, lengkap dengan contoh alur kerja yang bisa langsung ditiru.' },
  { nama: 'Perpustakaan Alur Kerja Orange', url: 'https://orangedatamining.com/workflows/', ikon: '🔗',
    jenis: 'Contoh siap pakai', bahasa: 'Inggris', harga: 'Gratis',
    guna: 'Kumpulan alur kerja jadi yang bisa diunduh dan dibuka di Orange. Cara tercepat memahami bentuk alur yang benar.' },
  { nama: 'Tableau Learn', url: 'https://www.tableau.com/learn', ikon: '📊',
    jenis: 'Pusat belajar resmi', bahasa: 'Inggris', harga: 'Gratis, perlu akun',
    guna: 'Video pelatihan resmi dari Tableau, disusun bertahap dari pemula sampai mahir.' },
  { nama: 'Tableau Public Gallery', url: 'https://public.tableau.com/app/discover', ikon: '🖼️',
    jenis: 'Galeri karya', bahasa: 'Inggris', harga: 'Gratis',
    guna: 'Ribuan dashboard buatan orang seluruh dunia. Bagus buat cari ide tampilan sebelum menyusun Project Kuliah 2.' },
  { nama: 'Kaggle Learn', url: 'https://www.kaggle.com/learn', ikon: '🎓',
    jenis: 'Kursus singkat', bahasa: 'Inggris', harga: 'Gratis',
    guna: 'Kursus pendek soal data, masing-masing bisa selesai dalam beberapa jam.' },
  { nama: 'Dicoding', url: 'https://www.dicoding.com', ikon: '🇮🇩',
    jenis: 'Kelas daring', bahasa: 'Indonesia', harga: 'Ada yang gratis',
    guna: 'Kelas berbahasa Indonesia, beberapa di antaranya membahas dasar analisis data.' },
  { nama: 'Makeover Monday', url: 'https://www.makeovermonday.co.uk', ikon: '🗓️',
    jenis: 'Latihan mingguan', bahasa: 'Inggris', harga: 'Gratis',
    guna: 'Tiap minggu ada satu dataset dan satu grafik untuk diperbaiki. Latihan paling ampuh buat mengasah rasa visual.' },
  { nama: 'From Data to Viz', url: 'https://www.data-to-viz.com', ikon: '🧭',
    jenis: 'Panduan memilih grafik', bahasa: 'Inggris', harga: 'Gratis',
    guna: 'Bingung pilih grafik apa? Situs ini menuntun dari bentuk data kalian ke jenis grafik yang cocok.' },
  { nama: 'Storytelling with Data', url: 'https://www.storytellingwithdata.com', ikon: '💬',
    jenis: 'Blog dan latihan', bahasa: 'Inggris', harga: 'Gratis',
    guna: 'Fokus ke cara bercerita dengan data. Cocok dibaca menjelang penyusunan rekomendasi.' }
];

/* ---------------- sumber dataset ---------------- */
var SUMBER_DATA = [
  {
    kelompok: 'Wajib untuk Project Kuliah 1', warna: 'var(--amber)', ikon: '⭐',
    catatan: 'Soal UTS mewajibkan dataset diambil dari Kaggle. Sumber lain boleh dipakai untuk latihan, tapi bukan untuk project yang dinilai.',
    isi: [
      { nama: 'Kaggle Datasets', url: 'https://www.kaggle.com/datasets', wilayah: 'Global', bayar: 'Gratis, perlu akun',
        guna: 'Ratusan ribu dataset dengan penjelasan kolom, lisensi jelas, dan sudah rapi. Pakai penyaring di kiri untuk memilih format CSV dan ukuran yang sesuai syarat.' }
    ]
  },
  {
    kelompok: 'Data Indonesia', warna: 'var(--pink)', ikon: '🇮🇩',
    catatan: 'Enak dipakai karena konteksnya dekat, jadi rekomendasi kalian lebih masuk akal. Cocok untuk latihan dan untuk Project Kuliah 2.',
    isi: [
      { nama: 'Satu Data Indonesia', url: 'https://data.go.id', wilayah: 'Nasional', bayar: 'Gratis',
        guna: 'Portal data terbuka pemerintah. Isinya lintas kementerian dan lembaga, dari anggaran sampai layanan publik.' },
      { nama: 'Badan Pusat Statistik', url: 'https://www.bps.go.id', wilayah: 'Nasional', bayar: 'Gratis',
        guna: 'Sumber resmi statistik Indonesia: kependudukan, ekonomi, ketenagakerjaan, sampai tingkat kabupaten.' },
      { nama: 'Otoritas Jasa Keuangan', url: 'https://www.ojk.go.id', wilayah: 'Nasional', bayar: 'Gratis',
        guna: 'Statistik perbankan, asuransi, dan fintech. Paling nyambung untuk tema kredit dan risiko.' }
    ]
  },
  {
    kelompok: 'Data Internasional', warna: 'var(--iris)', ikon: '🌍',
    catatan: 'Ukurannya besar dan dokumentasinya rapi. Bagus untuk latihan sebelum menggarap dataset project.',
    isi: [
      { nama: 'UCI Machine Learning Repository', url: 'https://archive.ics.uci.edu', wilayah: 'Global', bayar: 'Gratis',
        guna: 'Kumpulan dataset klasik untuk latihan klasifikasi, regresi, dan klaster. Perhatikan bahwa beberapa di antaranya termasuk yang dilarang di soal.' },
      { nama: 'World Bank Open Data', url: 'https://data.worldbank.org', wilayah: 'Global', bayar: 'Gratis',
        guna: 'Indikator pembangunan seluruh negara dari tahun ke tahun. Cocok untuk dashboard perbandingan antarnegara.' },
      { nama: 'Our World in Data', url: 'https://ourworldindata.org', wilayah: 'Global', bayar: 'Gratis',
        guna: 'Data beserta penjelasan naratifnya. Berguna untuk belajar cara menjelaskan angka, bukan cuma menampilkannya.' },
      { nama: 'Google Dataset Search', url: 'https://datasetsearch.research.google.com', wilayah: 'Global', bayar: 'Gratis',
        guna: 'Mesin pencari khusus dataset. Pakai kalau tema kalian tidak ketemu di tempat lain.' },
      { nama: 'Humanitarian Data Exchange', url: 'https://data.humdata.org', wilayah: 'Global', bayar: 'Gratis',
        guna: 'Data kebencanaan, kesehatan, dan kemanusiaan, termasuk untuk wilayah Indonesia.' },
      { nama: 'data.world', url: 'https://data.world', wilayah: 'Global', bayar: 'Gratis, perlu akun',
        guna: 'Dataset dari komunitas dengan dokumentasi yang biasanya rapi.' }
    ]
  },
  {
    kelompok: 'Khusus latihan Tableau', warna: 'var(--mint)', ikon: '📊',
    catatan: 'Sudah dirancang untuk latihan visualisasi, jadi kolomnya bersih dan siap dipakai.',
    isi: [
      { nama: 'Tableau Sample Data', url: 'https://public.tableau.com/app/resources/sample-data', wilayah: 'Global', bayar: 'Gratis',
        guna: 'Data contoh resmi dari Tableau, termasuk Superstore yang sering dipakai di kelas.' },
      { nama: 'Maven Analytics Data Playground', url: 'https://mavenanalytics.io/data-playground', wilayah: 'Global', bayar: 'Gratis',
        guna: 'Dataset latihan yang sudah dikurasi dan diberi tingkat kesulitan.' },
      { nama: 'Makeover Monday', url: 'https://www.makeovermonday.co.uk', wilayah: 'Global', bayar: 'Gratis',
        guna: 'Tiap minggu satu dataset baru beserta contoh grafik yang perlu diperbaiki.' }
    ]
  }
];
