/* ============================================================
   Ruang Simulasi — empat latihan interaktif untuk kelas.
   Semua data ada di berkas ini, tidak perlu server.
   ============================================================ */
(function () {
  'use strict';

  /* ============================================================
     SIM 1 — Detektif Transaksi
     Mahasiswa mengklik baris yang menurutnya janggal.
     ============================================================ */
  var TRX = [
    { id: 'TRX-101', ket: 'Pembelian ATK kantor', jml: 2450000, jam: 'Sen 10:12', aneh: false },
    { id: 'TRX-102', ket: 'Bayar vendor - INV-0451', jml: 18700000, jam: 'Sen 14:05', aneh: false },
    { id: 'TRX-103', ket: 'Bayar vendor - INV-0451', jml: 18700000, jam: 'Sel 09:41', aneh: true,
      alasan: 'Nomor faktur dan nominalnya persis sama dengan transaksi sebelumnya. Ini tanda tagihan kebayar dua kali.' },
    { id: 'TRX-104', ket: 'Biaya listrik pabrik', jml: 31200000, jam: 'Sel 11:20', aneh: false },
    { id: 'TRX-105', ket: 'Pembelian bahan baku', jml: 49999000, jam: 'Rab 16:58', aneh: true,
      alasan: 'Batas persetujuan direktur ada di 50 juta. Nominal ini pas nempel di bawahnya. Pola begini sering dipakai buat ngehindar dari approval.' },
    { id: 'TRX-106', ket: 'Reimburse perjalanan dinas', jml: 4300000, jam: 'Kam 08:30', aneh: false },
    { id: 'TRX-107', ket: 'Transfer ke rekening lain', jml: 27500000, jam: 'Min 02:14', aneh: true,
      alasan: 'Transaksi jalan hari Minggu jam 2 pagi, di luar jam kerja. Waktunya sendiri sudah jadi tanda tanya.' },
    { id: 'TRX-108', ket: 'Bayar jasa konsultan', jml: 15000000, jam: 'Jum 13:47', aneh: false }
  ];

  function rp(n) { return 'Rp ' + n.toLocaleString('id-ID'); }

  var trxWrap = document.getElementById('simTrx');
  if (trxWrap) {
    var ketemu = 0, salah = 0;
    var totalAneh = TRX.filter(function (t) { return t.aneh; }).length;

    trxWrap.innerHTML = TRX.map(function (t, i) {
      return '<button class="trx-row" data-i="' + i + '">' +
        '<span class="trx-id mono">' + t.id + '</span>' +
        '<span class="trx-ket">' + t.ket + '</span>' +
        '<span class="trx-jam mono">' + t.jam + '</span>' +
        '<span class="trx-jml mono">' + rp(t.jml) + '</span>' +
        '</button>';
    }).join('');

    var skor = document.getElementById('simTrxSkor');
    var pesan = document.getElementById('simTrxPesan');

    trxWrap.addEventListener('click', function (e) {
      var row = e.target.closest('.trx-row');
      if (!row || row.classList.contains('done')) return;
      var t = TRX[Number(row.getAttribute('data-i'))];
      row.classList.add('done');

      if (t.aneh) {
        ketemu++;
        row.classList.add('hit');
        row.insertAdjacentHTML('beforeend', '<span class="trx-note ok">Nah, ini dia. ' + t.alasan + '</span>');
      } else {
        salah++;
        row.classList.add('miss');
        row.insertAdjacentHTML('beforeend', '<span class="trx-note no">Yang ini normal. Nominal wajar, jam kerja, nggak ada duplikat.</span>');
      }

      skor.textContent = ketemu + ' dari ' + totalAneh;
      if (ketemu === totalAneh) {
        pesan.classList.add('show');
        pesan.innerHTML = '<b>Selesai. Kalian barusan jadi auditor.</b> Tadi kalian cek 8 baris pakai mata. ' +
          'Auditor sungguhan ngadepin ratusan ribu baris. Di situ komputer yang nyari polanya, ' +
          'dan kalian yang mutusin mana yang beneran masalah. Itu isi kelas ini.';
      }
    });

    var resetTrx = document.getElementById('simTrxReset');
    if (resetTrx) {
      resetTrx.addEventListener('click', function () {
        ketemu = 0; salah = 0;
        skor.textContent = '0 dari ' + totalAneh;
        pesan.classList.remove('show');
        Array.prototype.forEach.call(trxWrap.querySelectorAll('.trx-row'), function (r) {
          r.className = 'trx-row';
          var n = r.querySelector('.trx-note');
          if (n) n.remove();
        });
      });
    }
  }

  /* ============================================================
     SIM 2 — Mulai dari mana
     ============================================================ */
  var PILIHAN = {
    grafik: {
      benar: false,
      judul: 'Kecepetan.',
      teks: 'Grafiknya jadi, tapi kalian cuma tahu angkanya turun. Bos sudah tahu itu. ' +
            'Yang dia mau tahu: turunnya di mana dan harus ngapain.'
    },
    tanya: {
      benar: false,
      judul: 'Lumayan, tapi belum cukup.',
      teks: 'Nanya ke tim sales dapat cerita, bukan bukti. Cerita itu berguna buat nyusun dugaan, ' +
            'tapi tetap harus dicek ke datanya.'
    },
    rumus: {
      benar: true,
      judul: 'Nah, ini yang bener.',
      teks: 'Turun di produk mana? Wilayah mana? Bulan berapa mulai turun? ' +
            'Pertanyaan yang jelas bikin kalian tahu data apa yang perlu dibuka.'
    }
  };

  var simMulai = document.getElementById('simMulai');
  if (simMulai) {
    var hasil = document.getElementById('simMulaiHasil');
    var langkah = document.getElementById('simMulaiLangkah');

    simMulai.addEventListener('click', function (e) {
      var b = e.target.closest('[data-pilih]');
      if (!b) return;
      var p = PILIHAN[b.getAttribute('data-pilih')];

      Array.prototype.forEach.call(simMulai.querySelectorAll('[data-pilih]'), function (x) {
        x.classList.remove('picked', 'wrong', 'right');
      });
      b.classList.add('picked', p.benar ? 'right' : 'wrong');

      hasil.className = 'sim-hasil show ' + (p.benar ? 'ok' : 'no');
      hasil.innerHTML = '<b>' + p.judul + '</b> ' + p.teks;

      if (p.benar) langkah.classList.add('show');
      else langkah.classList.remove('show');
    });
  }

  /* ============================================================
     SIM 3 — Dashboard mini
     ============================================================ */
  var DATA = [
    { kat: 'Elektronik', wil: 'Jakarta', jual: 420, untung: 58 },
    { kat: 'Elektronik', wil: 'Bandung', jual: 260, untung: 31 },
    { kat: 'Elektronik', wil: 'Surabaya', jual: 310, untung: 12 },
    { kat: 'Fashion', wil: 'Jakarta', jual: 280, untung: 62 },
    { kat: 'Fashion', wil: 'Bandung', jual: 340, untung: 71 },
    { kat: 'Fashion', wil: 'Surabaya', jual: 190, untung: 28 },
    { kat: 'Makanan', wil: 'Jakarta', jual: 510, untung: 44 },
    { kat: 'Makanan', wil: 'Bandung', jual: 180, untung: 9 },
    { kat: 'Makanan', wil: 'Surabaya', jual: 220, untung: -6 }
  ];

  var dash = document.getElementById('simDash');
  if (dash) {
    var filterKat = 'Semua';

    function render() {
      var rows = DATA.filter(function (d) { return filterKat === 'Semua' || d.kat === filterKat; });
      var jual = rows.reduce(function (a, b) { return a + b.jual; }, 0);
      var untung = rows.reduce(function (a, b) { return a + b.untung; }, 0);
      var margin = jual ? Math.round(untung / jual * 100) : 0;

      document.getElementById('kpiJual').textContent = jual + ' jt';
      document.getElementById('kpiUntung').textContent = untung + ' jt';
      var m = document.getElementById('kpiMargin');
      m.textContent = margin + '%';
      m.style.color = margin < 10 ? 'var(--pink)' : 'var(--mint)';

      var perWil = {};
      rows.forEach(function (d) {
        if (!perWil[d.wil]) perWil[d.wil] = { jual: 0, untung: 0 };
        perWil[d.wil].jual += d.jual;
        perWil[d.wil].untung += d.untung;
      });
      var maxJual = Math.max.apply(null, Object.keys(perWil).map(function (w) { return perWil[w].jual; }));

      document.getElementById('dashBars').innerHTML = Object.keys(perWil).map(function (w) {
        var v = perWil[w];
        var pct = Math.round(v.jual / maxJual * 100);
        var rugi = v.untung < 0;
        return '<div class="bar-row">' +
          '<span class="bar-lbl">' + w + '</span>' +
          '<span class="bar-track"><i style="width:' + pct + '%;background:' + (rugi ? 'var(--pink)' : 'var(--iris)') + '"></i></span>' +
          '<span class="bar-val mono">' + v.jual + ' jt</span>' +
          '<span class="bar-tag ' + (rugi ? 'bad' : 'good') + '">untung ' + v.untung + ' jt</span>' +
          '</div>';
      }).join('');

      var temuan = document.getElementById('dashTemuan');
      if (filterKat === 'Makanan') {
        temuan.className = 'sim-hasil show no';
        temuan.innerHTML = '<b>Ketemu satu.</b> Makanan di Surabaya jualannya jalan, tapi untungnya minus. ' +
          'Jualan rame belum tentu untung. Ini baru namanya temuan, bukan sekadar angka.';
      } else if (filterKat === 'Elektronik') {
        temuan.className = 'sim-hasil show';
        temuan.innerHTML = '<b>Perhatiin Surabaya.</b> Jualannya nomor dua, tapi untungnya paling kecil. ' +
          'Pertanyaan lanjutannya: diskonnya kegedean, atau ongkos kirimnya mahal?';
      } else {
        temuan.className = 'sim-hasil show';
        temuan.innerHTML = '<b>Coba klik satu kategori.</b> Angka total sering nyembunyiin masalah. ' +
          'Yang keliatan pas dipecah, itu yang dicari.';
      }
    }

    dash.addEventListener('click', function (e) {
      var b = e.target.closest('[data-kat]');
      if (!b) return;
      Array.prototype.forEach.call(dash.querySelectorAll('[data-kat]'), function (x) { x.classList.remove('on'); });
      b.classList.add('on');
      filterKat = b.getAttribute('data-kat');
      render();
    });

    render();
  }

  /* ============================================================
     SIM 4 — Kelompokkan pelanggan
     ============================================================ */
  var TITIK = [
    [12, 18, 0], [16, 22, 0], [9, 14, 0], [14, 26, 0], [20, 20, 0], [11, 28, 0], [17, 15, 0], [22, 25, 0],
    [48, 46, 1], [55, 52, 1], [44, 58, 1], [58, 44, 1], [51, 61, 1], [46, 50, 1], [60, 55, 1], [53, 47, 1],
    [82, 78, 2], [88, 86, 2], [76, 84, 2], [90, 72, 2], [84, 90, 2], [79, 76, 2], [92, 82, 2]
  ];
  var LABEL = [
    { nama: 'Jarang belanja, nominal kecil', aksi: 'Kasih promo perkenalan', warna: 'var(--cyan)' },
    { nama: 'Belanja rutin, nominal sedang', aksi: 'Jaga dengan program loyalitas', warna: 'var(--iris)' },
    { nama: 'Sering belanja, nominal besar', aksi: 'Layani khusus, jangan sampai kabur', warna: 'var(--pink)' }
  ];

  var svg = document.getElementById('simKlaster');
  if (svg) {
    var W = 100;
    function gambar(pakaiWarna) {
      svg.innerHTML = TITIK.map(function (t) {
        var warna = pakaiWarna ? LABEL[t[2]].warna : 'var(--muted)';
        return '<circle cx="' + t[0] + '" cy="' + (W - t[1]) + '" r="2.6" fill="' + warna + '" opacity="' + (pakaiWarna ? .95 : .5) + '"><title>' + t[0] + ' transaksi</title></circle>';
      }).join('');
    }
    gambar(false);

    var kotak = document.getElementById('klasterHasil');
    var btnK = document.getElementById('klasterBtn');
    var btnR = document.getElementById('klasterReset');

    if (btnK) btnK.addEventListener('click', function () {
      gambar(true);
      kotak.classList.add('show');
      kotak.innerHTML = LABEL.map(function (l, i) {
        return '<div class="klaster-item"><span class="dot" style="background:' + l.warna + '"></span>' +
          '<div><b>Kelompok ' + (i + 1) + '</b><span>' + l.nama + '</span>' +
          '<span class="aksi">' + l.aksi + '</span></div></div>';
      }).join('') +
      '<p class="klaster-note">Nggak ada yang ngasih tahu komputer soal tiga kelompok ini. ' +
      'Dia cuma lihat mana titik yang saling berdekatan. Nama dan tindakannya, kalian yang kasih.</p>';
    });

    if (btnR) btnR.addEventListener('click', function () {
      gambar(false);
      kotak.classList.remove('show');
      kotak.innerHTML = '';
    });
  }
})();
