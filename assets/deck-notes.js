/* ============================================================
   Pelengkap deck TM1 (TM1_Deck.html)

   Menambahkan dua hal tanpa mengubah isi deck aslinya:
     1. Tombol balik ke halaman TM1 di bilah navigasi
     2. Catatan pengajar per slide, dibuka dengan tombol N

   Catatan pengajar dimatikan otomatis oleh build-publish.py
   untuk versi yang diunggah ke internet.
   ============================================================ */
(function () {
  'use strict';

  var NOTES_AKTIF = false;

  var CATATAN = [
    {
      nama: 'Cover',
      durasi: '3 menit',
        poin: [],
        tanya: ''
    },
    {
      nama: 'Kickoff',
      durasi: '8 menit',
        poin: [],
        tanya: ''
    },
    {
      nama: 'Relevansi',
      durasi: '12 menit',
        poin: [],
        tanya: ''
    },
    {
      nama: 'Rancangan',
      durasi: '8 menit',
        poin: [],
        tanya: ''
    },
    {
      nama: 'Luaran',
      durasi: '8 menit',
        poin: [],
        tanya: ''
    },
    {
      nama: 'Konsep 5V',
      durasi: '12 menit',
        poin: [],
        tanya: ''
    },
    {
      nama: 'Mindset',
      durasi: '13 menit',
        poin: [],
        tanya: ''
    },
    {
      nama: 'Simulasi Benford',
      durasi: '20 menit',
        poin: [],
        tanya: ''
    }
  ];

  /* ---------- gaya ---------- */
  var css = document.createElement('style');
  css.textContent = [
    '#dnBtn.nb.on{background:var(--lime);color:#16210a;border-color:transparent}',
    '#dnHome{display:flex;align-items:center;gap:6px;font:600 12px/1 "Plus Jakarta Sans",sans-serif;',
    '  color:var(--dim);background:transparent;border:1px solid var(--edge);border-radius:999px;',
    '  padding:8px 14px;cursor:pointer;transition:all .2s ease;text-decoration:none;white-space:nowrap}',
    '#dnHome:hover{color:var(--ink);border-color:var(--cyan)}',
    '#dnPanel{position:fixed;right:20px;bottom:92px;z-index:60;width:min(420px,calc(100vw - 40px));',
    '  max-height:62vh;overflow-y:auto;background:#111726;border:1px solid var(--edge);border-radius:22px;',
    '  padding:22px 24px;box-shadow:0 24px 64px rgba(0,0,0,.6);opacity:0;transform:translateY(16px) scale(.97);',
    '  pointer-events:none;transition:all .3s cubic-bezier(.34,1.4,.64,1);',
    '  font-family:"Plus Jakarta Sans",system-ui,sans-serif}',
    '#dnPanel.open{opacity:1;transform:none;pointer-events:auto}',
    '#dnPanel h4{font:800 10px/1 "Plus Jakarta Sans",sans-serif;letter-spacing:.14em;text-transform:uppercase;',
    '  color:var(--lime);margin-bottom:8px}',
    '#dnPanel .dnTitle{font:700 19px/1.15 "Space Grotesk","Plus Jakarta Sans",sans-serif;color:var(--ink);',
    '  letter-spacing:-.02em;margin-bottom:12px}',
    '#dnPanel .dnChip{display:inline-block;font:700 10.5px/1 "Plus Jakarta Sans",sans-serif;letter-spacing:.06em;',
    '  padding:6px 13px;border-radius:999px;background:var(--lime);color:#16210a;margin-bottom:16px}',
    '#dnPanel ul{list-style:none;margin:0;padding:0}',
    '#dnPanel li{position:relative;padding-left:20px;margin-bottom:11px;font-size:13.5px;line-height:1.55;color:#c3cddf}',
    '#dnPanel li::before{content:"";position:absolute;left:2px;top:8px;width:7px;height:7px;border-radius:2px;',
    '  background:linear-gradient(140deg,var(--cyan),var(--violet))}',
    '#dnPanel .dnAsk{margin-top:14px;padding:13px 15px;border-radius:14px;background:rgba(255,203,87,.1);',
    '  border:1px solid rgba(255,203,87,.28);font-size:12.5px;line-height:1.5;color:#ffd98a}',
    '@media(max-width:640px){#dnHome span{display:none}}'
  ].join('\n');
  document.head.appendChild(css);

  /* ---------- tombol balik ke web ---------- */
  var bar = document.getElementById('bar');
  if (bar) {
    var home = document.createElement('a');
    home.id = 'dnHome';
    home.href = '../../index.html';
    home.title = 'Balik ke beranda kelas';
    home.innerHTML = '‹ <span>Beranda</span>';
    bar.insertBefore(home, bar.firstChild);
  }

  if (!NOTES_AKTIF || !bar) return;

  /* ---------- panel catatan ---------- */
  var panel = document.createElement('div');
  panel.id = 'dnPanel';
  document.body.appendChild(panel);
  panel.addEventListener('click', function (e) { e.stopPropagation(); });

  var btn = document.createElement('button');
  btn.id = 'dnBtn';
  btn.className = 'nb';
  btn.title = 'Catatan pengajar (N)';
  btn.textContent = '📝';
  bar.appendChild(btn);

  function slideAktif() {
    var s = document.querySelectorAll('.screen');
    for (var i = 0; i < s.length; i++) {
      if (s[i].classList.contains('active')) return i;
    }
    return 0;
  }

  function isi() {
    var c = CATATAN[slideAktif()];
    if (!c) { panel.innerHTML = '<h4>Catatan Pengajar</h4><div class="dnTitle">Tidak ada catatan</div>'; return; }
    var li = '';
    c.poin.forEach(function (p) { li += '<li>' + p + '</li>'; });
    panel.innerHTML =
      '<h4>Catatan Pengajar</h4>' +
      '<div class="dnTitle">' + (slideAktif() + 1) + '. ' + c.nama + '</div>' +
      '<span class="dnChip">Alokasi ' + c.durasi + '</span>' +
      '<ul>' + li + '</ul>' +
      '<div class="dnAsk"><b>Pemantik kelas:</b><br>' + c.tanya + '</div>';
  }

  function toggle(paksa) {
    var buka = typeof paksa === 'boolean' ? paksa : !panel.classList.contains('open');
    if (buka) isi();
    panel.classList.toggle('open', buka);
    btn.classList.toggle('on', buka);
  }

  btn.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });
  document.addEventListener('click', function () { toggle(false); });

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    if (e.key === 'n' || e.key === 'N') { toggle(); }
    else if (panel.classList.contains('open')) {
      // pindah slide saat catatan terbuka: ikut ganti isinya
      if (['ArrowRight', 'ArrowLeft', 'PageDown', 'PageUp', 'Home', 'End'].indexOf(e.key) >= 0 ||
          (e.key >= '1' && e.key <= '8')) {
        setTimeout(isi, 60);
      } else if (e.key === 'Escape') { toggle(false); }
    }
  });

  // klik dot atau menu juga menyegarkan isi catatan
  document.addEventListener('click', function (e) {
    if (!e.target.closest('[data-go]')) return;
    if (panel.classList.contains('open')) setTimeout(isi, 60);
  }, true);
})();
