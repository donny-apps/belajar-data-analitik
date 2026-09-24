/* ============================================================
   Daftar kelompok dan pembagian use case project.

   Semester Ganjil TA 2026/2027, 58 mahasiswa dibagi jadi 15 kelompok.
   KLP01 sampai KLP13 beranggotakan 4 orang, KLP14 dan KLP15 tiga orang.

   Tema tiap kelompok diambil apa adanya dari lembar soal UTS yang
   sudah ditandatangani, jadi bukan karangan. Nama dan NIM anggota
   sengaja tidak dimuat di sini karena situs ini terbuka untuk umum
   dan bisa ditelusuri mesin pencari. Daftar anggotanya ada di lembar
   soal yang dibagikan lewat LEADS.

   Tiga pertanyaan di tiap kelompok bersifat pengarah, bukan soal
   yang wajib dijawab persis. Soal UTS mewajibkan tiap kelompok
   merumuskan sendiri tiga rumusan masalah dari satu dataset:
   satu untuk klasifikasi, satu untuk regresi, satu untuk klaster.
   ============================================================ */

var JUMLAH_MAHASISWA = 58;
var JUMLAH_KELOMPOK = 15;

/* ---------- Project Kuliah 1: Orange, dinilai saat UTS ---------- */
var KLP_ORANGE = [
  { klp: 'KLP01', tema: 'Customer Churn dan Retention',
    klasifikasi: 'Pelanggan ini bakal berhenti berlangganan atau bertahan?',
    regresi: 'Berapa nilai belanja bulanan yang bisa diharapkan dari pelanggan ini?',
    klaster: 'Pelanggan kita sebenarnya terbagi jadi tipe apa saja?' },
  { klp: 'KLP02', tema: 'Credit Risk dan Loan Default',
    klasifikasi: 'Peminjam ini berisiko gagal bayar atau tidak?',
    regresi: 'Berapa besar pinjaman yang wajar buat peminjam ini?',
    klaster: 'Profil peminjam kita terbagi jadi kelompok apa saja?' },
  { klp: 'KLP03', tema: 'Employee HR Analytics',
    klasifikasi: 'Karyawan ini berisiko resign dalam setahun ke depan?',
    regresi: 'Berapa besaran gaji yang sepadan buat karyawan dengan profil ini?',
    klaster: 'Karyawan kita terbagi jadi kelompok apa saja?' },
  { klp: 'KLP04', tema: 'Customer Segmentation dan Purchase Behavior',
    klasifikasi: 'Pelanggan ini bakal merespons penawaran atau tidak?',
    regresi: 'Berapa nilai belanja yang bisa diharapkan dari pelanggan ini?',
    klaster: 'Segmen pelanggan mana yang perilaku belanjanya mirip?' },
  { klp: 'KLP05', tema: 'Insurance dan Healthcare Cost',
    klasifikasi: 'Pemegang polis ini masuk kategori klaim tinggi atau rendah?',
    regresi: 'Berapa perkiraan biaya klaim untuk profil ini?',
    klaster: 'Pemegang polis terbagi jadi kelompok risiko apa saja?' },
  { klp: 'KLP06', tema: 'Real Estate dan Property Valuation',
    klasifikasi: 'Properti ini masuk kelas harga yang mana?',
    regresi: 'Berapa harga wajar properti dengan ciri seperti ini?',
    klaster: 'Wilayah mana saja yang karakter propertinya mirip?' },
  { klp: 'KLP07', tema: 'Marketing Campaign Response',
    klasifikasi: 'Calon pelanggan ini bakal merespons kampanye atau tidak?',
    regresi: 'Berapa nilai transaksi yang bisa diharapkan dari responden ini?',
    klaster: 'Sasaran kampanye kita terbagi jadi kelompok apa saja?' },
  { klp: 'KLP08', tema: 'Sales dan Revenue Analytics',
    klasifikasi: 'Transaksi ini bakal diretur atau tidak?',
    regresi: 'Berapa pendapatan yang bisa diharapkan dari pola seperti ini?',
    klaster: 'Produk atau gerai mana saja yang pola penjualannya mirip?' },
  { klp: 'KLP09', tema: 'Fraud dan Anomaly Detection',
    klasifikasi: 'Transaksi ini janggal atau wajar?',
    regresi: 'Berapa nilai kerugian yang mungkin timbul dari transaksi seperti ini?',
    klaster: 'Pola transaksi terbagi jadi kelompok perilaku apa saja?' },
  { klp: 'KLP10', tema: 'Education dan Student Performance',
    klasifikasi: 'Mahasiswa ini berisiko nilainya jatuh atau tidak?',
    regresi: 'Berapa perkiraan nilai akhir dari pola belajar seperti ini?',
    klaster: 'Mahasiswa terbagi jadi tipe belajar apa saja?' },
  { klp: 'KLP11', tema: 'Financial Distress dan Bankruptcy Prediction',
    klasifikasi: 'Perusahaan ini berisiko mengalami kesulitan keuangan?',
    regresi: 'Berapa perkiraan rasio keuangan utama perusahaan seperti ini?',
    klaster: 'Perusahaan terbagi jadi kelompok kesehatan keuangan apa saja?' },
  { klp: 'KLP12', tema: 'Fintech dan Digital Payment',
    klasifikasi: 'Pengguna ini bakal aktif bertransaksi atau berhenti?',
    regresi: 'Berapa nilai transaksi bulanan yang bisa diharapkan dari pengguna ini?',
    klaster: 'Pengguna layanan terbagi jadi kelompok perilaku apa saja?' },
  { klp: 'KLP13', tema: 'Supply Chain dan Inventory',
    klasifikasi: 'Pengiriman ini bakal telat atau tepat waktu?',
    regresi: 'Berapa jumlah persediaan yang perlu disiapkan untuk pola ini?',
    klaster: 'Produk atau pemasok mana saja yang polanya mirip?' },
  { klp: 'KLP14', tema: 'Hospitality dan Booking Cancellation', anggota: 3,
    klasifikasi: 'Pemesanan ini bakal dibatalkan atau tidak?',
    regresi: 'Berapa perkiraan pendapatan dari pemesanan seperti ini?',
    klaster: 'Tamu terbagi jadi kelompok perilaku menginap apa saja?' },
  { klp: 'KLP15', tema: 'ESG dan Corporate Sustainability', anggota: 3,
    klasifikasi: 'Perusahaan ini masuk kategori kinerja ESG yang mana?',
    regresi: 'Berapa perkiraan skor ESG dari ciri perusahaan seperti ini?',
    klaster: 'Perusahaan terbagi jadi kelompok praktik keberlanjutan apa saja?' }
];

