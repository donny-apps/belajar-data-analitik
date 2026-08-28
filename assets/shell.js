/* ============================================================
   Kerangka situs: navigasi atas, footer, tema, dan status masuk.
   Dipakai semua halaman lewat <div id="nav"></div> dan <div id="foot"></div>
   supaya menunya seragam dan cukup diubah di satu tempat.
   ============================================================ */
(function () {
  'use strict';

  var MENU = [
    { label: 'Beranda', href: 'index.html' },
    { label: 'Orange', href: 'orange.html' },
    { label: 'Tableau', href: 'tableau.html' },
    { label: 'Project', href: 'project.html' },
    { label: 'Bahan Belajar', anak: [
      { label: 'Bahan Kuliah', href: 'bahan.html', ket: 'Slide, modul, dan data latihan' },
      { label: 'Sumber Data', href: 'sumber-data.html', ket: 'Tempat mencari dataset project' },
      { label: 'Belajar Mandiri', href: 'belajar.html', ket: 'Video dan situs buat belajar sendiri' },
      { label: 'Katalog Project', href: 'showcase.html', ket: 'Karya kakak tingkat, bisa diunduh' },
      { label: 'Coba Sendiri', href: 'simulasi.html', ket: 'Empat latihan interaktif singkat' }
    ] },
    { label: 'Rule Perkuliahan', href: 'aturan.html' }
  ];

  var halaman = location.pathname.split('/').pop() || 'index.html';
  var dalamSubfolder = /\/screens\//.test(location.pathname);
  var akar = dalamSubfolder ? '../../' : '';

  /* ---------------- status masuk ---------------- */
  var KEY = 'bda-siswa';
  function siswa() {
    try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; }
  }
  window.bdaSiswa = siswa;
  window.bdaSimpanSiswa = function (obj) {
    try { localStorage.setItem(KEY, JSON.stringify(obj)); } catch (e) {}
  };
  window.bdaKeluar = function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
    location.href = akar + 'index.html';
  };

  /* ---------------- navigasi ---------------- */
  var slot = document.getElementById('nav');
  if (slot) {
    var s = siswa();
    var tautan = MENU.map(function (m) {
      if (m.anak) {
        var adaAktif = m.anak.some(function (a) { return a.href === halaman; });
        var isi = m.anak.map(function (a) {
          var tandai = (a.href === halaman) ? ' class="aktif"' : '';
          return '<a href="' + akar + a.href + '"' + tandai + '>' +
            '<b>' + a.label + '</b><span>' + a.ket + '</span></a>';
        }).join('');
        return '<div class="nav-grup">' +
          '<button class="nav-tombol' + (adaAktif ? ' aktif' : '') + '" type="button" aria-expanded="false">' +
          m.label + ' <i>▾</i></button>' +
          '<div class="nav-laci">' + isi + '</div></div>';
      }
      var aktif = (m.href === halaman) ? ' class="aktif"' : '';
      return '<a href="' + akar + m.href + '"' + aktif + '>' + m.label + '</a>';
    }).join('');

    var tombolMasuk = s
      ? '<a class="nav-user" href="' + akar + 'masuk.html" title="Kamu masuk sebagai ' + s.nama + '">' +
        '<span class="nav-ava">' + (s.nama || '?').charAt(0).toUpperCase() + '</span>' +
        '<span>' + (s.nama || '').split(' ')[0] + '</span></a>'
      : '<a class="nav-cta" href="' + akar + 'masuk.html">Masuk →</a>';

    slot.outerHTML =
      '<nav class="nav">' +
        '<div class="nav-in">' +
          '<a class="brand" href="' + akar + 'index.html">' +
            '<div class="brand-mark">📊</div>' +
            '<div class="brand-txt"><strong>Kelas Data Analitik</strong>' +
            '<span>Akuntansi · Dr. Donny</span></div>' +
          '</a>' +
          '<div class="nav-links">' + tautan +
            '<button class="theme-btn" id="themeBtn" aria-label="Ganti tema">🌙</button>' +
            tombolMasuk +
          '</div>' +
        '</div>' +
      '</nav>';
  }

  /* ---------------- laci menu ---------------- */
  var tombolLaci = document.querySelectorAll('.nav-tombol');
  Array.prototype.forEach.call(tombolLaci, function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var grup = b.parentNode;
      var buka = grup.classList.contains('buka');
      Array.prototype.forEach.call(document.querySelectorAll('.nav-grup'), function (g) {
        g.classList.remove('buka');
        var t = g.querySelector('.nav-tombol');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
      if (!buka) { grup.classList.add('buka'); b.setAttribute('aria-expanded', 'true'); }
    });
  });
  document.addEventListener('click', function () {
    Array.prototype.forEach.call(document.querySelectorAll('.nav-grup'), function (g) {
      g.classList.remove('buka');
      var t = g.querySelector('.nav-tombol');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      Array.prototype.forEach.call(document.querySelectorAll('.nav-grup'), function (g) { g.classList.remove('buka'); });
    }
  });

  /* ---------------- footer ---------------- */
  var fslot = document.getElementById('foot');
  if (fslot) {
    fslot.outerHTML =
      '<footer><div class="foot-in">' +

        '<div class="foot-utama">' +
          '<div class="foot-merek"><span class="foot-tanda">📊</span>' +
          '<div><b>Kelas Data Analitik</b>' +
          '<span>Big Data Analytics untuk Akuntansi</span></div></div>' +
          '<p class="foot-dosen">Dr. Donny Maha Putra, S.Kom., M.Ak<br>' +
          '<span>Fakultas Ekonomi dan Bisnis, UPN Veteran Jakarta</span></p>' +
        '</div>' +

        '<div class="foot-kolom">' +
          '<h4>Identitas Mata Kuliah</h4>' +
          '<div class="foot-baris"><span>Kode</span><b>AKT120406</b></div>' +
          '<div class="foot-baris"><span>Bobot</span><b>2 SKS</b></div>' +
          '<div class="foot-baris"><span>Jumlah pertemuan</span><b>16 kali</b></div>' +
          '<div class="foot-baris"><span>Kelompok</span><b>4 orang</b></div>' +
        '</div>' +

        '<div class="foot-kolom">' +
          '<h4>Pembagian Nilai</h4>' +
          '<div class="foot-baris"><span>Tugas dan kehadiran</span><b>30%</b></div>' +
          '<div class="foot-baris"><span>Project Kuliah 1</span><b>35%</b></div>' +
          '<div class="foot-baris"><span>Project Kuliah 2</span><b>35%</b></div>' +
          '<div class="foot-baris"><span>Dinilai pada</span><b>UTS dan UAS</b></div>' +
        '</div>' +

        '<div class="foot-kolom">' +
          '<h4>Aplikasi yang Dipakai</h4>' +
          '<div class="foot-baris"><span>🍊 Orange</span><b>Gratis</b></div>' +
          '<div class="foot-baris"><span>📊 Tableau Public</span><b>Gratis</b></div>' +
          '<p class="foot-catatan">Keduanya dipasang sendiri di laptop masing-masing sebelum pertemuan yang membutuhkan.</p>' +
        '</div>' +

      '</div>' +
      '<div class="foot-bawah">' +
        '<span>Bahan kuliah terbuka. Slide, modul, dan data latihan boleh diunduh dan dipelajari kapan saja.</span>' +
        '<span class="foot-tahun">Semester Genap 2025/2026</span>' +
      '</div></footer>';
  }

  /* ---------------- tema ---------------- */
  var root = document.documentElement;
  var btn = document.getElementById('themeBtn');
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('bda-theme', t); } catch (e) {}
    if (btn) {
      btn.textContent = t === 'dark' ? '☀️' : '🌙';
      btn.title = t === 'dark' ? 'Ganti ke mode terang' : 'Ganti ke mode gelap';
    }
  }
  if (btn) {
    setTheme(root.getAttribute('data-theme') || 'dark');
    btn.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  /* ---------------- sapaan kalau sudah masuk ---------------- */
  var sapa = document.getElementById('sapaan');
  if (sapa) {
    var d = siswa();
    if (d && d.nama) {
      sapa.innerHTML = 'Halo, <b>' + d.nama.split(' ')[0] + '</b> 👋 selamat datang lagi.';
      sapa.classList.add('tampil');
    }
  }
})();
