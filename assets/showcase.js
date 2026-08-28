/* ============================================================
   Katalog project kakak tingkat, hasil UTS Project Kuliah 1.

   Dua puluh presentasi dikelompokkan jadi sembilan tema dan
   dibagikan sebagai bahan terbuka atas keputusan dosen pengampu,
   supaya kelas berjalan punya patokan mutu yang jelas.

   Berkasnya sudah dikecilkan dari 161 MB jadi 39 MB dengan cara
   menurunkan resolusi gambar di dalamnya. Teksnya tetap teks,
   jadi masih bisa disalin dan dicari.

   Tiga presentasi tidak ikut dibagikan karena memuat foto pribadi
   mahasiswa di sampulnya: B KLP05, B KLP08, dan B KLP09. Judulnya
   tetap ditampilkan di katalog, berkasnya dibuka di kelas saja.
   ============================================================ */

var SHOWCASE_TEMA = [
  {
    id: 'pelanggan', nama: 'Pelanggan dan Retensi', ikon: '🛍️', warna: 'var(--iris)',
    ringkas: 'Menebak pelanggan yang bakal kabur, dan mengelompokkan pelanggan berdasarkan perilaku belanjanya.',
    dipakai: 'Paling laku dipakai e-commerce, telko, dan perbankan.'
  },
  {
    id: 'kredit', nama: 'Kredit dan Risiko Gagal Bayar', ikon: '💳', warna: 'var(--pink)',
    ringkas: 'Menilai calon peminjam layak dikasih pinjaman atau berisiko macet.',
    dipakai: 'Bank, multifinance, dan fintech pinjaman.'
  },
  {
    id: 'sdm', nama: 'Karyawan dan SDM', ikon: '👥', warna: 'var(--mint)',
    ringkas: 'Menebak karyawan yang berpotensi resign, plus mengelompokkan profil karyawan.',
    dipakai: 'Divisi SDM di perusahaan mana pun.'
  },
  {
    id: 'kesehatan', nama: 'Asuransi dan Kesehatan', ikon: '🏥', warna: 'var(--cyan)',
    ringkas: 'Memperkirakan besaran biaya klaim dan mengenali pola pemegang polis.',
    dipakai: 'Asuransi, rumah sakit, dan BPJS.'
  },
  {
    id: 'properti', nama: 'Properti', ikon: '🏠', warna: 'var(--amber)',
    ringkas: 'Memperkirakan harga wajar rumah dan mengelompokkan karakter wilayah.',
    dipakai: 'Agen properti, bank untuk penilaian agunan, dan pengembang.'
  },
  {
    id: 'pemasaran', nama: 'Pemasaran', ikon: '📣', warna: 'var(--violet)',
    ringkas: 'Menebak siapa yang bakal merespons kampanye promosi, biar anggaran nggak terbuang.',
    dipakai: 'Tim pemasaran bank dan ritel.'
  },
  {
    id: 'fraud', nama: 'Fraud dan Anomali', ikon: '🔎', warna: '#ff7a2f',
    ringkas: 'Mencari transaksi janggal di tengah tumpukan data yang kelihatan normal.',
    dipakai: 'Audit internal, kantor akuntan publik, dan tim antifraud.'
  },
  {
    id: 'pendidikan', nama: 'Pendidikan', ikon: '🎓', warna: '#4c8dff',
    ringkas: 'Menebak mahasiswa yang berisiko nilainya jatuh dan mengelompokkan pola belajar.',
    dipakai: 'Sekolah, kampus, dan lembaga bimbingan belajar.'
  },
  {
    id: 'penjualan', nama: 'Penjualan dan Pendapatan', ikon: '📈', warna: '#12b981',
    ringkas: 'Memperkirakan penjualan periode berikutnya dan membaca pola pendapatan.',
    dipakai: 'Ritel, supermarket, dan distributor.'
  }
];

