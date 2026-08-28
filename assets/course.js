/* ============================================================
   Data Perkuliahan - Big Data Analytics untuk Akuntansi
   Satu file ini adalah sumber data seluruh website.
   Untuk menambah materi baru: cukup edit array COURSE di bawah,
   halaman katalog materi dan daftar materi akan ikut ter-update sendiri.

   Keterangan field:
     tm       : nomor pertemuan
     judul    : judul pertemuan
     tahap     : 1..4 (Fondasi, Data Mining, Tableau, Showcase)
     status   : 'siap' | 'rencana'
     ringkas  : satu kalimat isi pertemuan
     tujuan   : capaian pembelajaran pertemuan
     tautan   : { label, path, tipe } path relatif dari folder website
     internal : halaman deck HTML di dalam website ini
   ============================================================ */

var BASE = 'materi/';

var FASE = [
  { id: 1, nama: 'Dasar', ikon: '🧱', warna: '#0284c7', rentang: 'TM1 - TM2', output: 'Cara mikir sebelum sentuh data' },
  { id: 2, nama: 'Project 1 - Cari Pola', ikon: '⛏️', warna: '#d97706', rentang: 'TM3 - TM8', output: 'Laporan analisis pakai Orange' },
  { id: 3, nama: 'Project 2 - Dashboard', ikon: '📊', warna: '#059669', rentang: 'TM9 - TM15', output: 'Dashboard yang bisa diklik' },
  { id: 4, nama: 'Tampil di Depan', ikon: '🏆', warna: '#7c3aed', rentang: 'TM16', output: 'Presentasi final dan portofolio' }
];