var KLP_TABLEAU = [
  { klp: 'KLP01', judul: 'Profitability Analytics', sumber: 'uas',
    tanya: 'Di kategori dan subkategori produk mana perusahaan paling untung, dan produk mana yang justru bikin rugi?',
    audiens: 'Head of Product atau Chief Merchandising Officer' },
  { klp: 'KLP02', judul: 'Regional dan Market Performance', sumber: 'uas',
    tanya: 'Wilayah dan pasar mana yang sumbangannya paling besar ke pendapatan dan untung, dan di mana perusahaan perlu memperkuat posisi?',
    audiens: 'Head of Regional Sales atau VP Sales' },
  { klp: 'KLP03', judul: 'Customer Segmentation Analytics', sumber: 'uas',
    tanya: 'Bagaimana profil tiap segmen pelanggan, dan segmen mana yang paling bernilai buat perusahaan?',
    audiens: 'Head of Marketing atau Customer Success Manager' },
  { klp: 'KLP04', judul: 'Shipping dan Operational Efficiency', sumber: 'uas',
    tanya: 'Apakah biaya dan waktu pengiriman sudah efisien, dan bagaimana pilihan mode kirim memengaruhi untung?',
    audiens: 'Head of Operations atau Supply Chain Manager' },
  { klp: 'KLP05', judul: 'Discount Strategy Analysis', sumber: 'uas',
    tanya: 'Apakah diskon selama ini benar-benar mendorong penjualan, atau malah terus menggerus untung?',
    audiens: 'Chief Financial Officer atau Head of Pricing' },
  { klp: 'KLP06', judul: 'Furniture Category Deep Dive', sumber: 'uas',
    tanya: 'Kenapa kategori Furniture untungnya rendah bahkan minus, dan apa saran perbaikannya?',
    audiens: 'Category Manager Furniture' },
  { klp: 'KLP07', judul: 'Technology Category Growth Engine', sumber: 'uas',
    tanya: 'Bagaimana kategori Technology jadi mesin pertumbuhan, dan subkategori mana yang paling layak diperbesar?',
    audiens: 'Category Manager Technology atau Head of Growth' },
  { klp: 'KLP08', judul: 'Order Priority dan Service Level', sumber: 'uas',
    tanya: 'Apakah penanganan pesanan berdasarkan prioritas sudah sejalan dengan kecepatan kirim, dan di mana ada kesenjangan layanan?',
    audiens: 'Head of Customer Service atau COO' },
  { klp: 'KLP09', judul: 'Financial Risk dan Loss Detection', sumber: 'uas',
    tanya: 'Di mana kebocoran keuangan terbesar dalam operasional, dan pola apa yang menandai transaksi berisiko tinggi?',
    audiens: 'Internal Auditor atau Chief Risk Officer' },
  { klp: 'KLP10', judul: 'Executive Performance Dashboard', sumber: 'uas',
    tanya: 'Bagaimana kondisi kesehatan bisnis secara keseluruhan, dan apa tiga prioritas utama buat manajemen?',
    audiens: 'CEO atau jajaran direksi' },
  { klp: 'KLP11', judul: 'Revenue dan Profit Trend', sumber: 'tambahan',
    tanya: 'Bagaimana tren pendapatan dan untung bergerak sepanjang periode, dan bulan mana yang menunjukkan keanehan?',
    audiens: 'Chief Financial Officer' },
  { klp: 'KLP12', judul: 'Payment Mode dan Transaction Analytics', sumber: 'tambahan',
    tanya: 'Cara bayar mana yang paling sering dipakai, dan apakah pilihan cara bayar berhubungan dengan nilai transaksi dan untung?',
    audiens: 'Head of Finance atau Chief Accounting Officer' },
  { klp: 'KLP13', judul: 'Order Status dan Fulfilment Quality', sumber: 'tambahan',
    tanya: 'Berapa banyak pesanan yang batal atau bermasalah, dan di titik mana proses pemenuhan pesanan paling sering gagal?',
    audiens: 'Head of Customer Service atau COO' },
  { klp: 'KLP14', judul: 'Product Category Performance', sumber: 'tambahan',
    tanya: 'Kategori produk mana yang jadi mesin pertumbuhan, dan subkategori mana yang justru menahan laju?',
    audiens: 'Head of Product atau Category Manager' },
  { klp: 'KLP15', judul: 'Sustainability dan Dampak Operasional', sumber: 'tambahan',
    tanya: 'Bagaimana kegiatan operasional memengaruhi biaya dan jejak keberlanjutan perusahaan, dan bagian mana yang paling layak dibenahi?',
    audiens: 'Head of Sustainability atau Chief Operating Officer' }
];
