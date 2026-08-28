/* ============================================================
   Daftar kelompok dan pembagian use case project.

   56 mahasiswa dibagi 4 orang per kelompok, jadi 14 kelompok.

   Sumber use case Tableau: soal UAS Big Data Analytics 2026.
   KLP01 sampai KLP10 diambil apa adanya dari soal UAS Kelas A.
   KLP11 sampai KLP14 diambil dari soal UAS Kelas B untuk
   menyesuaikan jumlah kelompok yang sekarang.

   Tema Orange bersifat pengarah supaya dataset antar kelompok
   tidak bertabrakan. Dataset tetap dipilih sendiri dari Kaggle
   sesuai ketentuan soal UTS.
   ============================================================ */

var JUMLAH_MAHASISWA = 56;
var PER_KELOMPOK = 4;

/* ---------- Project Kuliah 1: Orange ---------- */
var KLP_ORANGE = [
  { klp: 'KLP01', tema: 'Kredit dan pinjaman',
    klasifikasi: 'Nasabah ini bakal telat bayar atau nggak?',
    regresi: 'Berapa besar plafon yang pas buat nasabah ini?',
    klaster: 'Nasabah kita sebenarnya terbagi jadi tipe apa saja?' },
  { klp: 'KLP02', tema: 'Ritel dan penjualan',
    klasifikasi: 'Transaksi ini bakal diretur atau nggak?',
    regresi: 'Berapa nilai belanja yang bisa diharapkan dari pelanggan ini?',
    klaster: 'Toko mana saja yang pola penjualannya mirip?' },
  { klp: 'KLP03', tema: 'Karyawan dan SDM',
    klasifikasi: 'Karyawan ini berisiko resign dalam setahun ke depan?',
    regresi: 'Berapa gaji yang wajar untuk posisi dengan profil seperti ini?',
    klaster: 'Karyawan kita terbagi jadi kelompok perilaku apa saja?' },
  { klp: 'KLP04', tema: 'Rumah sakit dan layanan kesehatan',
    klasifikasi: 'Pasien ini berisiko dirawat ulang?',
    regresi: 'Berapa lama pasien ini kemungkinan dirawat?',
    klaster: 'Pasien terbagi jadi kelompok kebutuhan apa saja?' },
  { klp: 'KLP05', tema: 'Pendidikan',
    klasifikasi: 'Mahasiswa ini berisiko tidak lulus tepat waktu?',
    regresi: 'Berapa nilai akhir yang diperkirakan dari pola belajarnya?',
    klaster: 'Mahasiswa terbagi jadi tipe belajar apa saja?' },
  { klp: 'KLP06', tema: 'Properti dan harga rumah',
    klasifikasi: 'Properti ini bakal laku cepat atau lama?',
    regresi: 'Berapa harga wajar rumah dengan ciri seperti ini?',
    klaster: 'Wilayah mana saja yang karakter pasarnya mirip?' },
  { klp: 'KLP07', tema: 'Transportasi dan logistik',
    klasifikasi: 'Pengiriman ini bakal telat atau tepat waktu?',
    regresi: 'Berapa ongkos kirim yang diperkirakan untuk rute ini?',
    klaster: 'Rute pengiriman terbagi jadi pola apa saja?' },
  { klp: 'KLP08', tema: 'Telekomunikasi',
    klasifikasi: 'Pelanggan ini bakal berhenti berlangganan?',
    regresi: 'Berapa tagihan bulanan yang diperkirakan dari pemakaiannya?',
    klaster: 'Pelanggan terbagi jadi kelompok pemakaian apa saja?' },
  { klp: 'KLP09', tema: 'Asuransi',
    klasifikasi: 'Klaim ini berpotensi bermasalah?',
    regresi: 'Berapa besar klaim yang diperkirakan dari profil ini?',
    klaster: 'Pemegang polis terbagi jadi kelompok risiko apa saja?' },
  { klp: 'KLP10', tema: 'Energi dan lingkungan',
    klasifikasi: 'Pemakaian bulan ini tergolong boros atau wajar?',
    regresi: 'Berapa konsumsi listrik yang diperkirakan bulan depan?',
    klaster: 'Pelanggan terbagi jadi pola konsumsi apa saja?' },
  { klp: 'KLP11', tema: 'Pariwisata dan perhotelan',
    klasifikasi: 'Pemesanan ini berpotensi dibatalkan?',
    regresi: 'Berapa tarif kamar yang wajar untuk periode ini?',
    klaster: 'Tamu terbagi jadi tipe kunjungan apa saja?' },
  { klp: 'KLP12', tema: 'Pertanian dan pangan',
    klasifikasi: 'Panen musim ini tergolong berhasil atau gagal?',
    regresi: 'Berapa hasil panen yang diperkirakan per hektar?',
    klaster: 'Daerah mana saja yang karakter lahannya mirip?' },
  { klp: 'KLP13', tema: 'Pasar modal dan investasi',
    klasifikasi: 'Emiten ini termasuk berisiko tinggi?',
    regresi: 'Berapa imbal hasil yang diperkirakan dari rasio keuangannya?',
    klaster: 'Emiten terbagi jadi kelompok profil keuangan apa saja?' },
  { klp: 'KLP14', tema: 'Layanan publik dan anggaran',
    klasifikasi: 'Program ini berisiko serapannya rendah?',
    regresi: 'Berapa realisasi anggaran yang diperkirakan sampai akhir tahun?',
    klaster: 'Unit kerja terbagi jadi pola belanja apa saja?' }
];

/* ---------- Project Kuliah 2: Tableau ---------- */
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
    audiens: 'Head of Product atau Category Manager' }
];