var SHOWCASE = [
  { kode: 'A-KLP01', kelas: 'A', klp: 'KLP01', tema: 'pelanggan', slide: 16,
    judul: 'Telco Customer Churn',
    catatan: 'Menebak pelanggan telko yang bakal berhenti berlangganan, lalu dicari pola siapa saja mereka.',
    berkas: 'project-kakak-tingkat/A_KLP01_Presentasi.pdf' },
  { kode: 'A-KLP04', kelas: 'A', klp: 'KLP04', tema: 'pelanggan', slide: 15,
    judul: 'Customer Segmentation dan Purchase Behavior',
    catatan: 'Membagi pelanggan jadi beberapa tipe berdasarkan cara mereka belanja.',
    berkas: 'project-kakak-tingkat/A_KLP04_Presentasi.pdf' },
  { kode: 'B-KLP01', kelas: 'B', klp: 'KLP01', tema: 'pelanggan', slide: 14,
    judul: 'Customer Churn dan Retention pada E-Commerce',
    catatan: 'Sama seperti kasus telko, tapi konteksnya belanja online.',
    berkas: 'project-kakak-tingkat/B_KLP01_Presentasi.pdf' },
  { kode: 'B-KLP04', kelas: 'B', klp: 'KLP04', tema: 'pelanggan', slide: 17,
    judul: 'Customer Purchasing Behavior',
    catatan: 'Membaca kebiasaan belanja untuk menebak pembelian berikutnya.',
    berkas: 'project-kakak-tingkat/B_KLP04_Presentasi.pdf' },

  { kode: 'A-KLP02', kelas: 'A', klp: 'KLP02', tema: 'kredit', slide: 23,
    judul: 'Persetujuan Pinjaman Berdasarkan Karakteristik Peminjam',
    catatan: 'Presentasi paling tebal di angkatan ini, 23 slide.',
    berkas: 'project-kakak-tingkat/A_KLP02_Presentasi.pdf' },
  { kode: 'B-KLP02', kelas: 'B', klp: 'KLP02', tema: 'kredit', slide: 16,
    judul: 'Kelayakan Kredit dan Risiko Gagal Bayar',
    catatan: 'Menilai nasabah layak dikasih kredit atau berisiko macet.',
    berkas: 'project-kakak-tingkat/B_KLP02_Presentasi.pdf' },

  { kode: 'A-KLP03', kelas: 'A', klp: 'KLP03', tema: 'sdm', slide: 11,
    judul: 'Employee HR Analytics',
    catatan: 'Presentasi paling ringkas, 11 slide, tapi tiga analisisnya lengkap.',
    berkas: 'project-kakak-tingkat/A_KLP03_Presentasi.pdf' },
  { kode: 'B-KLP03', kelas: 'B', klp: 'KLP03', tema: 'sdm', slide: 15,
    judul: 'Turnover Karyawan',
    catatan: 'Dibuka dengan data turnover di Indonesia yang mencapai belasan persen.',
    berkas: 'project-kakak-tingkat/B_KLP03_Presentasi.pdf' },

  { kode: 'A-KLP05', kelas: 'A', klp: 'KLP05', tema: 'kesehatan', slide: 13,
    judul: 'Medical Insurance Cost',
    catatan: 'Memperkirakan biaya asuransi kesehatan dari profil pemegang polis.',
    berkas: 'project-kakak-tingkat/A_KLP05_Presentasi.pdf' },
  { kode: 'B-KLP05', kelas: 'B', klp: 'KLP05', tema: 'kesehatan', slide: 15,
    judul: 'Insurance dan Healthcare Cost',
    catatan: 'Sudut pandang mirip, tapi datanya digabung dengan biaya layanan kesehatan.',
    berkas: null, adaFoto: true },

  { kode: 'A-KLP06', kelas: 'A', klp: 'KLP06', tema: 'properti', slide: 13,
    judul: 'Real Estate dan Property Valuation',
    catatan: 'Menaksir nilai properti dari ciri fisik dan lokasinya.',
    berkas: 'project-kakak-tingkat/A_KLP06_Presentasi.pdf' },
  { kode: 'B-KLP06', kelas: 'B', klp: 'KLP06', tema: 'properti', slide: 20,
    judul: 'Harga Rumah dan Segmentasi Properti',
    catatan: 'Menggabungkan penaksiran harga dengan pengelompokan wilayah.',
    berkas: 'project-kakak-tingkat/B_KLP6_Presentasi.pdf' },

  { kode: 'A-KLP07', kelas: 'A', klp: 'KLP07', tema: 'pemasaran', slide: 14,
    judul: 'Marketing Campaign Response on Bank',
    catatan: 'Menebak nasabah mana yang bakal merespons tawaran produk bank.',
    berkas: 'project-kakak-tingkat/A_KLP07_Presentasi.pdf' },
  { kode: 'B-KLP07', kelas: 'B', klp: 'KLP07', tema: 'pemasaran', slide: 17,
    judul: 'Marketing Campaign Response',
    catatan: 'Kasus serupa dengan penekanan pada efektivitas anggaran promosi.',
    berkas: 'project-kakak-tingkat/B_KLP07_Presentasi.pdf' },

  { kode: 'A-KLP09', kelas: 'A', klp: 'KLP09', tema: 'fraud', slide: 15,
    judul: 'Fraud and Anomaly Detection',
    catatan: 'Tema yang paling dekat dengan kerja auditor. Wajib dilihat kalau kalian minat audit.',
    berkas: 'project-kakak-tingkat/A_KLP09_Presentasi.pdf' },
  { kode: 'B-KLP09', kelas: 'B', klp: 'KLP09', tema: 'fraud', slide: 14,
    judul: 'Fraud and Anomaly Detection pada Healthcare',
    catatan: 'Deteksi kecurangan klaim di layanan kesehatan.',
    berkas: null, adaFoto: true },

  { kode: 'A-KLP10', kelas: 'A', klp: 'KLP10', tema: 'pendidikan', slide: 14,
    judul: 'Education dan Student Performance',
    catatan: 'Menebak performa belajar mahasiswa dari kebiasaan hariannya.',
    berkas: 'project-kakak-tingkat/A_KLP10_Presentasi.pdf' },
  { kode: 'B-KLP10', kelas: 'B', klp: 'KLP10', tema: 'pendidikan', slide: 15,
    judul: 'Education dan Student Performance',
    catatan: 'Tema sama dengan kelas A, menarik dibandingkan cara mereka menyusun analisisnya.',
    berkas: 'project-kakak-tingkat/B_KLP10_Presentasi.pdf' },

  { kode: 'A-KLP08', kelas: 'A', klp: 'KLP08', tema: 'penjualan', slide: 14,
    judul: 'Sales dan Revenue pada Supermart Dataset',
    catatan: 'Membaca pola penjualan ritel untuk menopang keputusan bisnis.',
    berkas: 'project-kakak-tingkat/A_KLP08_Presentasi.pdf' },
  { kode: 'B-KLP08', kelas: 'B', klp: 'KLP08', tema: 'penjualan', slide: 12,
    judul: 'Sales and Revenue Prediction Analysis',
    catatan: 'Memperkirakan pendapatan periode berikutnya.',
    berkas: null, adaFoto: true }
];
