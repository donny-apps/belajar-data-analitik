/* ============================================================
   BDA Studio renderer dan interaksi website mata kuliah.
   Membaca data dari assets/course.js lalu menyusun katalog materi,
   daftar materi, dan galeri karya mahasiswa. Ditambah tema
   terang atau gelap, animasi angka, dan animasi masuk.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- util ---------------- */
  function mix(hex, a) {
    var h = hex.replace('#', '');
    var r = parseInt(h.substring(0, 2), 16);
    var g = parseInt(h.substring(2, 4), 16);
    var b = parseInt(h.substring(4, 6), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }

  function faseOf(id) {
    for (var i = 0; i < FASE.length; i++) { if (FASE[i].id === id) return FASE[i]; }
    return FASE[0];
  }

  function ext(path) {
    var p = path.split('.');
    return p[p.length - 1];
  }

  function tautanHtml(t) {
    var ic = IKON_TIPE[t.tipe] || '📎';
    return '<a class="file" href="' + encodeURI(BASE + t.path) + '" target="_blank" rel="noopener">' +
      '<span class="ic">' + ic + '</span><span>' + t.label + '</span>' +
      '<span class="ext">' + ext(t.path) + '</span></a>';
  }

  /* ---------------- kartu tahap ---------------- */
  var faseWrap = document.getElementById('faseGrid');
  if (faseWrap) {
    faseWrap.innerHTML = FASE.map(function (f) {
      var jml = COURSE.filter(function (c) { return c.fase === f.id; }).length;
      return '<div class="tile tahap reveal" style="--c:' + f.warna + '">' +
        '<div class="fase-ikon">' + f.ikon + '</div>' +
        '<h3>' + f.nama + '</h3>' +
        '<div class="rentang">' + f.rentang + ' &middot; ' + jml + ' pertemuan</div>' +
        '<div class="out"><b>Output:</b> ' + f.hasil + '</div>' +
        '</div>';
    }).join('');
  }

  /* ---------------- kartu pertemuan ---------------- */
  var grid = document.getElementById('tmGrid');

  var rentang = grid ? (grid.getAttribute('data-tm') || '') : '';
  var batas = rentang ? rentang.split('-').map(Number) : null;

  function render(filter) {
    var items = COURSE.filter(function (c) {
      if (batas && (c.tm < batas[0] || c.tm > batas[1])) return false;
      return !filter || c.fase === filter;
    });
    grid.innerHTML = items.map(function (c) {
      var f = faseOf(c.fase);
      var tag = c.milestone
        ? '<span class="tag tag-ujian">' + c.milestone + '</span>'
        : (c.status === 'siap'
            ? '<span class="tag tag-siap">Materi siap</span>'
            : '<span class="tag tag-rencana">Rencana</span>');

      var links = '';
      if (c.internal) {
        links += '<a class="file" href="' + c.internal + '"><span class="ic">🖥️</span>' +
          '<span>Buka materi kelas TM' + c.tm + '</span><span class="ext">html</span></a>';
      }
      if (c.tautan && c.tautan.length) links += c.tautan.map(tautanHtml).join('');
      if (c.nota) links += '<div class="file-empty">' + c.nota + '</div>';
      if (!links) links = '<div class="file-empty">Materi belum diunggah.</div>';

      return '<article class="tile tm-card reveal" style="--c:' + f.warna + '">' +
        '<div class="tm-top">' +
          '<span class="tm-no" style="color:' + f.warna + ';background:' + mix(f.warna, .10) + ';border-color:' + mix(f.warna, .26) + '">TM ' + c.tm + '</span>' +
          tag +
        '</div>' +
        '<h3>' + c.judul + '</h3>' +
        '<p class="ringkas">' + c.ringkas + '</p>' +
        '<div class="tm-tujuan"><b>Abis ini kalian bisa</b>' + c.tujuan + '</div>' +
        '<div class="tm-links">' + links + '</div>' +
        '</article>';
    }).join('');
    watchReveal();
  }

  if (grid) {
    render(null);
    var chips = document.querySelectorAll('#faseFilter .chip');
    Array.prototype.forEach.call(chips, function (ch) {
      ch.addEventListener('click', function () {
        Array.prototype.forEach.call(chips, function (c) { c.classList.remove('on'); });
        ch.classList.add('on');
        var v = ch.getAttribute('data-fase');
        render(v ? Number(v) : null);
      });
    });
  }

  /* ---------------- galeri karya ---------------- */
  var karyaWrap = document.getElementById('karyaWrap');
  if (karyaWrap && (!KARYA || !KARYA.length)) {
    karyaWrap.innerHTML = '<div class="tile note info-inline reveal"><span style="font-size:20px">🔒</span>' +
      '<span><b>Contoh karya ditampilkan langsung di kelas.</b> Laporan kakak tingkat memuat nama dan data pribadi, ' +
      'jadi tidak dipasang di halaman yang bisa diakses umum.</span></div>';
  } else if (karyaWrap) {
    karyaWrap.innerHTML = KARYA.map(function (k) {
      var kartu = k.kelompok.map(function (g) {
        return '<div class="karya"><b>' + g.klp + '</b>' +
          '<div class="k-links">' +
          '<a href="' + encodeURI(BASE + k.folder + g.laporan) + '" target="_blank" rel="noopener">Laporan</a>' +
          (g.presentasi ? '<a href="' + encodeURI(BASE + k.folder + g.presentasi) + '" target="_blank" rel="noopener">Presentasi</a>' : '') +
          '</div></div>';
      }).join('');
      return '<div class="reveal" style="margin-bottom:30px">' +
        '<span class="sec-label" style="margin-bottom:14px">' + k.kelas + ' &middot; ' + k.kelompok.length + ' kelompok</span>' +
        '<div class="karya-grid" style="margin-top:14px">' + kartu + '</div></div>';
    }).join('');
  }

  /* ---------------- tugas kursus ---------------- */
  var tugasWrap = document.getElementById('tugasWrap');
  if (tugasWrap) tugasWrap.innerHTML = TUGAS.map(tautanHtml).join('');

  /* ---------------- animasi masuk ---------------- */
  var io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var delay = el.getAttribute('data-delay') || 0;
        setTimeout(function () { el.classList.add('in'); }, Number(delay));
        io.unobserve(el);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  }

  function watchReveal() {
    var els = document.querySelectorAll('.reveal:not(.in)');
    Array.prototype.forEach.call(els, function (el, i) {
      if (!io) { el.classList.add('in'); return; }
      if (!el.hasAttribute('data-delay')) el.setAttribute('data-delay', String(Math.min(i, 6) * 55));
      io.observe(el);
    });
  }
  watchReveal();

  /* ---------------- angka berjalan ---------------- */
  function countUp(el) {
    var target = Number(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1100, t0 = null;
    var done = false;
    setTimeout(function () { if (!done) el.textContent = target + suffix; }, 1800);
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) { requestAnimationFrame(step); } else { done = true; }
    }
    requestAnimationFrame(step);
  }

  var nums = document.querySelectorAll('[data-count]');
  if (nums.length) {
    if ('IntersectionObserver' in window) {
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { countUp(en.target); io2.unobserve(en.target); }
        });
      }, { threshold: 0.4 });
      Array.prototype.forEach.call(nums, function (n) { io2.observe(n); });
    } else {
      Array.prototype.forEach.call(nums, countUp);
    }
  }

  /* ---------------- bar penilaian ---------------- */
  var bars = document.querySelectorAll('.bar i[data-w]');
  if (bars.length) {
    if ('IntersectionObserver' in window) {
      var io3 = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          en.target.style.width = en.target.getAttribute('data-w') + '%';
          io3.unobserve(en.target);
        });
      }, { threshold: 0.4 });
      Array.prototype.forEach.call(bars, function (b) { io3.observe(b); });
    } else {
      Array.prototype.forEach.call(bars, function (b) { b.style.width = b.getAttribute('data-w') + '%'; });
    }
  }
})();
