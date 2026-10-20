
const resep = [
  {
    id: 1,
    nama: "Ayam Taliwang",
    daerah: "Nusa Tenggara Barat",
    gambar: "images/ayam taliwang.jpg",
    deskripsi: "Ayam bakar berbumbu pedas khas Lombok.",
    bahan: [
      "1 ekor ayam, belah sesuai kebutuhan",
      "8 cabai merah",
      "5 siung bawang merah",
      "4 siung bawang putih",
      "1 buah tomat",
      "1 sendok teh terasi",
      "Garam dan gula secukupnya",
      "Minyak untuk menumis"
    ],
    cara: [
      "Bersihkan ayam dan tiriskan.",
      "Haluskan cabai, bawang merah, bawang putih, tomat, dan terasi.",
      "Tumis bumbu hingga harum.",
      "Lumuri ayam dengan bumbu secara merata.",
      "Panggang atau bakar ayam sambil diolesi bumbu hingga matang."
    ]
  },
  {
    id: 2,
    nama: "Pempek",
    daerah: "Sumatera Selatan",
    gambar: "images/pempek.jpg",
    deskripsi: "Olahan ikan dengan kuah cuko khas Palembang.",
    bahan: [
      "500 gram ikan giling",
      "250 gram tepung tapioka",
      "150–200 ml air, sesuaikan adonan",
      "2 siung bawang putih",
      "Garam secukupnya",
      "Gula merah untuk cuko",
      "Asam jawa",
      "Cabai dan air untuk cuko"
    ],
    cara: [
      "Campurkan ikan giling, air, bawang putih halus, dan garam.",
      "Tambahkan tepung tapioka sedikit demi sedikit hingga bisa dibentuk.",
      "Bentuk adonan sesuai selera.",
      "Rebus dalam air mendidih hingga pempek mengapung dan matang.",
      "Rebus gula merah, asam jawa, cabai, bawang putih, dan air untuk membuat cuko.",
      "Tiriskan pempek dan sajikan dengan kuah cuko."
    ]
  },
  {
    id: 3,
    nama: "Rendang",
    daerah: "Sumatera Barat",
    gambar: "images/rendang.jpg",
    deskripsi: "Daging sapi berbumbu rempah dan santan.",
    bahan: [
      "500 gram daging sapi",
      "500 ml santan kental",
      "8 siung bawang merah",
      "4 siung bawang putih",
      "8 cabai merah",
      "2 cm jahe",
      "3 cm lengkuas",
      "2 batang serai",
      "Daun jeruk dan daun salam",
      "Garam secukupnya"
    ],
    cara: [
      "Potong daging sapi sesuai selera.",
      "Haluskan bawang merah, bawang putih, cabai, dan jahe.",
      "Masukkan santan, bumbu halus, serai, lengkuas, serta daun aromatik ke dalam panci.",
      "Masukkan daging dan masak dengan api kecil sambil diaduk berkala.",
      "Lanjutkan memasak hingga daging empuk dan bumbu mengental.",
      "Pastikan daging matang sebelum disajikan."
    ]
  },
  {
    id: 4,
    nama: "Sate Ayam",
    daerah: "Jawa",
    gambar: "images/sate ayam.jpg",
    deskripsi: "Potongan ayam bakar dengan saus kacang.",
     bahan: [
      "500 gram daging ayam tanpa tulang",
      "Tusuk sate secukupnya",
      "150 gram kacang tanah",
      "3 siung bawang putih",
      "3 butir bawang merah",
      "Kecap manis",
      "Garam secukupnya",
      "Air secukupnya"
    ],
    cara: [
      "Potong ayam menjadi ukuran kecil.",
      "Tusukkan potongan ayam ke tusuk sate.",
      "Goreng kacang tanah lalu haluskan bersama bawang.",
      "Masak bumbu kacang dengan air, kecap, dan garam hingga mengental.",
      "Bakar sate sambil diolesi kecap hingga matang merata.",
      "Sajikan sate dengan saus kacang."
    ]
  },
  {
    id: 5,
    nama: "Gudeg",
    daerah: "DI Yogyakarta",
    gambar: "images/gudeg.jpg",
    deskripsi: "Nangka muda yang dimasak dengan santan dan rempah.",
    bahan: [
      "500 gram nangka muda",
      "400 ml santan",
      "5 siung bawang merah",
      "3 siung bawang putih",
      "2 lembar daun salam",
      "2 cm lengkuas",
      "50 gram gula merah",
      "Garam secukupnya"
    ],
    cara: [
      "Potong nangka muda dan rebus hingga agak empuk.",
      "Haluskan bawang merah dan bawang putih.",
      "Masukkan nangka, santan, bumbu halus, daun salam, dan lengkuas ke panci.",
      "Tambahkan gula merah dan garam.",
      "Masak dengan api kecil hingga nangka empuk dan bumbu meresap.",
      "Aduk sesekali agar bagian bawah tidak gosong."
    ]
  },
  {
    id: 6,
    nama: "Rawon",
    daerah: "Jawa Timur",
    gambar: "images/rawon.jpg",
    deskripsi: "Sup daging sapi dengan kuah hitam dari kluwek.",
    bahan: [
      "500 gram daging sapi",
      "2 buah kluwek siap olah",
      "6 siung bawang merah",
      "4 siung bawang putih",
      "2 batang serai",
      "3 lembar daun jeruk",
      "2 cm jahe",
      "1,5 liter air",
      "Garam secukupnya"
    ],
    cara: [
      "Rebus daging hingga empuk, kemudian potong-potong.",
      "Ambil isi kluwek dan pastikan kondisinya baik.",
      "Haluskan kluwek bersama bawang merah, bawang putih, dan jahe.",
      "Tumis bumbu bersama serai dan daun jeruk hingga harum.",
      "Masukkan bumbu ke dalam kaldu dan tambahkan daging.",
      "Masak hingga kuah berwarna gelap dan bumbu meresap."
    ]
  },
  {
    id: 7,
    nama: "Soto Betawi",
    daerah: "DKI Jakarta",
    gambar: "images/soto betawi.jpg",
    deskripsi: "Soto daging dengan kuah gurih khas Betawi.",
    bahan: [
      "500 gram daging sapi",
      "500 ml air kaldu",
      "300 ml santan",
      "5 siung bawang merah",
      "3 siung bawang putih",
      "2 cm jahe",
      "1 batang serai",
      "Daun salam",
      "Garam dan merica secukupnya"
    ],
    cara: [
      "Rebus daging sampai empuk dan potong sesuai selera.",
      "Haluskan bawang merah, bawang putih, dan jahe.",
      "Tumis bumbu halus bersama serai dan daun salam.",
      "Masukkan bumbu ke dalam kaldu.",
      "Tambahkan daging dan santan sambil diaduk perlahan.",
      "Masak hingga matang dan sajikan hangat."
    ]
  },
  {
    id: 8,
    nama: "Papeda",
    daerah: "Papua dan Maluku",
    gambar: "images/papeda.jpg",
    deskripsi: "Bubur sagu yang biasa disajikan dengan ikan kuah kuning.",
    bahan: [
      "200 gram tepung sagu",
      "Air secukupnya",
      "500 gram ikan",
      "2 siung bawang putih",
      "3 siung bawang merah",
      "2 cm kunyit",
      "Jeruk nipis",
      "Garam secukupnya"
    ],
    cara: [
      "Larutkan tepung sagu dengan sedikit air dingin.",
      "Tuangkan air mendidih secara bertahap sambil diaduk hingga bening dan kental.",
      "Bersihkan ikan lalu lumuri dengan jeruk nipis dan garam.",
      "Haluskan bawang merah, bawang putih, dan kunyit.",
      "Tumis bumbu, tambahkan air, lalu masukkan ikan.",
      "Masak hingga ikan matang dan sajikan bersama papeda."
    ]
  },
  {
    id: 9,
    nama: "Bika Ambon",
    daerah: "Sumatera Utara",
    gambar: "images/bika ambon.jpg",
    deskripsi: "Kue bertekstur bersarang dengan aroma pandan.",
    bahan: [
      "200 gram tepung tapioka",
      "50 gram tepung terigu",
      "150 gram gula pasir",
      "200 ml santan",
      "2 butir telur",
      "1 sendok teh ragi instan",
      "Daun pandan atau pasta pandan",
      "Sejumput garam"
    ],
    cara: [
      "Hangatkan santan bersama pandan, lalu dinginkan hingga suam-suam kuku.",
      "Campurkan tepung tapioka, tepung terigu, gula, dan ragi.",
      "Tambahkan telur dan santan sedikit demi sedikit sambil diaduk.",
      "Diamkan adonan hingga mengembang.",
      "Tuangkan adonan ke loyang yang telah disiapkan.",
      "Panggang dengan suhu dan durasi sesuai resep hingga matang."
    ]
  },
  {
    id: 10,
    nama: "Coto Makassar",
    daerah: "Sulawesi Selatan",
    gambar: "images/coto makasar.jpg",
    deskripsi: "Sup daging dengan kuah rempah khas Makassar.",
    bahan: [
      "500 gram daging sapi",
      "1,5 liter air",
      "5 siung bawang merah",
      "4 siung bawang putih",
      "2 sendok teh ketumbar",
      "2 batang serai",
      "100 gram kacang tanah sangrai",
      "Garam secukupnya"
    ],
    cara: [
      "Rebus daging hingga empuk dan potong-potong.",
      "Haluskan bawang merah, bawang putih, dan ketumbar.",
      "Tumis bumbu bersama serai hingga harum.",
      "Haluskan kacang tanah sangrai.",
      "Masukkan bumbu dan kacang ke dalam kaldu.",
      "Tambahkan daging dan masak hingga kuah beraroma serta bumbu meresap."
    ]
  }, 
  {
    id: 11,
    nama: "Soto Banjar",
    daerah: "Kalimantan Selatan",
    gambar: "images/soto banjar.jpg",
    deskripsi: "Sup ayam beraroma rempah khas Kalimantan Selatan.",
    bahan: [
      "500 gram ayam",
      "1,5 liter air",
      "4 siung bawang merah",
      "3 siung bawang putih",
      "1 sendok teh merica",
      "Kayu manis dan cengkeh secukupnya",
      "Garam secukupnya",
      "Daun bawang dan seledri"
    ],
    cara: [
      "Rebus ayam hingga matang, lalu suwir dagingnya.",
      "Haluskan bawang merah, bawang putih, dan merica.",
      "Tumis bumbu bersama kayu manis dan cengkeh hingga harum.",
      "Masukkan bumbu ke dalam kaldu ayam.",
      "Masak kembali hingga kuah beraroma dan bumbunya meresap.",
      "Sajikan dengan ayam suwir, daun bawang, dan seledri."
    ]
  },
  {
    id: 12,
    nama: "Ayam Cincane",
    daerah: "Kalimantan Timur",
    gambar: "images/ayam cincane.jpg",
    deskripsi: "Hidangan ayam berbumbu merah khas Kalimantan Timur.",
    bahan: [
      "1 ekor ayam, potong menjadi beberapa bagian",
      "6 siung bawang merah",
      "4 siung bawang putih",
      "5 buah cabai merah",
      "2 cm jahe",
      "2 batang serai",
      "2 sendok makan kecap manis",
      "Garam secukupnya",
      "Minyak untuk menumis"
    ],
    cara: [
      "Haluskan bawang merah, bawang putih, cabai, dan jahe.",
      "Tumis bumbu halus bersama serai hingga harum.",
      "Masukkan potongan ayam dan aduk hingga terbalut bumbu.",
      "Tambahkan kecap manis, garam, dan sedikit air.",
      "Masak hingga ayam matang dan bumbu meresap.",
      "Panggang ayam sebentar jika diinginkan, lalu sajikan."
    ]
  },

  {
    id: 13,
    nama: "Kerak Telor",
    daerah: "DKI Jakarta",
    gambar: "images/kerak telor.jpg",
    deskripsi: "Makanan khas Betawi dari telur, beras ketan, dan kelapa sangrai.",
    bahan: [
      "100 gram beras ketan putih",
      "2 butir telur bebek atau ayam",
      "50 gram kelapa parut",
      "2 sendok makan ebi",
      "1 siung bawang putih",
      "2 siung bawang merah",
      "Garam dan merica secukupnya",
      "Bawang goreng secukupnya"
    ],
    cara: [
      "Rendam beras ketan, lalu tiriskan.",
      "Sangrai kelapa parut hingga kecokelatan.",
      "Haluskan bawang merah, bawang putih, ebi, garam, dan merica.",
      "Panaskan sedikit ketan dalam wajan dengan sedikit air.",
      "Tambahkan telur dan bumbu halus, lalu aduk rata.",
      "Masak hingga matang, kemudian taburi kelapa sangrai dan bawang goreng."
    ]
  },
  {
    id: 14,
    nama: "Serabi Solo",
    daerah: "Jawa Tengah",
    gambar: "images/serabi solo.jpg",
    deskripsi: "Kue tradisional Solo yang lembut dengan aroma santan.",
    bahan: [
      "150 gram tepung beras",
      "25 gram tepung terigu",
      "400 ml santan",
      "50 gram gula pasir",
      "1/2 sendok teh ragi instan",
      "1/4 sendok teh garam",
      "Daun pandan secukupnya"
    ],
    cara: [
      "Hangatkan santan bersama daun pandan, lalu dinginkan hingga hangat.",
      "Campurkan tepung beras, tepung terigu, gula, ragi, dan garam.",
      "Tuangkan santan sedikit demi sedikit sambil diaduk hingga halus.",
      "Diamkan adonan sekitar 30–45 menit.",
      "Tuangkan adonan ke wajan kecil yang sudah dipanaskan.",
      "Masak dengan api kecil hingga serabi matang."
    ]
  },
  {
    id: 15,
    nama: "Ikan Woku",
    daerah: "Sulawesi Utara",
    gambar: "images/ikan woku.jpg",
    deskripsi: "Hidangan ikan berbumbu rempah segar khas Manado.",
    bahan: [
      "500 gram ikan, potong sesuai selera",
      "5 siung bawang merah",
      "3 siung bawang putih",
      "4 buah cabai merah",
      "2 cm kunyit",
      "2 cm jahe",
      "2 batang serai",
      "2 lembar daun jeruk",
      "1 buah tomat",
      "Daun kemangi secukupnya",
      "Garam dan air secukupnya"
    ],
    cara: [
      "Bersihkan ikan dan lumuri dengan sedikit garam.",
      "Haluskan bawang merah, bawang putih, cabai, kunyit, dan jahe.",
      "Tumis bumbu halus bersama serai dan daun jeruk hingga harum.",
      "Tambahkan air dan tomat, lalu masak hingga mendidih.",
      "Masukkan ikan dan masak sampai matang serta bumbu meresap.",
      "Tambahkan daun kemangi menjelang matang, lalu sajikan."
    ]
  }, 

  {
    id: 16,
    nama: "Gudangan",
    daerah: "Jawa Tengah",
    gambar: "images/gudangan.jpg",
    deskripsi: "Sayuran rebus dengan kelapa berbumbu khas Jawa Tengah.",
    bahan: [
      "100 gram bayam",
      "100 gram kacang panjang",
      "100 gram tauge",
      "1/2 butir kelapa parut",
      "3 siung bawang merah",
      "2 siung bawang putih",
      "2 buah cabai merah",
      "1 cm kencur",
      "Garam dan gula secukupnya"
    ],
    cara: [
      "Rebus bayam, kacang panjang, dan tauge hingga matang.",
      "Haluskan bawang merah, bawang putih, cabai, kencur, garam, dan gula.",
      "Campurkan bumbu dengan kelapa parut.",
      "Kukus campuran kelapa berbumbu hingga matang.",
      "Sajikan sayuran rebus bersama kelapa berbumbu."
    ]
  },
  {
    id: 17,
    nama: "Ayam Betutu",
    daerah: "Bali",
    gambar: "images/ayam betutu.jpg",
    deskripsi: "Ayam berbumbu rempah khas Bali yang kaya rasa.",
    bahan: [
      "1 ekor ayam",
      "6 siung bawang merah",
      "4 siung bawang putih",
      "4 buah cabai merah",
      "3 cm kunyit",
      "2 cm jahe",
      "2 cm lengkuas",
      "2 batang serai",
      "Daun jeruk secukupnya",
      "Garam dan minyak secukupnya"
    ],
    cara: [
      "Haluskan bawang merah, bawang putih, cabai, kunyit, jahe, dan lengkuas.",
      "Tumis bumbu bersama serai dan daun jeruk hingga harum.",
      "Lumuri ayam dengan bumbu secara merata.",
      "Tambahkan sedikit air dan masak dengan api kecil hingga ayam matang.",
      "Panggang sebentar jika ingin aroma lebih harum, lalu sajikan."
    ]
  },
  
{
 
  id: 18,
  nama: "Pelecing Kangkung",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/pelecing kangkung.jpg",
  deskripsi: "Pelecing kangkung adalah makanan khas Lombok yang terdiri dari kangku ng rebus dengan sambal tomat pedas, terasi, dan perasan jeruk limau.",
  bahan: [
    "2 ikat kangkung",
    "2 buah tomat",
    "5 cabai rawit atau sesuai selera",
    "1 siung bawang putih",
    "1 sendok teh terasi bakar",
    "1 buah jeruk limau",
    "Garam secukupnya",
    "Gula secukupnya"
  ],
  cara: [
    "Petik dan cuci bersih kangkung.",
    "Rebus kangkung hingga matang, lalu tiriskan.",
    "Haluskan cabai, tomat, bawang putih, terasi, garam, dan gula.",
    "Tambahkan perasan jeruk limau ke dalam sambal.",
    "Sajikan kangkung dengan sambal di atasnya."
  ]
},


  {
    id: 19,
    nama: "Lempah Kuning",
    daerah: "Bangka Belitung",
    gambar: "images/lempah kuning.jpg",
    deskripsi: "Sup ikan berkuah kuning dengan rasa segar khas Bangka Belitung.",
    bahan: [
      "500 gram ikan",
      "5 siung bawang merah",
      "3 siung bawang putih",
      "3 cm kunyit",
      "2 buah cabai merah",
      "1 batang serai",
      "1 buah nanas kecil",
      "Air secukupnya",
      "Garam dan jeruk nipis secukupnya"
    ],
    cara: [
      "Bersihkan ikan dan lumuri dengan jeruk nipis.",
      "Haluskan bawang merah, bawang putih, kunyit, dan cabai.",
      "Rebus bumbu bersama serai dan air hingga mendidih.",
      "Masukkan ikan dan potongan nanas.",
      "Masak hingga ikan matang, lalu tambahkan garam secukupnya.",
      "Sajikan selagi hangat."
    ]
  },
  {
    id: 20,
    nama: "Binte Biluhuta",
    daerah: "Gorontalo",
    gambar: "images/binte biluhuta.jpg",
    deskripsi: "Sup jagung khas Gorontalo dengan ikan atau udang dan kelapa.",
    bahan: [
      "2 buah jagung manis",
      "150 gram ikan suwir atau udang",
      "1/2 butir kelapa parut",
      "3 siung bawang merah",
      "1 buah cabai merah",
      "Daun kemangi secukupnya",
      "Jeruk nipis secukupnya",
      "Garam dan air secukupnya"
    ],
    cara: [
      "Pipil jagung manis dari tongkolnya.",
      "Rebus jagung bersama air hingga mulai empuk.",
      "Tambahkan ikan suwir atau udang dan bawang merah iris.",
      "Masukkan kelapa parut dan cabai sesuai selera.",
      "Masak hingga semua bahan matang.",
      "Tambahkan kemangi dan perasan jeruk nipis sebelum disajikan."
    ]
  }

];

