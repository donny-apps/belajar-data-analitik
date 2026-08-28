/* ============================================================
   Set ikon situs.

   Semuanya SVG garis 24 kali 24 yang mewarisi warna teks, jadi
   otomatis menyesuaikan tema terang maupun gelap. Dipakai sebagai
   pengganti emoji supaya bentuknya sama di semua perangkat, karena
   emoji digambar berbeda oleh Windows, Android, dan iOS.

   Dua cara pakai:
     1. di HTML  : <span data-ikon="unduh"></span>
     2. di skrip : IKON('unduh')  atau IKON('unduh', 'kelas-tambahan')
   ============================================================ */
(function () {
  'use strict';

  var G = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';

  var PETA = {
    /* ---------- tindakan ---------- */
    unduh: '<path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M4 20h16"/>',
    buka: '<path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    putar: '<circle cx="12" cy="12" r="9"/><path d="m10 8.5 6 3.5-6 3.5z" fill="currentColor" stroke="none"/>',
    cari: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-3.6-3.6"/>',
    panah: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    centang: '<path d="m5 13 4.5 4.5L19 7"/>',
    silang: '<path d="M6 6 18 18"/><path d="M18 6 6 18"/>',
    tambah: '<path d="M12 5v14"/><path d="M5 12h14"/>',

    /* ---------- berkas ---------- */
    pdf: '<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"/><path d="M14 3v4h4"/><path d="M9 13h6"/><path d="M9 17h4"/>',
    slide: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4"/><path d="M8.5 20h7"/>',
    data: '<ellipse cx="12" cy="6" rx="7.5" ry="3"/><path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6"/><path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3"/>',
    alur: '<circle cx="5.5" cy="7" r="2.5"/><circle cx="18.5" cy="7" r="2.5"/><circle cx="12" cy="17.5" r="2.5"/><path d="M8 7h8"/><path d="m6.8 9.2 3.6 6.2"/><path d="m17.2 9.2-3.6 6.2"/>',
    layar: '<rect x="2.5" y="4" width="19" height="13" rx="1.5"/><path d="M8 21h8"/><path d="M12 17v4"/>',
    berkas: '<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"/><path d="M14 3v4h4"/>',

    /* ---------- konsep kuliah ---------- */
    grafik: '<path d="M4 20h16"/><rect x="5.5" y="12" width="3.5" height="5" rx="1"/><rect x="10.5" y="8" width="3.5" height="9" rx="1"/><rect x="15.5" y="4.5" width="3.5" height="12.5" rx="1"/>',
    dashboard: '<rect x="3" y="3" width="8" height="7" rx="1.5"/><rect x="13" y="3" width="8" height="11" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="17" width="8" height="4" rx="1.5"/>',
    kaca: '<circle cx="10.5" cy="10.5" r="6"/><path d="m19 19-4.2-4.2"/><path d="M8 10.5h5"/>',
    orang: '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.3a3.2 3.2 0 0 1 0 5.4"/><path d="M17.5 14.4a5.5 5.5 0 0 1 3 4.6"/>',
    kartu: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 9.5h19"/><path d="M6 14.5h4"/>',
    gedung: '<path d="M3 20h18"/><path d="M5 20V8l7-4 7 4v12"/><path d="M10 20v-5h4v5"/><path d="M9 11h.01"/><path d="M15 11h.01"/>',
    rumah: '<path d="M3.5 10.5 12 4l8.5 6.5V19a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z"/><path d="M9.5 20v-6h5v6"/>',
    nota: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9.5 8h5"/><path d="M9.5 12h5"/>',
    toko: '<path d="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M4 9 5.5 4h13L20 9"/><path d="M9.5 20v-6h5v6"/>',
    topi: '<path d="m2.5 8.5 9.5-4 9.5 4-9.5 4z"/><path d="M6.5 10.6V15c0 1.4 2.5 2.6 5.5 2.6s5.5-1.2 5.5-2.6v-4.4"/><path d="M21.5 8.5v5"/>',
    jantung: '<path d="M12 19s-7-4.3-7-9a3.8 3.8 0 0 1 7-2.1A3.8 3.8 0 0 1 19 10c0 4.7-7 9-7 9z"/>',
    kilat: '<path d="M13.5 3 5 13.5h6L10.5 21 19 10.5h-6z"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>',
    lampu: '<path d="M9 17h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9V17h7v-3.1A6 6 0 0 0 12 3z"/>',
    gembok: '<rect x="4.5" y="10" width="15" height="10.5" rx="2"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10"/>',
    kunci: '<circle cx="8" cy="12" r="3.5"/><path d="M11.5 12H20"/><path d="M17 12v3"/><path d="M20 12v2"/>',
    jam: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5.2l3.2 2"/>',
    kalender: '<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M3.5 10h17"/><path d="M8 3v4"/><path d="M16 3v4"/>',
    buku: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19v15H5.5A1.5 1.5 0 0 0 4 19.5z"/><path d="M4 19.5A1.5 1.5 0 0 1 5.5 18H19v3H5.5A1.5 1.5 0 0 1 4 19.5z"/>',
    peta: '<path d="m3 6.5 6-2.5 6 2.5 6-2.5v13l-6 2.5-6-2.5-6 2.5z"/><path d="M9 4v13"/><path d="M15 6.5v13"/>',
    bintang: '<path d="m12 3.8 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 10l5.9-.9z"/>',
    obrolan: '<path d="M20.5 12c0 4-3.8 7.2-8.5 7.2-1 0-2-.15-2.9-.42L4 20.5l1.8-3.6A6.9 6.9 0 0 1 3.5 12C3.5 8 7.3 4.8 12 4.8s8.5 3.2 8.5 7.2z"/>',
    tanya: '<circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.4a2.5 2.5 0 0 1 4.85.8c0 1.7-2.45 2.05-2.45 3.8"/><path d="M12 17.2h.01"/>',
    peringatan: '<path d="M10.3 4.3 2.6 17.5A1.5 1.5 0 0 0 3.9 20h16.2a1.5 1.5 0 0 0 1.3-2.5L13.7 4.3a1.6 1.6 0 0 0-3.4 0z"/><path d="M12 10v4"/><path d="M12 17.3h.01"/>',
    perisai: '<path d="M12 3.5 5 6v6c0 4.2 2.9 7.4 7 8.5 4.1-1.1 7-4.3 7-8.5V6z"/><path d="m9.2 12 2 2 3.6-3.6"/>',
    kutip: '<path d="M9.5 6.5C7 7.6 5.5 9.8 5.5 12.5v5h5v-5h-3c0-1.7.8-3.1 2.4-3.9z"/><path d="M18.5 6.5c-2.5 1.1-4 3.3-4 6v5h5v-5h-3c0-1.7.8-3.1 2.4-3.9z"/>',
    papan: '<rect x="2.5" y="3.5" width="19" height="15" rx="1.8"/><path d="M6.5 14.5v-3"/><path d="M10.5 14.5v-6"/><path d="M14.5 14.5v-4"/><path d="M18 14.5v-7"/><path d="M9 21.5h6"/>',
    rak: '<rect x="3" y="4" width="18" height="5" rx="1.5"/><rect x="3" y="12" width="18" height="8" rx="1.5"/><path d="M7 12v8"/>',
    unduhan: '<path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/>'
  };

  function svg(nama, kelas) {
    var isi = PETA[nama];
    if (!isi) return '';
    return '<svg class="ikon' + (kelas ? ' ' + kelas : '') + '" viewBox="0 0 24 24" ' + G +
      ' aria-hidden="true" focusable="false">' + isi + '</svg>';
  }

  function pasang(akar) {
    var target = (akar || document).querySelectorAll('[data-ikon]:not([data-ikon-siap])');
    Array.prototype.forEach.call(target, function (el) {
      var s = svg(el.getAttribute('data-ikon'));
      if (!s) return;
      el.innerHTML = s;
      el.setAttribute('data-ikon-siap', '1');
    });
  }

  window.IKON = svg;
  window.IKON_PASANG = pasang;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { pasang(); });
  } else {
    pasang();
  }

  /* Halaman menggambar sebagian isinya lewat skrip, jadi ikon yang
     muncul belakangan ikut dipasang otomatis. */
  if ('MutationObserver' in window) {
    new MutationObserver(function (daftar) {
      var perlu = false;
      daftar.forEach(function (m) {
        Array.prototype.forEach.call(m.addedNodes, function (n) {
          if (n.nodeType !== 1) return;
          if (n.hasAttribute && n.hasAttribute('data-ikon')) perlu = true;
          else if (n.querySelector && n.querySelector('[data-ikon]:not([data-ikon-siap])')) perlu = true;
        });
      });
      if (perlu) pasang();
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
})();
