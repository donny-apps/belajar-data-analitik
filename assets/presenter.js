/* ============================================================
   Presenter Layer - Big Data Analytics untuk Akuntansi
   Dipasang di setiap screen deck. Menyediakan navigasi antar
   screen, catatan pengajar, timer sesi, fullscreen, dan
   shortcut keyboard untuk dipakai saat mengajar di kelas.
   ============================================================ */
(function () {
  'use strict';

  /* Catatan pengajar. Diset false oleh build-publish.py untuk versi daring. */
  var NOTES_AKTIF = false;

  var DECK = {
    id: 'tm1',
    title: 'TM1 - Overview Perkuliahan',
    home: '../../tm1.html',
    screens: [
      {
        file: 'TM1_Screen1.html',
        nav: 'Pembukaan & Kontrak Belajar',
        durasi: '7 menit',
        poin: [],
        tanya: ''
      },
      {
        file: 'TM1_Screen2.html',
        nav: 'Kenapa Penting untuk Akuntansi',
        durasi: '10 menit',
        poin: [],
        tanya: ''
      },
      {
        file: 'TM1_Screen3.html',
        nav: 'Roadmap 1 Semester',
        durasi: '8 menit',
        poin: [],
        tanya: ''
      },
      {
        file: 'TM1_Screen4.html',
        nav: 'Output Akhir & Portofolio',
        durasi: '8 menit',
        poin: [],
        tanya: ''
      },
      {
        file: 'TM1_Screen5.html',
        nav: 'Apa Itu Big Data Analytics (5V)',
        durasi: '12 menit',
        poin: [],
        tanya: ''
      },
      {
        file: 'TM1_Screen6.html',
        nav: 'Framework Data ke Keputusan',
        durasi: '13 menit',
        poin: [],
        tanya: ''
      }
    ]
  };

  var here = location.pathname.split('/').pop();
  var idx = -1;
  for (var i = 0; i < DECK.screens.length; i++) {
    if (DECK.screens[i].file === here) { idx = i; break; }
  }
  if (idx < 0) idx = 0;
  var total = DECK.screens.length;
  var cur = DECK.screens[idx];

  ['../../assets/deck-skin.css', '../../assets/presenter.css'].forEach(function (href) {
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = href;
    document.head.appendChild(css);
  });

  function go(i) {
    if (i < 0 || i >= total) return;
    location.href = DECK.screens[i].file;
  }

  /* ---------- progress ---------- */
  var prog = document.createElement('div');
  prog.className = 'pz-progress';
  prog.style.width = '0%';
  document.body.appendChild(prog);
  setTimeout(function () { prog.style.width = ((idx + 1) / total * 100).toFixed(1) + '%'; }, 120);

  /* ---------- bottom bar ---------- */
  var bar = document.createElement('div');
  bar.className = 'pz-bar';
  var dots = '';
  DECK.screens.forEach(function (s, i) {
    dots += '<button class="pz-dot' + (i === idx ? ' pz-active' : '') + '" data-go="' + i + '" title="' + s.nav + '">' + (i + 1) + '</button>';
  });
  bar.innerHTML =
    '<button class="pz-btn" data-act="home" title="Kembali ke halaman TM1 (H)">&#8962;</button>' +
    '<div class="pz-sep"></div>' +
    '<button class="pz-btn" data-act="prev" title="Screen sebelumnya (panah kiri)">&#8249;</button>' +
    '<div class="pz-dots">' + dots + '</div>' +
    '<button class="pz-btn" data-act="next" title="Screen berikutnya (panah kanan atau spasi)">&#8250;</button>' +
    '<div class="pz-sep"></div>' +
    '<span class="pz-label">' + (idx + 1) + ' / ' + total + '</span>' +
    '<span class="pz-timer" data-act="timer" title="Klik untuk reset timer sesi (T)">00:00</span>' +
    '<div class="pz-sep"></div>' +
    (NOTES_AKTIF ? '<button class="pz-btn" data-act="notes" title="Catatan pengajar (N)">&#128221;</button>' : '') +
    '<button class="pz-btn" data-act="full" title="Layar penuh (F)">&#9974;</button>' +
    '<button class="pz-btn" data-act="help" title="Daftar shortcut (tanda tanya)">?</button>';
  document.body.appendChild(bar);

  bar.querySelector('[data-act="prev"]').disabled = idx === 0;
  bar.querySelector('[data-act="next"]').disabled = idx === total - 1;

  /* ---------- catatan pengajar ---------- */
  var notes = document.createElement('div');
  notes.className = 'pz-notes';
  var poinHtml = '';
  (cur.poin || []).forEach(function (p) { poinHtml += '<li>' + p + '</li>'; });
  if (NOTES_AKTIF) notes.innerHTML =
    '<h4>Catatan Pengajar</h4>' +
    '<div class="pz-notes-title">' + (idx + 1) + '. ' + cur.nav + '</div>' +
    '<span class="pz-chip">Alokasi ' + cur.durasi + '</span>' +
    '<ul>' + poinHtml + '</ul>' +
    '<div class="pz-ask"><strong>Pemantik kelas:</strong><br>' + (cur.tanya || '') + '</div>';
  if (NOTES_AKTIF) document.body.appendChild(notes);

  /* ---------- bantuan shortcut ---------- */
  var help = document.createElement('div');
  help.className = 'pz-help';
  var rows = (NOTES_AKTIF ? [['N', 'Buka atau tutup catatan pengajar']] : []).concat([
    ['Panah kanan / Spasi', 'Screen berikutnya'],
    ['Panah kiri', 'Screen sebelumnya'],
    ['1 sampai 6', 'Loncat ke screen tertentu'],

    ['F', 'Layar penuh'],
    ['T', 'Reset timer sesi'],
    ['B', 'Sembunyikan bilah navigasi'],
    ['H', 'Kembali ke halaman TM1'],
    ['Esc', 'Tutup panel yang terbuka']
  ]);
  var rowHtml = '';
  rows.forEach(function (r) {
    rowHtml += '<div class="pz-help-row"><span>' + r[1] + '</span><span class="pz-key">' + r[0] + '</span></div>';
  });
  help.innerHTML = '<div class="pz-help-card"><h3>Shortcut Mode Mengajar</h3>' + rowHtml + '</div>';
  document.body.appendChild(help);

  /* ---------- timer sesi ---------- */
  var timerEl = bar.querySelector('[data-act="timer"]');
  var store = null;
  try { store = window.sessionStorage; } catch (e) { store = null; }
  var start = null;
  try { start = store && store.getItem('pzStart'); } catch (e) { start = null; }
  if (!start) {
    start = String(new Date().getTime());
    try { if (store) store.setItem('pzStart', start); } catch (e) {}
  }
  function tick() {
    var s = Math.floor((new Date().getTime() - Number(start)) / 1000);
    var m = Math.floor(s / 60);
    var ss = s % 60;
    timerEl.textContent = (m < 10 ? '0' : '') + m + ':' + (ss < 10 ? '0' : '') + ss;
    if (m >= 60) { timerEl.classList.add('pz-over'); } else { timerEl.classList.remove('pz-over'); }
  }
  tick();
  setInterval(tick, 1000);

  /* ---------- aksi ---------- */
  function toggleNotes() { if (NOTES_AKTIF) notes.classList.toggle('pz-open'); }
  function toggleFull() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  }
  function resetTimer() {
    start = String(new Date().getTime());
    try { if (store) store.setItem('pzStart', start); } catch (e) {}
    tick();
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-act], [data-go]') : null;
    if (!t) {
      if (!notes.contains(e.target)) notes.classList.remove('pz-open');
      return;
    }
    if (t.hasAttribute('data-go')) { go(Number(t.getAttribute('data-go'))); return; }
    var act = t.getAttribute('data-act');
    if (act === 'home') { location.href = DECK.home; }
    else if (act === 'prev') { go(idx - 1); }
    else if (act === 'next') { go(idx + 1); }
    else if (act === 'notes') { toggleNotes(); }
    else if (act === 'full') { toggleFull(); }
    else if (act === 'timer') { resetTimer(); }
    else if (act === 'help') { help.classList.add('pz-open'); }
  });

  help.addEventListener('click', function () { help.classList.remove('pz-open'); });

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var k = e.key;
    if (k === 'ArrowRight' || k === ' ' || k === 'PageDown') { e.preventDefault(); go(idx + 1); }
    else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); go(idx - 1); }
    else if (k >= '1' && k <= String(total)) { go(Number(k) - 1); }
    else if (k === 'n' || k === 'N') { toggleNotes(); }
    else if (k === 'f' || k === 'F') { toggleFull(); }
    else if (k === 't' || k === 'T') { resetTimer(); }
    else if (k === 'b' || k === 'B') { bar.classList.toggle('pz-hidden'); }
    else if (k === 'h' || k === 'H') { location.href = DECK.home; }
    else if (k === '?') { help.classList.add('pz-open'); }
    else if (k === 'Escape') { notes.classList.remove('pz-open'); help.classList.remove('pz-open'); }
  });
})();
