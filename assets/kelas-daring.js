/* ============================================================
   Data kelas daring.

   PENTING soal kata sandi rapat.
   Situs ini terbuka untuk umum dan terindeks mesin pencari. Kalau
   tautan yang memuat kata sandi ditempel di sini, siapa pun yang
   menemukan halaman ini bisa masuk ke ruang kelas, termasuk orang
   yang tidak berkepentingan.

   Karena itu yang dipasang hanya nomor rapat dan tautan tanpa kata
   sandi. Kata sandinya dibagikan lewat jalur tertutup, misalnya grup
   kelas atau LMS kampus.

   Kalau nanti diputuskan tautan lengkap boleh dipasang, ubah
   TAUTAN_LANGSUNG di bawah dan nyalakan Waiting Room di pengaturan
   Zoom supaya peserta tetap harus diizinkan masuk satu per satu.
   ============================================================ */

var KELAS_DARING = {
  aktif: true,
  nama: 'Analisis Big Data Kelas A',
  nomor: '969 5349 2253',
  tautan: 'https://zoom.us/j/96953492253',

  /* Diisi hanya jika dosen memutuskan tautan berkata sandi boleh publik. */
  TAUTAN_LANGSUNG: null,

  jadwal: 'Sabtu, 07.15 WIB',
  catatanSandi: 'Kata sandi dibagikan lewat grup kelas, tidak dipasang di halaman terbuka.',
  catatanJadwal: 'Cek pengumuman kelas kalau ada perubahan jadwal.'
};
