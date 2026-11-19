import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // --- PILIHAN GANDA (18 SOAL) ---
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Bilangan Cacah sampai 100.000 (Nilai Tempat)',
    difficulty: 'Mudah',
    text: 'Sebuah perpustakaan daerah mencatat jumlah pengunjung selama satu tahun sebanyak 48.725 orang. Nilai angka 8 pada bilangan 48.725 adalah...',
    options: [
      { id: 'A', text: '800' },
      { id: 'B', text: '8.000' },
      { id: 'C', text: '80.000' },
      { id: 'D', text: '80' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada bilangan 48.725:\n• Angka 4 menempati nilai tempat puluh ribuan (40.000)\n• Angka 8 menempati nilai tempat ribuan sehingga nilainya 8.000\n• Angka 7 = ratusan (700), angka 2 = puluhan (20), angka 5 = satuan (5).',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Bilangan Cacah sampai 100.000 (Mengurutkan Bilangan)',
    difficulty: 'Mudah',
    text: 'Perhatikan empat kartu bilangan pada gambar di bawah ini. Urutan bilangan pada kartu tersebut dari yang paling besar ke yang paling kecil adalah...',
    imageUrl: '/images/soal_02_kartu_bilangan.svg',
    imageCaption: 'Empat kartu bilangan cacah sampai 100.000',
    options: [
      { id: 'A', text: '65.408; 64.850; 64.580; 64.508' },
      { id: 'B', text: '65.408; 64.580; 64.850; 64.508' },
      { id: 'C', text: '64.850; 65.408; 64.580; 64.508' },
      { id: 'D', text: '64.508; 64.580; 64.850; 65.408' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bandingkan mulai dari nilai tempat ribuan dan ratusan:\n• 65.408 memiliki angka ribuan 5 (terbesar)\n• Antara bilangan dengan ribuan 4: 64.850 (ratusan 8) > 64.580 (ratusan 5, puluhan 8) > 64.508 (ratusan 5, puluhan 0).\nJadi urutan dari terbesar ke terkecil: 65.408; 64.850; 64.580; 64.508.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Operasi Penjumlahan & Pengurangan Bilangan Cacah',
    difficulty: 'Sedang',
    text: 'Perhatikan daftar harga perlengkapan sekolah di Koperasi Siswa pada gambar berikut. Rani membeli 1 buah tas sekolah dan 1 tempat pensil. Jika Rani membayar dengan uang Rp100.000,00, berapa uang kembalian yang diterima Rani?',
    imageUrl: '/images/soal_03_daftar_harga.svg',
    imageCaption: 'Daftar harga perlengkapan di Koperasi Siswa',
    options: [
      { id: 'A', text: 'Rp18.000,00' },
      { id: 'B', text: 'Rp19.000,00' },
      { id: 'C', text: 'Rp21.000,00' },
      { id: 'D', text: 'Rp29.000,00' },
    ],
    correctAnswer: 'B',
    explanation:
      'Harga 1 tas sekolah = Rp62.500,00\nHarga 1 tempat pensil = Rp18.500,00\nTotal belanja = Rp62.500,00 + Rp18.500,00 = Rp81.000,00\nUang kembalian = Rp100.000,00 - Rp81.000,00 = Rp19.000,00.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Operasi Perkalian & Pembagian Bilangan Cacah',
    difficulty: 'Sedang',
    text: 'Panitia lomba gerak jalan menyiapkan 45 dus air mineral. Setiap dus berisi 24 botol air mineral. Seluruh air mineral tersebut akan dibagikan secara merata kepada 18 regu peserta. Berapa botol air mineral yang diterima oleh setiap regu?',
    options: [
      { id: 'A', text: '50 botol' },
      { id: 'B', text: '55 botol' },
      { id: 'C', text: '60 botol' },
      { id: 'D', text: '65 botol' },
    ],
    correctAnswer: 'C',
    explanation:
      'Total botol air mineral = 45 dus × 24 botol = 1.080 botol.\nBanyak botol tiap regu = 1.080 ÷ 18 = 60 botol.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'KPK (Kelipatan Persekutuan Terkecil)',
    difficulty: 'Mudah',
    text: 'Kelipatan Persekutuan Terkecil (KPK) dari bilangan 18 dan 24 adalah...',
    options: [
      { id: 'A', text: '36' },
      { id: 'B', text: '48' },
      { id: 'C', text: '72' },
      { id: 'D', text: '144' },
    ],
    correctAnswer: 'C',
    explanation:
      'Faktorisasi prima:\n18 = 2 × 3²\n24 = 2³ × 3\nKPK = ambil semua faktor prima dengan pangkat tertinggi = 2³ × 3² = 8 × 9 = 72.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Penerapan KPK dalam Kehidupan Sehari-hari',
    difficulty: 'Sedang',
    text: 'Dayu berlatih menari setiap 4 hari sekali, sedangkan Sinta berlatih menari di sanggar yang sama setiap 6 hari sekali. Jika pada tanggal 5 Oktober mereka berlatih menari bersama-sama, pada tanggal berapa mereka akan berlatih menari bersama-sama lagi untuk berikutnya?',
    options: [
      { id: 'A', text: '15 Oktober' },
      { id: 'B', text: '17 Oktober' },
      { id: 'C', text: '19 Oktober' },
      { id: 'D', text: '29 Oktober' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kelipatan 4 = 4, 8, 12, 16, ...\nKelipatan 6 = 6, 12, 18, ...\nKPK dari 4 dan 6 adalah 12.\nMereka berlatih bersama lagi = 5 Oktober + 12 hari = 17 Oktober.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Penerapan FPB dalam Kehidupan Sehari-hari',
    difficulty: 'Sedang',
    text: 'Ibu membeli 36 buah jeruk dan 48 buah apel untuk bingkisan ulang tahun. Kedua jenis buah tersebut akan dimasukkan ke dalam kantong plastik dengan jumlah jeruk dan apel yang sama banyak di setiap kantong. Paling banyak kantong plastik yang diperlukan Ibu adalah...',
    options: [
      { id: 'A', text: '6 kantong' },
      { id: 'B', text: '8 kantong' },
      { id: 'C', text: '12 kantong' },
      { id: 'D', text: '18 kantong' },
    ],
    correctAnswer: 'C',
    explanation:
      'Faktorisasi prima:\n36 = 2² × 3²\n48 = 2⁴ × 3\nFPB = 2² × 3 = 4 × 3 = 12 kantong.\nSetiap kantong berisi 3 buah jeruk dan 4 buah apel.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Bilangan Pecahan (Model Daerah Terarsir)',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar daerah persegi panjang yang dibagi menjadi beberapa bagian sama besar berikut. Nilai pecahan yang ditunjukkan oleh bagian yang diarsir biru terhadap keseluruhan bangun adalah...',
    imageUrl: '/images/soal_08_pecahan_arsir.svg',
    imageCaption: 'Model pecahan persegi panjang terbagi menjadi 8 bagian sama besar',
    options: [
      { id: 'A', text: '3/8' },
      { id: 'B', text: '5/8' },
      { id: 'C', text: '5/3' },
      { id: 'D', text: '3/5' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bangun persegi panjang terbagi menjadi 8 kotak sama besar (penyebut = 8).\nBanyak kotak yang diarsir biru ada 5 kotak (pembilang = 5).\nJadi nilai pecahannya adalah 5/8.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Membandingkan dan Mengurutkan Pecahan',
    difficulty: 'Sedang',
    text: 'Urutan bilangan pecahan berikut dari yang nilainya paling kecil ke yang paling besar adalah: 3/4 ; 0,6 ; 65% ; 1/2',
    options: [
      { id: 'A', text: '1/2 ; 0,6 ; 65% ; 3/4' },
      { id: 'B', text: '0,6 ; 1/2 ; 65% ; 3/4' },
      { id: 'C', text: '1/2 ; 65% ; 0,6 ; 3/4' },
      { id: 'D', text: '3/4 ; 65% ; 0,6 ; 1/2' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ubah semua pecahan ke bentuk desimal dua angka di belakang koma:\n• 3/4 = 0,75\n• 0,6 = 0,60\n• 65% = 0,65\n• 1/2 = 0,50\nUrutan dari yang paling kecil: 1/2 ; 0,6 ; 65% ; 3/4.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Penjumlahan Pecahan Berbeda Penyebut',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar dua potong pita milik Lani. Pita merah panjangnya 3/4 meter dan pita biru panjangnya 2/5 meter. Jika kedua pita tersebut disambungkan tanpa tumpang tindih, panjang keseluruhan pita Lani adalah...',
    imageUrl: '/images/soal_10_pita_pecahan.svg',
    imageCaption: 'Ilustrasi penyambungan pita merah dan pita biru',
    options: [
      { id: 'A', text: '5/9 meter' },
      { id: 'B', text: '1 1/20 meter' },
      { id: 'C', text: '1 3/20 meter' },
      { id: 'D', text: '1 7/20 meter' },
    ],
    correctAnswer: 'C',
    explanation:
      'Samakan penyebut dengan KPK dari 4 dan 5, yaitu 20:\n3/4 + 2/5 = 15/20 + 8/20 = 23/20 = 1 3/20 meter.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Operasi Hitung Campuran Pecahan',
    difficulty: 'Sukar',
    text: 'Ibu memiliki persediaan tepung terigu sebanyak 3 1/2 kg. Sebanyak 1 3/4 kg digunakan untuk membuat kue bolu, lalu ibu membeli lagi 1/2 kg tepung terigu. Berapa kg sisa tepung terigu yang dimiliki Ibu sekarang?',
    options: [
      { id: 'A', text: '1 3/4 kg' },
      { id: 'B', text: '2 1/4 kg' },
      { id: 'C', text: '2 1/2 kg' },
      { id: 'D', text: '2 3/4 kg' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sisa tepung = 3 1/2 - 1 3/4 + 1/2\n= (3 2/4 - 1 3/4) + 2/4\n= 7/2 - 7/4 + 1/2\n= 14/4 - 7/4 + 2/4 = 9/4 = 2 1/4 kg.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Keliling Segitiga',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar segitiga sama kaki ABC di bawah ini. Keliling segitiga ABC tersebut adalah...',
    imageUrl: '/images/soal_12_segitiga_sama_kaki.svg',
    imageCaption: 'Segitiga sama kaki ABC dengan ukuran sisi-sisinya',
    options: [
      { id: 'A', text: '33 cm' },
      { id: 'B', text: '47 cm' },
      { id: 'C', text: '52 cm' },
      { id: 'D', text: '57 cm' },
    ],
    correctAnswer: 'C',
    explanation:
      'Keliling segitiga = jumlah panjang seluruh sisinya = AB + BC + AC\n= 19 cm + 14 cm + 19 cm = 52 cm.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Keliling Bangun Datar Gabungan',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar bangun datar gabungan berbentuk huruf L beserta ukuran sisi-sisinya (semua sudut siku-siku). Keliling bangun datar tersebut adalah...',
    imageUrl: '/images/soal_13_bangun_L.svg',
    imageCaption: 'Bangun datar segi banyak berbentuk huruf L',
    options: [
      { id: 'A', text: '50 cm' },
      { id: 'B', text: '55 cm' },
      { id: 'C', text: '60 cm' },
      { id: 'D', text: '64 cm' },
    ],
    correctAnswer: 'C',
    explanation:
      'Keliling bangun adalah jumlah seluruh sisi luarnya:\nKeliling = 18 + 12 + 10 + 5 + 8 + 7 = 60 cm.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Penerapan Keliling Bangun Datar (Persegi)',
    difficulty: 'Sedang',
    text: 'Paman memiliki kebun berbentuk persegi dengan panjang sisi 25 meter. Di sekeliling tepi kebun tersebut akan dipasangi pagar bambu dengan menyisakan 2 meter untuk pintu masuk. Panjang pagar bambu yang harus dibuat Paman adalah...',
    options: [
      { id: 'A', text: '98 meter' },
      { id: 'B', text: '100 meter' },
      { id: 'C', text: '102 meter' },
      { id: 'D', text: '123 meter' },
    ],
    correctAnswer: 'A',
    explanation:
      'Keliling kebun persegi = 4 × sisi = 4 × 25 m = 100 meter.\nDikurangi pintu masuk 2 m = 100 m - 2 m = 98 meter.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Luas Daerah Segitiga',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar bangun datar segitiga beserta ukuran alas dan tingginya berikut ini. Luas daerah segitiga tersebut adalah...',
    imageUrl: '/images/soal_15_luas_segitiga.svg',
    imageCaption: 'Segitiga dengan panjang alas 18 cm dan tinggi 12 cm',
    options: [
      { id: 'A', text: '54 cm²' },
      { id: 'B', text: '108 cm²' },
      { id: 'C', text: '162 cm²' },
      { id: 'D', text: '216 cm²' },
    ],
    correctAnswer: 'B',
    explanation:
      'Luas segitiga = 1/2 × alas × tinggi\n= 1/2 × 18 cm × 12 cm\n= 9 × 12 = 108 cm².',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Luas Daerah Trapesium',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar bangun datar trapesium berikut. Jika panjang sisi sejajar atas 10 cm, sisi bawah 18 cm, dan tinggi trapesium 8 cm, luas daerah trapesium tersebut adalah...',
    imageUrl: '/images/soal_16_trapesium.svg',
    imageCaption: 'Trapesium dengan sisi sejajar 10 cm dan 18 cm serta tinggi 8 cm',
    options: [
      { id: 'A', text: '96 cm²' },
      { id: 'B', text: '112 cm²' },
      { id: 'C', text: '144 cm²' },
      { id: 'D', text: '224 cm²' },
    ],
    correctAnswer: 'B',
    explanation:
      'Luas trapesium = 1/2 × (jumlah sisi sejajar) × tinggi\n= 1/2 × (10 + 18) × 8\n= 1/2 × 28 × 8 = 14 × 8 = 112 cm².',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Luas Daerah Bangun Datar Gabungan',
    difficulty: 'Sukar',
    text: 'Perhatikan gambar bangun datar gabungan yang terdiri dari sebuah persegi panjang dan sebuah segitiga di atasnya berikut. Luas total bangun datar gabungan tersebut adalah...',
    imageUrl: '/images/soal_17_luas_gabungan.svg',
    imageCaption: 'Gabungan persegi panjang (16 cm × 10 cm) dan segitiga (t = 6 cm)',
    options: [
      { id: 'A', text: '160 cm²' },
      { id: 'B', text: '192 cm²' },
      { id: 'C', text: '208 cm²' },
      { id: 'D', text: '256 cm²' },
    ],
    correctAnswer: 'C',
    explanation:
      '1. Luas persegi panjang = 16 cm × 10 cm = 160 cm².\n2. Luas segitiga atas = 1/2 × 16 cm × 6 cm = 48 cm².\nTotal luas gabungan = 160 cm² + 48 cm² = 208 cm².',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Penerapan Luas Persegi & Persegi Panjang',
    difficulty: 'Sukar',
    text: 'Lantai sebuah ruang kelas berbentuk persegi panjang dengan ukuran panjang 8 meter dan lebar 6 meter. Lantai tersebut akan dipasangi ubin keramik berbentuk persegi berukuran sisi 50 cm × 50 cm. Banyak ubin keramik minimal yang dibutuhkan untuk menutupi seluruh lantai ruang kelas adalah...',
    options: [
      { id: 'A', text: '96 buah' },
      { id: 'B', text: '144 buah' },
      { id: 'C', text: '192 buah' },
      { id: 'D', text: '240 buah' },
    ],
    correctAnswer: 'C',
    explanation:
      'Ubah satuan meter ke cm: panjang = 800 cm, lebar = 600 cm.\nLuas lantai = 800 cm × 600 cm = 480.000 cm².\nLuas 1 ubin = 50 cm × 50 cm = 2.500 cm².\nBanyak ubin = 480.000 ÷ 2.500 = 192 buah.',
  },

  // =========================================================================
  // --- PILIHAN GANDA KOMPLEKS (3 SOAL, MASING-MASING 3 PILIHAN JAWABAN) ---
  // =========================================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Bilangan Cacah sampai 100.000 (Membaca & Membandingkan)',
    difficulty: 'Sedang',
    text: 'Diberikan bilangan cacah 74.509. Pilihlah SEMUA pernyataan yang BENAR mengenai bilangan tersebut! (Jawaban benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Bilangan 74.509 dibaca "tujuh puluh empat ribu lima ratus sembilan"' },
      { id: 'B', text: 'Nilai tempat angka 7 adalah puluh ribuan dan nilai angkanya 70.000' },
      { id: 'C', text: 'Bilangan 74.509 lebih kecil daripada bilangan 74.095' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• A Benar: 74.509 dibaca tujuh puluh empat ribu lima ratus sembilan.\n• B Benar: Angka 7 berada di posisi puluh ribuan bernilai 70.000.\n• C Salah: 74.509 lebih besar daripada 74.095 karena angka ratusannya 5 > 0.',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Keliling & Luas Daerah Jajar Genjang',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar bangun datar jajar genjang PQRS berikut dengan ukuran alas 15 cm, sisi miring 10 cm, dan tinggi 8 cm. Pilihlah SEMUA pernyataan yang bernilai BENAR! (Jawaban benar bisa lebih dari satu)',
    imageUrl: '/images/soal_20_jajar_genjang.svg',
    imageCaption: 'Jajar genjang PQRS dengan alas 15 cm, sisi miring 10 cm, dan tinggi 8 cm',
    options: [
      { id: 'A', text: 'Keliling jajar genjang PQRS adalah 50 cm' },
      { id: 'B', text: 'Luas daerah jajar genjang PQRS adalah 120 cm²' },
      { id: 'C', text: 'Luas daerah jajar genjang PQRS adalah 150 cm²' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Keliling = 2 × (15 cm + 10 cm) = 2 × 25 = 50 cm (A Benar).\n• Luas = alas × tinggi = 15 cm × 8 cm = 120 cm² (B Benar, sedangkan C Salah karena tinggi adalah 8 cm, bukan sisi miring 10 cm).',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Operasi Pecahan & Desimal dalam Kehidupan Sehari-hari',
    difficulty: 'Sukar',
    text: 'Ibu memiliki sepotong kain sepanjang 2,5 meter. Sebanyak 3/4 meter digunakan untuk membuat taplak meja dan 0,5 meter digunakan untuk membuat hiasan. Pilihlah SEMUA pernyataan yang BENAR! (Jawaban benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Panjang kain yang digunakan untuk taplak meja sama dengan 0,75 meter' },
      { id: 'B', text: 'Total panjang kain yang sudah digunakan Ibu adalah 1,25 meter' },
      { id: 'C', text: 'Sisa kain milik Ibu sekarang adalah 1 1/4 meter' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      '• Taplak meja = 3/4 m = 0,75 m (A Benar).\n• Total terpakai = 0,75 m + 0,5 m = 1,25 m (B Benar).\n• Sisa kain = 2,5 m - 1,25 m = 1,25 m = 1 1/4 m (C Benar).\nKetiga pernyataan bernilai benar.',
  },

  // =========================================================================
  // --- PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL, MASING-MASING 3 PERNYATAAN) ---
  // =========================================================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Operasi Hitung Bilangan Cacah sampai 100.000',
    difficulty: 'Mudah',
    text: 'Perpustakaan Daerah menerima sumbangan buku pelajaran sebanyak 35.450 eksemplar dan buku cerita sebanyak 18.750 eksemplar. Dalam sebulan, sebanyak 12.200 eksemplar buku dipinjam oleh sekolah-sekolah. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Total seluruh buku sumbangan yang diterima perpustakaan mula-mula adalah 54.200 eksemplar.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Selisih antara banyak buku pelajaran dan buku cerita adalah 16.700 eksemplar.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Banyak buku sumbangan yang masih tersisa di perpustakaan saat ini adalah 41.000 eksemplar.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Total buku = 35.450 + 18.750 = 54.200 eksemplar (BENAR).\n2. Selisih = 35.450 - 18.750 = 16.700 eksemplar (BENAR).\n3. Sisa buku = 54.200 - 12.200 = 42.000 eksemplar (SALAH, tertulis 41.000).',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'KPK dalam Jadwal Waktu Bersamaan',
    difficulty: 'Sedang',
    text: 'Di halaman sekolah terpasang dua lampu hias berwarna merah dan hijau. Lampu merah menyala setiap 15 detik sekali, sedangkan lampu hijau menyala setiap 20 detik sekali. Pada pukul 07.00.00 kedua lampu menyala bersama-sama. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Kelipatan Persekutuan Terkecil (KPK) dari 15 dan 20 adalah 60.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kedua lampu akan menyala bersama-sama lagi setiap 60 detik (1 menit) sekali.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Kedua lampu menyala bersama-sama untuk kedua kalinya pada pukul 07.02.00.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 15 = 3 × 5; 20 = 2² × 5; KPK = 2² × 3 × 5 = 60 (BENAR).\n2. Kedua lampu menyala bersamaan tiap 60 detik atau 1 menit (BENAR).\n3. Menyala bersamaan ke-2 = 07.00.00 + 1 menit = 07.01.00 (SALAH, tertulis 07.02.00).',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'FPB dalam Pembagian Paket Sama Banyak',
    difficulty: 'Sedang',
    text: 'Dalam kegiatan bakti sosial kelas V, terkumpul 42 bungkus mie instan, 56 botol minyak goreng, dan 70 bungkus gula pasir. Seluruh barang akan dikemas menjadi sebanyak-banyaknya paket sembako dengan isi setiap jenis barang yang sama banyak. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Faktor Persekutuan Terbesar (FPB) dari 42, 56, dan 70 adalah 14.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jumlah paket sembako terbanyak yang dapat dibuat adalah 14 paket.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Setiap paket sembako berisi 3 mie instan, 4 botol minyak goreng, dan 6 bungkus gula pasir.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 42 = 2 × 3 × 7; 56 = 2³ × 7; 70 = 2 × 5 × 7. FPB = 2 × 7 = 14 (BENAR).\n2. Jumlah paket terbanyak = 14 paket (BENAR).\n3. Isi tiap paket: Mie = 42 ÷ 14 = 3; Minyak = 56 ÷ 14 = 4; Gula = 70 ÷ 14 = 5 bungkus (SALAH, tertulis 6 bungkus gula).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Perbandingan, Penjumlahan, & Pengurangan Pecahan',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar dua gelas ukur yang berisi air berikut ini. Gelas A berisi 3/5 liter air dan Gelas B berisi 1/4 liter air. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    imageUrl: '/images/soal_25_gelas_ukur.svg',
    imageCaption: 'Dua gelas ukur berskala pecahan liter (Gelas A: 3/5 L, Gelas B: 1/4 L)',
    statements: [
      {
        id: 's1',
        text: 'Volume air di dalam Gelas A lebih banyak daripada volume air di dalam Gelas B.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jika air di Gelas A dan Gelas B digabungkan, total volume air menjadi 17/20 liter.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Selisih volume air antara Gelas A dan Gelas B adalah 2/5 liter.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Samakan penyebut menjadi 20: Gelas A = 3/5 = 12/20 L; Gelas B = 1/4 = 5/20 L. Karena 12/20 > 5/20, Gelas A lebih banyak (BENAR).\n2. Total volume = 12/20 + 5/20 = 17/20 liter (BENAR).\n3. Selisih volume = 12/20 - 5/20 = 7/20 liter (SALAH, tertulis 2/5 liter).',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Pecahan & Persentase dari Sekumpulan Data',
    difficulty: 'Sedang',
    text: 'Jumlah seluruh siswa kelas V SD Nusantara adalah 40 anak. Sebanyak 2/5 bagian siswa gemar olahraga renang, 35% gemar sepak bola, dan sisanya gemar bulu tangkis. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Banyak siswa yang gemar olahraga renang adalah 16 anak.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Banyak siswa yang gemar sepak bola adalah 14 anak.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Banyak siswa yang gemar bulu tangkis adalah 10 anak.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Gemar renang = 2/5 × 40 = 16 anak (BENAR).\n2. Gemar sepak bola = 35% × 40 = (35/100) × 40 = 14 anak (BENAR).\n3. Gemar bulu tangkis = 40 - (16 + 14) = 10 anak (BENAR).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Keliling & Luas Daerah Persegi Panjang dan Persegi',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar denah taman sekolah berbentuk persegi panjang (20 m × 12 m) yang di dalamnya terdapat sebuah kolam ikan berbentuk persegi (sisi 4 m). Bagian luar kolam ditanami rumput hijau. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    imageUrl: '/images/soal_27_denah_taman.svg',
    imageCaption: 'Denah taman sekolah 20 m × 12 m dengan kolam persegi 4 m × 4 m',
    statements: [
      {
        id: 's1',
        text: 'Keliling bagian luar taman persegi panjang tersebut adalah 64 meter.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Luas kolam ikan berbentuk persegi adalah 16 meter persegi (m²).',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Luas daerah taman yang ditanami rumput hijau (di luar kolam) adalah 224 m².',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Keliling taman = 2 × (20 + 12) = 2 × 32 = 64 meter (BENAR).\n2. Luas kolam = 4 m × 4 m = 16 m² (BENAR).\n3. Luas taman total = 20 × 12 = 240 m². Luas area rumput = 240 - 16 = 224 m² (BENAR).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Keliling & Luas Daerah Belah Ketupat',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar bangun datar belah ketupat ABCD berikut. Diketahui panjang setiap sisinya 10 cm, panjang diagonal pertama (d₁) = 16 cm, dan diagonal kedua (d₂) = 12 cm. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    imageUrl: '/images/soal_28_belah_ketupat.svg',
    imageCaption: 'Belah ketupat ABCD dengan sisi 10 cm dan diagonal 16 cm & 12 cm',
    statements: [
      {
        id: 's1',
        text: 'Keliling bangun datar belah ketupat ABCD adalah 40 cm.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Luas daerah belah ketupat ABCD adalah 96 cm².',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika dibuat 2 buah hiasan belah ketupat yang sama, total luas kertas yang dibutuhkan adalah 182 cm².',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Keliling belah ketupat = 4 × sisi = 4 × 10 cm = 40 cm (BENAR).\n2. Luas belah ketupat = 1/2 × d₁ × d₂ = 1/2 × 16 × 12 = 96 cm² (BENAR).\n3. Untuk 2 hiasan = 2 × 96 cm² = 192 cm² (SALAH, tertulis 182 cm²).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Keliling & Luas Daerah Layang-Layang',
    difficulty: 'Sukar',
    text: 'Perhatikan gambar layang-layang KLMN berikut dengan sisi pendek 10 cm, sisi panjang 17 cm, diagonal LN = 16 cm, dan diagonal KM = 21 cm. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    imageUrl: '/images/soal_29_layang_layang.svg',
    imageCaption: 'Layang-layang KLMN dengan panjang sisi dan kedua diagonalnya',
    statements: [
      {
        id: 's1',
        text: 'Keliling layang-layang KLMN adalah 54 cm.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Luas daerah layang-layang KLMN adalah 168 cm².',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Angka ukuran keliling layang-layang lebih besar dibandingkan angka ukuran luas layang-layang tersebut.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Keliling = 2 × (10 + 17) = 2 × 27 = 54 cm (BENAR).\n2. Luas = 1/2 × LN × KM = 1/2 × 16 × 21 = 8 × 21 = 168 cm² (BENAR).\n3. Nilai keliling (54) lebih kecil dari luas (168) (SALAH).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Hubungan Luas Persegi & Segitiga Siku-siku',
    difficulty: 'Sukar',
    text: 'Sebuah kertas lipat berbentuk persegi memiliki panjang sisi 16 cm. Kertas tersebut digunting tepat di sepanjang salah satu diagonalnya sehingga terbentuk dua buah segitiga siku-siku yang sama besar. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Luas kertas lipat berbentuk persegi mula-mula adalah 256 cm².',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Luas masing-masing segitiga siku-siku yang terbentuk adalah 128 cm².',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Keliling kertas lipat persegi mula-mula adalah 64 cm.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Luas persegi = 16 cm × 16 cm = 256 cm² (BENAR).\n2. Karena dipotong sepanjang diagonal menjadi 2 bagian sama besar, luas tiap segitiga = 256 ÷ 2 = 128 cm² (BENAR).\n3. Keliling persegi = 4 × 16 cm = 64 cm (BENAR).',
  },
];