const container = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const detailSection = document.getElementById("detailResep");
const isiDetail = document.getElementById("isiDetail");
const jumlahResep = document.getElementById("jumlahResep");
const tutupDetail = document.getElementById("tutupDetail");

function tampilkanResep(data) {
  container.innerHTML = "";

  jumlahResep.textContent =
    data.length + " resep ditemukan";

  if (data.length === 0) {
    container.innerHTML =
      "<p>Resep tidak ditemukan. Coba kata kunci lain.</p>";
    return;
  }

  data.forEach(function(item) {
    const kartu = document.createElement("article");
    kartu.className = "recipe-card";

    const gambar = document.createElement("img");
    gambar.src = item.gambar;
    gambar.alt = item.nama;
    gambar.loading = "lazy";

    gambar.onerror = function() {
      this.onerror = null;
      this.src =
        "https://placehold.co/600x400?text=Resep+Nusantara";
    };

    const info = document.createElement("div");
    info.className = "recipe-info";

    const judul = document.createElement("h3");
    judul.textContent = item.nama;

    const daerah = document.createElement("p");
    daerah.textContent = item.daerah;

    const deskripsi = document.createElement("p");
    deskripsi.textContent = item.deskripsi;

    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.textContent = "Lihat Resep";
    tombol.addEventListener("click", function() {
      tampilkanDetail(item.id);
    });

    info.append(judul, daerah, deskripsi, tombol);
    kartu.append(gambar, info);
    container.appendChild(kartu);
  });
}

