import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas V Semester 1) Mata Pelajaran Matematika
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Matematika Kelas V Semester 1 Kurikulum Merdeka
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan nilai tempat dan nilai angka pada bilangan cacah sampai 100.000.',
    indikatorSoal:
      'Disajikan narasi jumlah pengunjung perpustakaan dalam bilangan lima angka, peserta didik dapat menentukan nilai angka pada posisi ribuan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dan mengurutkan bilangan cacah sampai 100.000.',
    indikatorSoal:
      'Disajikan gambar empat kartu bilangan cacah lima angka, peserta didik dapat mengurutkan bilangan dari yang terbesar ke yang terkecil.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah sehari-hari yang berkaitan dengan penjumlahan dan pengurangan bilangan cacah sampai 100.000.',
    indikatorSoal:
      'Disajikan gambar daftar harga perlengkapan sekolah dan nominal uang pembayaran, peserta didik dapat menghitung uang kembalian.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah kontekstual yang melibatkan operasi perkalian dan pembagian bilangan cacah.',
    indikatorSoal:
      'Disajikan narasi banyak dus air mineral, isi per dus, dan jumlah regu penerima, peserta didik dapat menentukan banyak botol yang diterima setiap regu.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan Kelipatan Persekutuan Terkecil (KPK) dari dua bilangan menggunakan faktorisasi prima.',
    indikatorSoal:
      'Disajikan dua bilangan dua angka, peserta didik dapat menentukan nilai KPK dari kedua bilangan tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan konsep KPK untuk menyelesaikan masalah jadwal kejadian berulang dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan jadwal latihan menari dua orang anak dengan interval hari berbeda dan tanggal latihan bersama pertama, peserta didik dapat menentukan tanggal latihan bersama berikutnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan konsep Faktor Persekutuan Terbesar (FPB) untuk pembagian barang secara merata.',
    indikatorSoal:
      'Disajikan jumlah dua jenis buah yang akan dikemas sama banyak ke dalam kantong plastik, peserta didik dapat menentukan jumlah kantong plastik terbanyak yang dibutuhkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengenali dan menyatakan pecahan berdasarkan model gambar daerah yang diarsir.',
    indikatorSoal:
      'Disajikan gambar persegi panjang yang dibagi menjadi beberapa bagian sama besar dengan sebagian daerah diarsir, peserta didik dapat menentukan nilai pecahannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dan mengurutkan berbagai bentuk pecahan (pecahan biasa, desimal, dan persen).',
    indikatorSoal:
      'Disajikan empat bilangan dalam bentuk pecahan biasa, desimal, dan persen, peserta didik dapat mengurutkannya dari yang terkecil ke terbesar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan operasi penjumlahan pecahan biasa berpenyebut berbeda.',
    indikatorSoal:
      'Disajikan gambar dua potong pita dengan panjang pecahan berbeda penyebut yang disambungkan, peserta didik dapat menghitung panjang total pita.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis masalah kontekstual yang melibatkan penjumlahan dan pengurangan pecahan campuran.',
    indikatorSoal:
      'Disajikan cerita persediaan tepung terigu awal, tepung yang digunakan, dan tepung yang dibeli lagi dalam bentuk pecahan campuran, peserta didik dapat menghitung sisa tepung terigu.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan keliling bangun datar segitiga berdasarkan ukuran sisi-sisinya.',
    indikatorSoal:
      'Disajikan gambar segitiga sama kaki beserta ukuran alas dan sisi kakinya, peserta didik dapat menghitung keliling segitiga tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan keliling bangun datar gabungan segi banyak.',
    indikatorSoal:
      'Disajikan gambar bangun datar gabungan berbentuk huruf L beserta panjang tiap sisinya, peserta didik dapat menentukan keliling bangun tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah kontekstual yang berkaitan dengan keliling persegi.',
    indikatorSoal:
      'Disajikan ukuran sisi kebun berbentuk persegi yang akan dipagari dengan menyisakan jarak pintu masuk, peserta didik dapat menghitung panjang pagar yang dibutuhkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung luas daerah bangun datar segitiga menggunakan alas dan tinggi.',
    indikatorSoal:
      'Disajikan gambar bangun datar segitiga lengkap dengan ukuran alas dan garis tinggi, peserta didik dapat menghitung luas daerah segitiga.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung luas daerah bangun datar trapesium.',
    indikatorSoal:
      'Disajikan gambar bangun datar trapesium beserta ukuran kedua sisi sejajar dan tingginya, peserta didik dapat menghitung luas daerah trapesium.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dan menghitung luas daerah bangun datar gabungan (persegi panjang dan segitiga).',
    indikatorSoal:
      'Disajikan gambar bangun datar gabungan persegi panjang dan segitiga di atasnya beserta ukurannya, peserta didik dapat menghitung luas total bangun tersebut.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah kontekstual konversi satuan dan luas persegi panjang serta persegi.',
    indikatorSoal:
      'Disajikan ukuran lantai ruang kelas (dalam meter) dan ukuran ubin keramik persegi (dalam cm), peserta didik dapat menentukan banyak ubin yang diperlukan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membaca, menentukan nilai tempat, dan membandingkan bilangan cacah sampai 100.000.',
    indikatorSoal:
      'Disajikan sebuah bilangan lima angka dan tiga pernyataan terkait cara membaca, nilai tempat, serta perbandingan bilangan, peserta didik dapat memilih semua pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan keliling dan luas daerah bangun datar jajar genjang.',
    indikatorSoal:
      'Disajikan gambar jajar genjang PQRS beserta ukuran alas, sisi miring, dan tingginya, peserta didik dapat memilih semua pernyataan yang benar mengenai keliling dan luasnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis masalah kontekstual yang melibatkan berbagai bentuk pecahan dan desimal.',
    indikatorSoal:
      'Disajikan cerita penggunaan panjang kain dalam bentuk desimal dan pecahan biasa, peserta didik dapat memilih semua pernyataan perhitungan yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan operasi penjumlahan dan pengurangan bilangan cacah sampai 100.000 dalam konteks sehari-hari.',
    indikatorSoal:
      'Disajikan narasi sumbangan buku pelajaran, buku cerita, dan buku yang dipinjam, peserta didik dapat menentukan kebenaran (Benar/Salah) pernyataan mengenai jumlah, selisih, dan sisa buku.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan konsep KPK untuk menentukan waktu kejadian bersamaan pada dua interval detik.',
    indikatorSoal:
      'Disajikan interval waktu menyalanya dua lampu hias beserta waktu awal menyala bersama, peserta didik dapat menilai kebenaran (Benar/Salah) nilai KPK, periode bersama, dan pukul menyala bersama berikutnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan konsep FPB untuk menentukan banyak paket maksimal dan isi tiap paket.',
    indikatorSoal:
      'Disajikan jumlah tiga jenis barang bantuan bakti sosial, peserta didik dapat menentukan kebenaran (Benar/Salah) nilai FPB, jumlah paket terbanyak, dan komposisi isi per paket.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan, menjumlahkan, dan mengurangkan pecahan berbeda penyebut menggunakan ilustrasi gelas ukur.',
    indikatorSoal:
      'Disajikan gambar dua gelas ukur berisi pecahan liter air yang berbeda penyebut, peserta didik dapat menentukan kebenaran (Benar/Salah) perbandingan, jumlah, dan selisih volume air.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung nilai pecahan dan persentase dari sekumpulan data siswa.',
    indikatorSoal:
      'Disajikan jumlah siswa kelas V dan proporsi kegemaran olahraga dalam pecahan serta persen, peserta didik dapat menentukan kebenaran (Benar/Salah) jumlah siswa pada tiap cabang olahraga.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan keliling dan luas daerah persegi panjang serta selisih luas dengan persegi di dalamnya.',
    indikatorSoal:
      'Disajikan gambar denah taman persegi panjang dengan kolam persegi di bagian tengah, peserta didik dapat menilai kebenaran (Benar/Salah) keliling taman, luas kolam, dan luas area rumput.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung keliling dan luas daerah bangun datar belah ketupat.',
    indikatorSoal:
      'Disajikan gambar belah ketupat ABCD beserta ukuran sisi dan kedua diagonalnya, peserta didik dapat menentukan kebenaran (Benar/Salah) keliling, luas satu bangun, dan total luas dua bangun.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis keliling dan luas daerah bangun datar layang-layang.',
    indikatorSoal:
      'Disajikan gambar layang-layang KLMN dengan panjang kedua pasang sisi dan kedua diagonalnya, peserta didik dapat mengevaluasi kebenaran (Benar/Salah) keliling, luas, dan perbandingan angkanya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis hubungan antara luas persegi, keliling persegi, dan luas segitiga siku-siku hasil pembagian diagonal.',
    indikatorSoal:
      'Disajikan narasi kertas lipat persegi yang digunting sepanjang diagonalnya menjadi dua segitiga siku-siku, peserta didik dapat menentukan kebenaran (Benar/Salah) luas persegi, luas segitiga, dan keliling persegi.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan matematika.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('bilangan') || t.includes('pecahan') || t.includes('fpb') || t.includes('kpk') || t.includes('persentase')) {
    return 'Bilangan';
  }
  if (t.includes('luas') || t.includes('segitiga') || t.includes('trapesium') || t.includes('jajar genjang') || t.includes('belah ketupat') || t.includes('layang')) {
    return 'Geometri';
  }
  if (t.includes('keliling') || t.includes('satuan')) {
    return 'Pengukuran';
  }
  return 'Bilangan';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
