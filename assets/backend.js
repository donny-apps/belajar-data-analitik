/* ============================================================
   Penghubung situs ke penyimpanan data.

   Situs ini statis, jadi tidak punya server sendiri. Supaya data
   pendaftaran dan berkas unggahan benar benar tersimpan, situs
   mengirimnya ke Google Apps Script milik dosen. Dari sana data
   masuk ke Google Sheet dan berkasnya masuk ke Google Drive.

   Kode Apps Script beserta cara memasangnya ada di berkas
   assets/apps-script-kelas.gs.

   Selama ALAMAT_SERVER masih kosong, situs berjalan dalam mode
   catatan pribadi: data hanya tersimpan di browser masing masing
   dan tidak sampai ke dosen. Keadaan itu ditampilkan apa adanya
   kepada mahasiswa supaya tidak ada yang salah sangka.
   ============================================================ */
(function () {
  'use strict';

  /* Tempel alamat Web App hasil Deploy di sini, bentuknya
     https://script.google.com/macros/s/xxxxx/exec */
  var ALAMAT_SERVER = '';

  var KUNCI_SISWA = 'bda-siswa';
  var KUNCI_ANTRE = 'bda-antre';

  function terhubung() { return !!ALAMAT_SERVER; }

  function bacaLokal(kunci, bawaan) {
    try { return JSON.parse(localStorage.getItem(kunci) || 'null') || bawaan; }
    catch (e) { return bawaan; }
  }
  function tulisLokal(kunci, nilai) {
    try { localStorage.setItem(kunci, JSON.stringify(nilai)); } catch (e) {}
  }

  /* Kiriman memakai text/plain supaya browser tidak melakukan
     permintaan pendahuluan yang ditolak Apps Script. */
  function kirim(muatan) {
    return fetch(ALAMAT_SERVER, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(muatan)
    }).then(function (r) { return r.json(); });
  }

  function ambil(params) {
    var q = Object.keys(params).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
    }).join('&');
    return fetch(ALAMAT_SERVER + '?' + q).then(function (r) { return r.json(); });
  }

  /* ---------------- pendaftaran ---------------- */
  function daftar(data) {
    tulisLokal(KUNCI_SISWA, data);
    if (!terhubung()) {
      return Promise.resolve({ ok: true, lokal: true, pesan: 'Tersimpan di browser ini saja' });
    }
    var muatan = {};
    for (var k in data) muatan[k] = data[k];
    muatan.aksi = 'daftar';
    return kirim(muatan).catch(function () {
      simpanAntrean(muatan);
      return { ok: true, tertunda: true, pesan: 'Jaringan bermasalah, kiriman ditahan dulu' };
    });
  }

  /* ---------------- unggahan berkas ---------------- */
  function unggah(berkas, jenis, label) {
    var siswa = bacaLokal(KUNCI_SISWA, null);
    if (!siswa || !siswa.nim) {
      return Promise.reject(new Error('Isi data diri dulu sebelum mengunggah'));
    }
    if (berkas.size > 10 * 1024 * 1024) {
      return Promise.reject(new Error('Ukuran berkas lebih dari 10 MB'));
    }
    if (!terhubung()) {
      return Promise.reject(new Error('Pengiriman berkas belum diaktifkan oleh dosen'));
    }

    return new Promise(function (selesai, gagal) {
      var pembaca = new FileReader();
      pembaca.onerror = function () { gagal(new Error('Berkas gagal dibaca')); };
      pembaca.onload = function () {
        var b64 = String(pembaca.result).split(',')[1];
        kirim({
          aksi: 'unggah', jenis: jenis, label: label,
          nim: siswa.nim, nama: siswa.nama, kelas: siswa.kelas, klp: siswa.klp,
          namaBerkas: berkas.name, mime: berkas.type || 'application/octet-stream',
          dataBase64: b64
        }).then(selesai, gagal);
      };
      pembaca.readAsDataURL(berkas);
    });
  }

  /* ---------------- kemajuan ---------------- */
  function progres() {
    var siswa = bacaLokal(KUNCI_SISWA, null);
    if (!terhubung() || !siswa || !siswa.nim) {
      return Promise.resolve({ ok: true, lokal: true, unggahan: [] });
    }
    return ambil({ aksi: 'progres', nim: siswa.nim })
      .catch(function () { return { ok: false, unggahan: [] }; });
  }

  /* ---------------- kiriman tertunda ---------------- */
  function simpanAntrean(muatan) {
    var antre = bacaLokal(KUNCI_ANTRE, []);
    antre.push(muatan);
    tulisLokal(KUNCI_ANTRE, antre);
  }

  function kirimUlangAntrean() {
    if (!terhubung()) return;
    var antre = bacaLokal(KUNCI_ANTRE, []);
    if (!antre.length) return;
    var sisa = [];
    var urut = Promise.resolve();
    antre.forEach(function (m) {
      urut = urut.then(function () {
        return kirim(m).catch(function () { sisa.push(m); });
      });
    });
    urut.then(function () { tulisLokal(KUNCI_ANTRE, sisa); });
  }

  window.BDA = {
    terhubung: terhubung,
    daftar: daftar,
    unggah: unggah,
    progres: progres,
    siswa: function () { return bacaLokal(KUNCI_SISWA, null); },
    hapusSiswa: function () { try { localStorage.removeItem(KUNCI_SISWA); } catch (e) {} }
  };

  if (terhubung()) window.addEventListener('load', kirimUlangAntrean);
})();