function tampilkanDetail(id) {
  const item = resep.find(function(r) {
    return r.id === id;
  });

  if (!item) return;

  isiDetail.innerHTML = "";

  const judul = document.createElement("h2");
  judul.textContent = item.nama;

  const daerah = document.createElement("p");
  daerah.textContent = "Asal: " + item.daerah;

  const gambar = document.createElement("img");
  gambar.src = item.gambar;
  gambar.alt = item.nama;

  const deskripsi = document.createElement("p");
  deskripsi.textContent = item.deskripsi;

  const judulBahan = document.createElement("h3");
  judulBahan.textContent = "Bahan-bahan";

  const daftarBahan = document.createElement("ul");

  item.bahan.forEach(function(bahan) {
    const li = document.createElement("li");
    li.textContent = bahan;
    daftarBahan.appendChild(li);
  });

  const judulCara = document.createElement("h3");
  judulCara.textContent = "Cara Memasak";

  const daftarCara = document.createElement("ol");

  item.cara.forEach(function(langkah) {
    const li = document.createElement("li");
    li.textContent = langkah;
    daftarCara.appendChild(li);
  });

  isiDetail.append(
    judul,
    daerah,
    gambar,
    deskripsi,
    judulBahan,
    daftarBahan,
    judulCara,
    daftarCara
  );

  detailSection.hidden = false;
  detailSection.scrollIntoView({ behavior: "smooth" });
}

