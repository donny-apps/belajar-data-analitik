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
    { label: 'Bahan Kuliah', href: 'bahan.html' },
    { label: 'Project', href: 'project.html' },
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

  /* ---------------- footer ---------------- */
  var fslot = document.getElementById('foot');
  if (fslot) {
    var kolom = MENU.concat([
      { label: 'Coba Sendiri', href: 'simulasi.html' },
      { label: 'Materi Pertemuan 1', href: 'tm1.html' }
    ]).map(function (m) {
      return '<a href="' + akar + m.href + '">' + m.label + '</a>';
    }).join('');

    fslot.outerHTML =
      '<footer><div class="foot-in">' +
        '<div><p><b>Kelas Data Analitik</b></p>' +
        '<p>Big Data Analytics untuk Akuntansi · Dr. Donny Maha Putra, S.Kom., M.Ak</p></div>' +
        '<div class="foot-nav">' + kolom + '</div>' +
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
