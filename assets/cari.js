/* ============================================================
   Kotak pencarian yang menembus seluruh isi situs.

   Daftar isinya ada di assets/indeks-cari.js, dibuat ulang tiap kali
   situs dibangun. Satu berkas itu memuat semua halaman, materi tiap
   pertemuan, project kakak tingkat, tema kelompok, video, situs
   belajar, sumber dataset, dan bab buku, jadi mahasiswa tidak perlu
   membuka satu per satu cuma untuk mencari satu kata.

   Cara membukanya: klik tombol kaca pembesar di navigasi, tekan
   garis miring, atau tekan Ctrl dan K bersamaan.
   ============================================================ */
(function () {
  'use strict';

  if (typeof INDEKS_CARI === 'undefined') return;

  var dalamSubfolder = /\/screens\//.test(location.pathname);
  var akar = dalamSubfolder ? '../../' : '';

  var NAMA_JENIS = {
    halaman: 'Halaman',
    pertemuan: 'Pertemuan',
    bahan: 'Bahan kuliah',
    project: 'Project kakak tingkat',
    kelompok: 'Tema kelompok',
    video: 'Video belajar',
    situs: 'Situs belajar',
    dataset: 'Sumber dataset',
    buku: 'Buku referensi',
    aturan: 'Rule perkuliahan'
  };

  var IKON_JENIS = {
    halaman: 'rak', pertemuan: 'kalender', bahan: 'buku', project: 'grafik',
    kelompok: 'orang', video: 'layar', situs: 'buka', dataset: 'data',
    buku: 'buku', aturan: 'perisai'
  };

  /* urutan tampil, yang paling sering dicari didahulukan */
  var URUT = ['pertemuan', 'bahan', 'halaman', 'project', 'kelompok',
              'dataset', 'video', 'situs', 'buku', 'aturan'];

  function bersih(t) {
    return String(t || '').toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  /* daftar disiapkan sekali di awal supaya pencariannya ringan */
  var DAFTAR = INDEKS_CARI.map(function (x) {
    return {
      k: x.k, j: x.j, u: x.u, d: x.d,
      cariJudul: bersih(x.j),
      cariSemua: bersih(x.j + ' ' + x.d + ' ' + x.t)
    };
  });

  function nilai(butir, kata) {
    var n = 0;
    for (var i = 0; i < kata.length; i++) {
      var k = kata[i];
      var diJudul = butir.cariJudul.indexOf(k);
      var diSemua = butir.cariSemua.indexOf(k);
      if (diSemua < 0) return 0;                 /* satu kata tidak ada, dilewati */
      if (diJudul === 0) n += 12;                /* judulnya diawali kata itu */
      else if (diJudul > 0) n += 7;
      else n += 2;
      if (new RegExp('\\b' + k).test(butir.cariSemua)) n += 2;
    }
    return n;
  }

  function cari(teks) {
    var kata = bersih(teks).split(' ').filter(Boolean);
    if (!kata.length) return [];
    return DAFTAR
      .map(function (b) { return { b: b, n: nilai(b, kata) }; })
      .filter(function (x) { return x.n > 0; })
      .sort(function (a, c) { return c.n - a.n || a.b.j.length - c.b.j.length; })
      .slice(0, 40)
      .map(function (x) { return x.b; });
  }

  function aman(t) {
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function tandai(teks, kata) {
    var hasil = aman(teks);
    kata.forEach(function (k) {
      if (k.length < 2) return;
      hasil = hasil.replace(new RegExp('(' + k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'),
        '<mark>$1</mark>');
    });
    return hasil;
  }

  /* ---------------- rangka tampilan ---------------- */
  var lapis = document.createElement('div');
  lapis.className = 'cari-lapis';
  lapis.setAttribute('role', 'dialog');
  lapis.setAttribute('aria-label', 'Cari isi situs');
  lapis.innerHTML =
    '<div class="cari-kotak">' +
      '<div class="cari-baris">' +
        '<span class="cari-ikon">' + (window.IKON ? IKON('cari') : '') + '</span>' +
        '<input type="text" id="cariSitus" autocomplete="off" spellcheck="false" ' +
          'placeholder="Cari materi, project, dataset, video, aturan ...">' +
        '<kbd class="cari-esc">Esc</kbd>' +
      '</div>' +
      '<div class="cari-hasil" id="cariHasil"></div>' +
      '<div class="cari-kaki">' +
        '<span><kbd>↑</kbd><kbd>↓</kbd> pindah</span>' +
        '<span><kbd>Enter</kbd> buka</span>' +
        '<span><kbd>/</kbd> buka pencarian</span>' +
      '</div>' +
    '</div>';
  document.body.appendChild(lapis);

  var kotakInput = lapis.querySelector('#cariSitus');
  var wadahHasil = lapis.querySelector('#cariHasil');
  var terpilih = 0;
  var hasilKini = [];

  /* saran awal waktu kotak masih kosong */
  var SARAN = ['Orange', 'Tableau', 'dataset', 'kelompok', 'regresi', 'dashboard', 'nilai'];

  function gambarKosong() {
    wadahHasil.innerHTML =
      '<div class="cari-kosong">' +
        '<p>Ketik apa saja. Pencarian ini menembus ' + DAFTAR.length +
        ' butir isi situs, dari materi tiap pertemuan sampai bab buku.</p>' +
        '<div class="cari-saran">' +
          SARAN.map(function (s) {
            return '<button type="button" data-saran="' + s + '">' + s + '</button>';
          }).join('') +
        '</div>' +
      '</div>';
  }

  function gambar(teks) {
    hasilKini = cari(teks);
    terpilih = 0;

    if (!teks.trim()) { gambarKosong(); return; }

    if (!hasilKini.length) {
      wadahHasil.innerHTML =
        '<div class="cari-kosong"><p>Tidak ada yang cocok dengan <b>' + aman(teks) +
        '</b>. Coba kata lain, atau kata yang lebih pendek.</p></div>';
      return;
    }

    var kata = bersih(teks).split(' ').filter(Boolean);
    var per = {};
    hasilKini.forEach(function (b) { (per[b.k] = per[b.k] || []).push(b); });

    var no = 0;
    wadahHasil.innerHTML = URUT.filter(function (j) { return per[j]; }).map(function (j) {
      return '<div class="cari-grup">' +
        '<span class="cari-grup-judul">' + (NAMA_JENIS[j] || j) +
        ' <b>' + per[j].length + '</b></span>' +
        per[j].map(function (b) {
          var i = no++;
          return '<a class="cari-butir' + (i === 0 ? ' pilih' : '') + '" data-no="' + i +
            '" href="' + akar + b.u + '">' +
            '<span class="cari-butir-ikon">' +
              (window.IKON ? IKON(IKON_JENIS[b.k] || 'buka') : '') + '</span>' +
            '<span class="cari-butir-teks">' +
              '<b>' + tandai(b.j, kata) + '</b>' +
              (b.d ? '<i>' + tandai(b.d, kata) + '</i>' : '') +
            '</span>' +
            '</a>';
        }).join('') +
        '</div>';
    }).join('');
  }

  function pindah(arah) {
    var butir = wadahHasil.querySelectorAll('.cari-butir');
    if (!butir.length) return;
    butir[terpilih].classList.remove('pilih');
    terpilih = (terpilih + arah + butir.length) % butir.length;
    butir[terpilih].classList.add('pilih');
    butir[terpilih].scrollIntoView({ block: 'nearest' });
  }

  function buka() {
    lapis.classList.add('tampil');
    document.body.classList.add('cari-terbuka');
    kotakInput.value = '';
    gambarKosong();
    setTimeout(function () { kotakInput.focus(); }, 30);
  }

  function tutup() {
    lapis.classList.remove('tampil');
    document.body.classList.remove('cari-terbuka');
  }

  window.bdaBukaCari = buka;

  /* ---------------- kendali ---------------- */
  kotakInput.addEventListener('input', function () { gambar(kotakInput.value); });

  wadahHasil.addEventListener('click', function (e) {
    var s = e.target.closest('[data-saran]');
    if (s) {
      kotakInput.value = s.getAttribute('data-saran');
      gambar(kotakInput.value);
      kotakInput.focus();
    }
  });

  lapis.addEventListener('click', function (e) {
    if (e.target === lapis) tutup();
  });

  lapis.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { tutup(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); pindah(1); return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); pindah(-1); return; }
    if (e.key === 'Enter') {
      var b = wadahHasil.querySelectorAll('.cari-butir')[terpilih];
      if (b) { e.preventDefault(); location.href = b.getAttribute('href'); }
    }
  });

  document.addEventListener('keydown', function (e) {
    var di = document.activeElement;
    var sedangMengetik = di && (di.tagName === 'INPUT' || di.tagName === 'TEXTAREA' ||
                                di.tagName === 'SELECT' || di.isContentEditable);
    if (lapis.classList.contains('tampil')) return;
    if ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)) {
      e.preventDefault(); buka(); return;
    }
    if (e.key === '/' && !sedangMengetik) { e.preventDefault(); buka(); }
  });
})();