var COURSE = [
  {
    tm: 1, fase: 1, status: 'siap',
    judul: 'Overview Perkuliahan, Project dan Cara Belajar',
    ringkas: 'Kenalan sama mata kuliah, konsep 5V, cara mikir dari data ke keputusan, plus simulasi deteksi angka palsu.',
    tujuan: 'Ngerti kelas ini mau bawa kalian ke mana.',
    internal: 'tm1.html',
    tautan: []
  },
  {
    tm: 2, fase: 1, status: 'siap',
    judul: 'Konsep Big Data Analytics',
    ringkas: 'Ngobrolin apa itu big data, jenis-jenis analisis, dan batas etis pakai data orang.',
    tujuan: 'Bisa bedain analisis yang cuma nyeritain masa lalu sama yang ngeramal masa depan.',
    tautan: [{ label: 'Slide TM2', path: 'TM2_Konsep Big_Data_Analytics.pptx', tipe: 'pptx' }]
  },
  {
    tm: 3, fase: 2, status: 'siap',
    judul: 'Pengenalan Orange dan Data Mining',
    ringkas: 'Install Orange, kenalan sama kanvasnya, dan urutan kerja analisis dari awal sampai selesai.',
    tujuan: 'Bisa bikin alur analisis sederhana di Orange.',
    tautan: [{ label: 'Modul TM3 Orange Data Mining', path: 'TM3_Orange_DataMining_Donny.pdf', tipe: 'pdf' }]
  },
  {
    tm: 4, fase: 2, status: 'siap',
    judul: 'Ngintip dan Bersihin Data',
    ringkas: 'Ngintip isi data: mana yang kosong, mana yang aneh, mana yang harus dibersihin dulu.',
    tujuan: 'Bisa nyiapin data sebelum diolah.',
    tautan: [
      { label: 'Modul TM4 Eksplorasi Data', path: 'TM4_Eksplorasi_Data_Iris.pdf', tipe: 'pdf' },
      { label: 'Slide TM4', path: 'TM4_Eksplorasi_Data_Iris.pptx', tipe: 'pptx' },
      { label: 'Workflow Orange TM4 EDA', path: 'ORANGE/TM4-EDA.ows', tipe: 'ows' },
      { label: 'Workflow Orange TM4 EDA B', path: 'ORANGE/TM4-EDA B.ows', tipe: 'ows' },
      { label: 'Dataset Seed (csv)', path: 'ORANGE/Seed_Data.csv', tipe: 'data' },
      { label: 'Dataset Seed (txt)', path: 'ORANGE/seeds_dataset.txt', tipe: 'data' }
    ]
  },
  {
    tm: 5, fase: 2, status: 'siap',
    judul: 'Klasifikasi dan Cara Ngecek Hasilnya',
    ringkas: 'Bikin model yang nebak kategori, terus ngecek tebakannya sering meleset apa nggak.',
    tujuan: 'Bisa bikin model penebak dan tahu cara ngukur akurasinya.',
    tautan: [
      { label: 'Modul TM5 Big Data Analytics', path: 'TM5_Big_Data_Analytics.pdf', tipe: 'pdf' },
      { label: 'Workflow Orange Klasifikasi', path: 'ORANGE/TM5-CLASSIFICATION.ows', tipe: 'ows' }
    ]
  },
  {
    tm: 6, fase: 2, status: 'siap',
    judul: 'Klasterisasi dan Regresi',
    ringkas: 'Ngelompokin data yang mirip, dan nebak angka pakai garis tren.',
    tujuan: 'Bisa milih teknik yang cocok sama pertanyaan kalian.',
    tautan: [
      { label: 'Modul TM6 Klastering dan Regresi', path: 'TM6_Klutering regression.pdf', tipe: 'pdf' },
      { label: 'Slide TM6', path: 'TM6_Klutering regression.pptx', tipe: 'pptx' }
    ]
  },
  {
    tm: 7, fase: 2, status: 'siap',
    judul: 'Association Rules Mining dan Briefing UTS',
    ringkas: 'Nyari barang yang sering dibeli barengan, lanjut pengarahan tugas UTS.',
    tujuan: 'Bisa baca pola yang beli A biasanya beli B, dan siap ngerjain Project 1.',
    tautan: [
      { label: 'Modul TM7 Association Rules', path: 'TM7_Association_Rules_Mining.pdf', tipe: 'pdf' },
      { label: 'Slide TM7', path: 'TM7_Association_Rules_Mining.pptx', tipe: 'pptx' },
      { label: 'Briefing UTS 2026', path: 'TM7_Briefing_UTS_BDA_2026.pdf', tipe: 'pdf' },
      { label: 'Slide Briefing UTS', path: 'TM7_Briefing_UTS_BDA_2026.pptx', tipe: 'pptx' }
    ]
  },
  {
    tm: 8, fase: 2, status: 'siap', milestone: 'UTS',
    judul: 'UTS - Dinilai pas Project 1',
    ringkas: 'Kumpulin laporan Project 1 dan presentasi kelompok.',
    tujuan: 'Nunjukin analisis lengkap: masalahnya apa, diolah gimana, hasilnya apa, sarannya apa.',
    tautan: [
    ]
  },
  {
    tm: 9, fase: 3, status: 'siap',
    judul: 'Tableau Fundamental dan Setup',
    ringkas: 'Install Tableau, colokin ke data, bikin grafik pertama kalian.',
    tujuan: 'Bisa nyambungin data ke Tableau dan bikin grafik yang bener.',
    tautan: [
      { label: 'Modul TM9 Tableau Fundamental', path: 'TM9_Tableau_Fundamental  -.pdf', tipe: 'pdf' },
      { label: 'Slide TM9 Tableau Fundamental', path: 'TM9_Tableau_Fundamental  -.pptx', tipe: 'pptx' },
      { label: 'Panduan Setup Tableau Public', path: 'TM9_Tableau_Public_Setup.pdf', tipe: 'pdf' },
      { label: 'Slide Setup Tableau Public', path: 'TM9_Tableau_Public_Setup.pptx', tipe: 'pptx' },
      { label: 'Dataset Global Superstore Orders', path: 'Tableau Project/Global Superstore Orders 2016.xlsx', tipe: 'data' },
      { label: 'Dataset Global Superstore Returns', path: 'Tableau Project/Global Superstore Returns 2016.csv', tipe: 'data' }
    ]
  },
  {
    tm: 10, fase: 3, status: 'rencana',
    judul: 'Rapikan dan Gabungkan Data',
    ringkas: 'Gabungin beberapa file jadi satu tabel yang rapi dan siap dipakai.',
    tujuan: 'Bisa nyiapin data biar enak divisualisasiin.',
    tautan: []
  },
  {
    tm: 11, fase: 3, status: 'rencana',
    judul: 'Milih Grafik yang Tepat',
    ringkas: 'Milih bentuk grafik yang pas, dan ngehindarin grafik yang malah nyesatin.',
    tujuan: 'Bisa milih grafik sesuai pertanyaan yang mau dijawab.',
    tautan: []
  },
  {
    tm: 12, fase: 3, status: 'rencana',
    judul: 'Dashboard Interaktif',
    ringkas: 'Bikin dashboard yang bisa diklik, difilter, dan dipecah per kategori.',
    tujuan: 'Bisa bikin dashboard yang enak dipakai orang lain.',
    tautan: []
  },
  {
    tm: 13, fase: 3, status: 'rencana',
    judul: 'Storytelling dengan Data',
    ringkas: 'Nyusun urutan cerita biar temuan kalian nyantol di kepala yang dengerin.',
    tujuan: 'Bisa ngubah temuan jadi cerita yang meyakinkan.',
    tautan: []
  },
  {
    tm: 14, fase: 3, status: 'rencana',
    judul: 'Studi Kasus Akuntansi dan KPI Keuangan',
    ringkas: 'Latihan kasus akuntansi beneran: untung rugi, arus kas, piutang, dan anggaran.',
    tujuan: 'Bisa milih angka yang penting buat kasus akuntansi.',
    tautan: []
  },
  {
    tm: 15, fase: 3, status: 'rencana',
    judul: 'Asistensi dan Gladi Presentasi',
    ringkas: 'Asistensi dashboard tiap kelompok plus gladi presentasi.',
    tujuan: 'Dashboard kalian dibenerin sebelum tampil di depan.',
    tautan: []
  },
  {
    tm: 16, fase: 4, status: 'siap', milestone: 'UAS',
    judul: 'Final Showcase - Boardroom Simulation',
    ringkas: 'Presentasi final ke simulasi jajaran direksi.',
    tujuan: 'Bisa mempertanggungjawabkan analisis dan saran kalian.',
    tautan: [
      { label: 'Briefing UAS Kelas A', path: 'UAS/Briefing_UAS_BDA_Kelas_A.pptx', tipe: 'pptx' },
      { label: 'Briefing UAS Kelas B', path: 'UAS/Briefing_UAS_BDA_Kelas_B.pdf', tipe: 'pdf' }
    ]
  }
];

var TUGAS = [
  { label: 'Tugas Kursus Big Data Analytics', path: 'Tugas_Kursus_BigData_Analytics.pdf', tipe: 'pdf' },
  { label: 'Slide Tugas Kursus', path: 'Tugas_Kursus_BigData_Analytics.pptx', tipe: 'pptx' }
];

var KARYA = [];

var IKON_TIPE = {
  pdf: '📄', pptx: '📑', ows: '🍊', data: '📈', docx: '📝'
};
