/* ============================================================
   Data kelas daring.

   Catatan keamanan.
   Tautan sekali klik dipasang atas keputusan dosen pengampu. Kata
   sandinya tidak ditulis sebagai teks di halaman, tapi tetap menempel
   di dalam tautan, jadi siapa pun yang membuka halaman ini bisa masuk.

   Disarankan menyalakan Waiting Room di pengaturan Zoom, supaya
   peserta tetap harus diizinkan masuk satu per satu.
   ============================================================ */

var KELAS_DARING = {
  aktif: true,
  nama: 'Analisis Big Data Kelas A',
  nomor: '969 5349 2253',
  logo: 'assets/img/logo-zoom.svg',
  tautan: 'https://zoom.us/j/96953492253',

  /* Tautan sekali klik, atas keputusan dosen pengampu. Kata sandinya
     tidak ditulis sebagai teks di halaman, tapi tetap menempel di dalam
     tautan ini, jadi anggap tautannya sendiri bersifat terbuka. */
  TAUTAN_LANGSUNG: 'https://zoom.us/j/96953492253?pwd=stw6HQKaq7GGlQJHOaP1libT3pDhKb.1',

  jadwal: 'Jumat, 07.10 sampai 08.50 WIB',
  catatanSandi: 'Klik tombol di samping untuk langsung masuk. Kalau diminta nomor rapat, nomornya ada di atas.',
  catatanJadwal: 'Cek pengumuman kelas kalau ada perubahan jadwal.'
};