function cariResep(query) {
  const kata = query.trim().toLowerCase();

  if (!kata) {
    tampilkanResep(resep);
    return;
  }

  const hasil = resep
    .map(function(item) {
      const nama = item.nama.toLowerCase();
      const daerah = item.daerah.toLowerCase();
      const bahan = item.bahan.join(" ").toLowerCase();
      const deskripsi = item.deskripsi.toLowerCase();

      let skor = 0;

      if (nama === kata) skor = 100;
      else if (nama.startsWith(kata)) skor = 80;
      else if (nama.includes(kata)) skor = 60;
      else if (daerah.includes(kata)) skor = 40;
      else if (
        bahan.includes(kata) ||
        deskripsi.includes(kata)
      ) skor = 20;

      return { item: item, skor: skor };
    })
    .filter(function(data) {
      return data.skor > 0;
    })
    .sort(function(a, b) {
      return b.skor - a.skor;
    })
    .map(function(data) {
      return data.item;
    });

  tampilkanResep(hasil);
  detailSection.hidden = true;
}

searchInput.addEventListener("input", function() {
  cariResep(searchInput.value);
});

tutupDetail.addEventListener("click", function() {
  detailSection.hidden = true;
  document.getElementById("resep").scrollIntoView({
    behavior: "smooth"
  });
});

tampilkanResep(resep);
let daerahDipilih = "Semua";

function terapkanFilterDaerah() {
  const tombolKategori = document.querySelectorAll(
    ".filter-daerah"
  );

  tombolKategori.forEach(function(tombol) {
    tombol.addEventListener("click", function() {
      daerahDipilih = tombol.dataset.daerah;

      tombolKategori.forEach(function(item) {
        item.classList.remove("aktif");
      });

      tombol.classList.add("aktif");

      const kata = searchInput.value.trim();

      let hasil = resep;

      if (daerahDipilih !== "Semua") {
        hasil = hasil.filter(function(item) {
          const daerah = item.daerah.toLowerCase();

          if (daerahDipilih === "Sumatera") {
            return daerah.includes("sumatera");
          }

          if (daerahDipilih === "Jawa") {
            return daerah.includes("jawa");
          }

          if (daerahDipilih === "Bali dan Nusa Tenggara") {
            return daerah.includes("bali") ||
              daerah.includes("nusa tenggara") ||
              daerah.includes("ntb") ||
              daerah.includes("ntt");
          }

          if (daerahDipilih === "Kalimantan") {
            return daerah.includes("kalimantan");
          }

          if (daerahDipilih === "Sulawesi") {
            return daerah.includes("sulawesi");
          }

          if (daerahDipilih === "Maluku dan Papua") {
            return daerah.includes("maluku") ||
              daerah.includes("papua");
          }

          return false;
        });
      }

      if (kata) {
        hasil = hasil.filter(function(item) {
          return item.nama.toLowerCase().includes(kata) ||
            item.daerah.toLowerCase().includes(kata) ||
            item.bahan.join(" ").toLowerCase().includes(kata) ||
            item.deskripsi.toLowerCase().includes(kata);
        });
      }

      tampilkanResep(hasil);
      detailSection.hidden = true;
    });
  });
}

terapkanFilterDaerah();
