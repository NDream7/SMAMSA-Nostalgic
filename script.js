const nama_siswa_kelas_12IPS = ['Fairuz Nafisa(Uus)', 'Fatimah Alzakiyyah Salsabila(Timeh)', 'Hari Hamdani', 'Karmila Vega(Mila)', "Ma'rifatul Insan", 'Milano Putris(Minos)', 'Muhamad Zeihan Alghifari(Jehan)', 'Muhammad Rauf Fauzan', 'Nailah Halimatus Sadiyah Ramdan(Nai)', 'Putri Zahrah(Mput)', 'Rangga Kurnia(Rakur)', 'Safwana Rasyida Putri(Sapa)', 'Shidqi Muhammad Fauzan', 'Syaira Zahra Fadillah(Sera)', 'Ujang Sandi']
const nama_siswa_kelas_12MIPA = ['Aisyah Septiani(Iseh)', 'Aldi Wijaya(Yudi)', 'Aliffa Euis Harummi(Ipeh)', 'Arsya Naovarrahma(Aca)', 'Fatma Fauziyyah(Ama)', 'Maurel Khulaida Afifatul Aini', 'Muhammad Arya Bima Prasetianto(Abim)', 'Mutia Mauludiah(Muti)', 'Nabilla Aufaa(Bila)', 'Neneng Mega Khoerunisa', 'Nikita Rizki Mutiara(Niki)', 'Raihan Muhammad Fauzi(Ehan)', 'Rangga Dwi Ramadhani Widilaksono(Dwi)', 'Siti Salwa Nurjannah', 'Sofi Ismayanti', 'Susan Amelia Syakira(Meli)', 'Syahrani T. Sabran(Rani)']
const tanggalLahirMap = {
    'Fairuz Nafisa(Uus)': '16-05-2007',
    'Fatimah Alzakiyyah Salsabila(Timeh)': '02-05-2007',
    'Hari Hamdani': '03-01-2004',
    'Karmila Vega(Mila)': '28-12-2005',
    "Ma'rifatul Insan": '24-09-2006',
    'Milano Putris(Minos)': '14-03-2007',
    'Muhamad Zeihan Alghifari(Jehan)': '15-01-2007',
    'Muhammad Rauf Fauzan': '05-07-2006',
    'Nailah Halimatus Sadiyah Ramdan(Nai)': '19-04-2007',
    'Putri Zahrah(Mput)': '30-11-2006',
    'Rangga Kurnia(Rakur)': '19-12-2006',
    'Safwana Rasyida Putri(Sapa)': '01-08-2007',
    'Shidqi Muhammad Fauzan': '07-06-2006',
    'Syaira Zahra Fadillah(Sera)': '08-07-2006',
    'Ujang Sandi': '16-05-2005',
    'Aisyah Septiani(Iseh)': '19-09-2006',
    'Aldi Wijaya(Yudi)': '08-11-2006',
    'Aliffa Euis Harummi(Ipeh)': '20-11-2006',
    'Arsya Naovarrahma(Aca)': '31-01-2007',
    'Fatma Fauziyyah(Ama)': '03-06-2006',
    'Maurel Khulaida Afifatul Aini': '12-12-2006',
    'Muhammad Arya Bima Prasetianto(Abim)': '01-01-2007',
    'Mutia Mauludiah(Muti)': '23-04-2006',
    'Nabilla Aufaa(Bila)': '21-09-2007',
    'Neneng Mega Khoerunisa': '03-02-2008',
    'Nikita Rizki Mutiara(Niki)': '21-07-2007',
    'Raihan Muhammad Fauzi(Ehan)': '08-01-2007',
    'Rangga Dwi Ramadhani Widilaksono(Dwi)': '27-09-2006',
    'Siti Salwa Nurjannah': '26-01-2007',
    'Sofi Ismayanti': '15-03-2007',
    'Susan Amelia Syakira(Meli)': '12-01-2007',
    'Syahrani T. Sabran(Rani)': '16-07-2007'
}
const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwOQ4G8Rp_SRlUIoLrJCh0f6pAdCI0yn0o0MW57kwDTN6LJa4eO8VXErs53s5pRVekuog/exec";
const startBtn = document.getElementById('startBtn');
const musicBtn = document.getElementById('musicBtn');
const audio = document.getElementById('backsound');
const nostalgiaAngkatan = {
    "Angkatan 2022-2025": [

    ],
    "Angkatan 2021-2024": [

    ],
    "Angkatan 2020-2023": [

    ],
    "Angkatan 2019-2022": [

    ],
    "Angkatan 2024-2027": [

    ],
    "Angkatan 2023-2026": [

    ],
    
};

let currentSlideIndex = 0;
let currentAngkatan = null;

function tampilkanSlideShow() {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = '';

    const img = document.createElement('img');
    img.src = nostalgiaAngkatan[currentAngkatan][currentSlideIndex];
    img.className = 'slideshow-img';

    const backBtn = document.createElement('button');
    backBtn.textContent = '◀';
    backBtn.className = 'nav-btn kiri';
    backBtn.onclick = () => {
        currentSlideIndex = (currentSlideIndex - 1 + nostalgiaAngkatan[currentAngkatan].length) % nostalgiaAngkatan[currentAngkatan].length;
        img.src = nostalgiaAngkatan[currentAngkatan][currentSlideIndex];
    };

    const nextBtn = document.createElement('button');
    nextBtn.textContent = '▶';
    nextBtn.className = 'nav-btn kanan';
    nextBtn.onclick = () => {
        currentSlideIndex = (currentSlideIndex + 1) % nostalgiaAngkatan[currentAngkatan].length;
        img.src = nostalgiaAngkatan[currentAngkatan][currentSlideIndex];
    };

    const backToFolders = document.createElement('button');
    backToFolders.textContent = '🔙 Kembali ke Folder';
    backToFolders.className = 'back-btn';
    backToFolders.onclick = () => location.reload();

    carousel.appendChild(backBtn);
    carousel.appendChild(img);
    carousel.appendChild(nextBtn);
    carousel.appendChild(backToFolders);
}

let musikNyala = false;
let musikManual = false;

musicBtn.addEventListener('click', () => {
    if (musikNyala) {
        audio.pause();
        musicBtn.textContent = 'Musik: ON';
    } else {
        audio.currentTime = 0;
        audio.play().catch(err => console.log('Gagal mainkan audio:', err));
        musicBtn.textContent = 'Musik: OFF';
        musikManual = true;
    }
    musikNyala = !musikNyala;
});

function musikOtomatis() {
    if (!musikNyala && !musikManual) {
        audio.currentTime = 0;
        audio.play().catch(err => console.log('Gagal auto-play:', err));
        musikNyala = true;
        musicBtn.textContent = 'Musik: OFF';
    }
}

function tanya(pertanyaan) {
    const jawab = prompt(pertanyaan)
    if (jawab === null || jawab.trim() === '') {
        const konfirmasi = confirm('Yaahh, udah mau pergiii?');    
        if (konfirmasi) {   
            alert('Yaahh, yaudah deh gapapaa, jangan lupa mampir lagi yaa :)')
            throw new Error('Prompt dibatalkan user.')
        } else {
            return tanya(pertanyaan);
        }
    }
    return jawab.trim()
}

function kirimData(nama, tanggal,asal_sekolah, angkatan, kelas, respon = '-') {
    const formData = new URLSearchParams();
    formData.append("nama", nama);
    formData.append("tanggal", tanggal);
    formData.append("asal", asal_sekolah);
    formData.append("angkatan", angkatan);
    formData.append("kelas", kelas);
    formData.append("sapaan", respon);

    fetch(WEBAPP_URL, {
        method: "POST",
        body: formData
    })
    .then((res) => res.text())
    .then((data) => console.log("✅ Data Terkirim:", data))
    .catch((err) => console.error("❌ Gagal kirim:", err));
}

startBtn.addEventListener('click', () => {
    alert('Selamat datang di web nostalgia SMA Muhammadiyah 1 Bandung');

    try {
        let asal_sekolah_input = tanya('Kamu dari sekolah mana niiihhh? kali aja kita tetanggaan, wkwkwk atau malah satu almamater? eaaa')
            .toLowerCase()
            .trim()

        let asal_sekolah = asal_sekolah_input; 
        const dariSmamsa = asal_sekolah.includes('smamsa') || asal_sekolah.includes('sma muhammadiyah 1')   

        if (dariSmamsa || asal_sekolah === 'sma muhammadiyah 1 bandung') {
            asal_sekolah = 'Murid Kesayangan';
            alert(`Selamat datang kembaliii ${asal_sekolah} para guru, wkwkwk`);
            const angkatan = tanya('Kamu angkatan berapa niicchh? boleehh dong spiill (Contoh: 2022-2025)');

            if (angkatan !== '2022-2025') {
                const kelas = tanya(`OOOWWHH dari angkatan ${angkatan} toohh, kelas apaa niihh?`);
                const nama = tanya('Namanya siapaaa niiihhh? spill dong namanya wahai alumni SMAMSA wkwk');
                const sapaan = tanya(`Haaaiii ${nama}, btw ${nama} apa kabarnyaa niiihhh? kalo baik alhamdulillah, kalo kurang baik semoga lekas lebih baik lagi aamiin, cieee kangen SMAMSA wkwkwk, selamat bernostalgiaaa yaa wahai alumni SMAMSA xixi`);
            
                kirimData(nama, '-', asal_sekolah, angkatan, kelas.toUpperCase(), sapaan);
                musikOtomatis();
                document.body.classList.remove('no-scroll');
                document.getElementById('scrollHint').classList.add('visible');
                return;
            }

            let kelas;
            while (true) {
                try {
                    kelas = tanya('WAAHH ANGKATAN SPESIAALL, Kamu dari kelas apa niiihh??? (IPS atau MIPA)').toUpperCase();
                    if (kelas === 'IPS' || kelas === 'MIPA') break;
                    alert('Kelas apaan tuuhh? Gak ada di SMAMSA kelas itu, isinya yang beneerr kocaakk');
                } catch (err) {
                    console.log(err.message);
                    return;
                }
            }

            const daftarNama = (kelas === 'IPS') ? nama_siswa_kelas_12IPS : nama_siswa_kelas_12MIPA;
            alert(`Owh kamu dari kelas ${kelas}, berarti kamu salah satu dari:\n${daftarNama.map(n => '- ' + n).join('\n')}`);

            let nama;
            while (true) {
                try {
                    nama = tanya('Kalau gitu nama kamu siapa niicchh?');
                    const found = daftarNama.find(n => n.toLowerCase().includes(nama.toLowerCase()));
                    if (found) {
                    const expected = tanggalLahirMap[found]?.toLowerCase();
                    if(!expected){
                        alert(`Laahh kocak, tanggal lahir kamu ${found} belum ada, cepet kasih tau si abim`)
                        throw new Error('Data tanggal lahirnya kosong oey');
                    }

                    const inputTgl = tanya(`Emang kamu beneran si ${found}? masa sih? kalo gitu coba sebutin tanggal lahirnya kapan?\n(contoh: 01-01-2007 atau 01 Januari 2007)`)
                        .toLowerCase()
                        .replace(/\//g, '-')
                        .replace(/\s+/g, '-');

                        const inputCleaned = inputTgl
                            .replace(/januari/, '01').replace(/februari/, '02')
                            .replace(/maret/, '03').replace(/april/, '04')
                            .replace(/mei/, '05').replace(/juni/, '06')
                            .replace(/juli/, '07').replace(/agustus/, '08')
                            .replace(/september/, '09').replace(/oktober/, '10')
                            .replace(/november/, '11').replace(/desember/, '12')
                            
                        if (inputCleaned !== expected) {
                            alert(`Yahahaha salaahh, jan ngaku-ngaku jadi si ${found} deeehhh, sana sana balik masukin nama, yang bener kocaakk`);
                            continue;
                        }

                        alert(`anjay, beneran ${found} ternyata, wkwkwk`)
                        
                        if (found.includes('Fairuz Nafisa(Uus)')){
                            const sapaan = tanya(`Eeehh ${found}, apa kabaarr bu KM, wkwkwk, gimana us? masih sama si aa kakel? WAKAKAKAK`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Fatimah Alzakiyyah Salsabila(Timeh)')){
                            const sapaan = tanya(`EH ${found}? Apa kabs? si kull, kece, cicingeun wkwkwk, masih intropert kah? xixi`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Hari Hamdani')){
                            const sapaan = tanya(`Halo bang ${found}, apa kabar? aman aman? lancar?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Karmila Vega(Mila)')){
                            const sapaan = tanya(`EH ${found}? Apa kabar miill? gimans gimans? aman? lancar?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes("Ma'rifatul Insan")){
                            const sapaan = tanya(`Eeeyy ${found}, apa kabs bang? lancar lancar bang?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Milano Putris(Minos)')){
                            const sapaan = tanya(`Eeehh ${found}, apa kabs nooosss? gimana gimana nich, masih nempel sama cowok tele? WKWKWKWK`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Muhamad Zeihan Alghifari(Jehan)')){
                            const sapaan = tanya(`Eh bang ${found}, apa kabar banh? masih menjomok-jomok kaahh? WKWKWKWK`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Muhammad Rauf Fauzan')){
                            const sapaan = tanya(`Halo bang ${found}, apa kabar? aman lah yaa? lancar?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Nailah Halimatus Sadiyah Ramdan(Nai)')){
                            const sapaan = tanya(`Eeehh ${found}, apa kabaarr mba e? masih ha he ho kah? WKWKWKWK`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Putri Zahrah(Mput)')){
                            const sapaan = tanya(`Eeehh${found}, apa kabaarr mpuutt? gimana nich masih sama si aa jangkung kah? WKWKWK`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Rangga Kurnia(Rakur)')){
                            const sapaan = tanya(`Anjaaayyy ${found}, apa kabaarr pak booss? wkwkwk, gimana nih? lancar lancar bisnisnya?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Safwana Rasyida Putri(Sapa)')){
                            const sapaan = tanya(`Eeehh ${found}, apa kabar sap? mba e masih nyantel sama aa brondong kaahh? WKWKWKWK`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Shidqi Muhammad Fauzan')){
                            const sapaan = tanya(`Halo bang ${found}, apa kabar pria dingin? wkwkwk, gimana? aman aman? lancar?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Syaira Zahra Fadillah(Sera)')){
                            const sapaan = tanya(`Eeehh ${found}, apa kabaarr nicchh ser? masih nolep aja nih lep? WKWKWKW, gimans sama si seangkatan? AHAHAHA`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Ujang Sandi')){
                            const sapaan = tanya(`Anjay halooo ${found}, apa kabar pak ketu hw? wkwkwk, gimana gimana? lancar lancar?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Aisyah Septiani(Iseh)')){
                            const sapaan = tanya(`Eh ${found}, apa kabar iseh? wkwkwk, gimana? aman? lancar lancar?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Aldi Wijaya(Yudi)')){
                            const sapaan = tanya(`Anjaaayyy ${found}, apa kabaarr ceess? kumaha di jepang? damang? WKWKWK, lancar lancar?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Aliffa Euis Harummi(Ipeh)')){
                            const sapaan = tanya(`Eeehh ${found}, apa kabaarr ipeehh? aku shock sih pas tau soal kamu sama si aa padus, bisa bisanyaaa wkwkwk, tapi gimana? aman? lancar?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Arsya Naovarrahma(Aca)')){
                            const sapaan = tanya(`Eeehh ${found}, apa kabar caaa? gimans gimans? lancaarr? karate jan lupa dipake buat menghadapi buaya ca, wkwkwk`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Fatma Fauziyyah(Ama)')){
                            const sapaan = tanya(`Eeehh ${found}, apa kabs ma? gimans sama aa ujang? masih aman dan lancar kaahh? wkwkwk`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Maurel Khulaida Afifatul Aini')){
                            const sapaan = tanya(`Eh ${found}, apa kabar rel? aman aman? lancar?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Muhammad Arya Bima Prasetianto(Abim)')){
                            const sapaan = tanya(`Eh abang ${found}, kau ngapain kocak? kau editornya bege, KWOCAK BEEUUTT WKWKWKW, tapi apa kabar banh?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Mutia Mauludiah(Muti)')){
                            const sapaan = tanya(`Eh ${found}, apa kabar mut? gimana? aman kah? lancar lancar?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Nabilla Aufaa(Bila)')){
                            const sapaan = tanya(`Eeehh ${found}, apa kabs bilbil? wkwkwk, gimana niihh? aman aman? lancaarr?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Neneng Mega Khoerunisa')){
                            const sapaan = tanya(`Eh ${found}, apa kabar neneng megak? wkwkwk, gimana gimana? lancarkaann? aman aman?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Nikita Rizki Mutiara(Niki)')){
                            const sapaan = tanya(`Eeehh ${found}, apa kabaarr niikk? si aa clbk ya sama si itu? wkwkwk, gimana nih? amankan? lancar lancar?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Raihan Muhammad Fauzi(Ehan)')){
                            const sapaan = tanya(`Anjaaayyy ${found}, apa kabs bang? kumaha damang kotak? AWOKWOKWOK, canda canda, tapi kumaha gawe? lancar lancar? aman?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Rangga Dwi Ramadhani Widilaksono(Dwi)')){
                            const sapaan = tanya(`Anjaaayyy ${found}, apa kaabbss wiii? wkwkwk, kumaha damaanngg? kumaha kelanjutan jeung si S heum? WAKAKAKA, tapi aman aman? lancar?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Siti Salwa Nurjannah')){
                            const sapaan = tanya(`Eh ${found}, apa kabar wa? gimana? aman aman? lancar?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Sofi Ismayanti')){
                            const sapaan = tanya(`Eeehh ${found}, apa kabaarr soopp? wkwkwk, gimana gimana? amankaahh? lancar lancar sop?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Susan Amelia Syakira(Meli)')){
                            const sapaan = tanya(`Eeehh ${found}, apa kabar mel? gimana kabar sama si aa smk? WKWKWK, gimana gimana? aman? lancar?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } else if (found.includes('Syahrani T. Sabran(Rani)')){
                            const sapaan = tanya(`Eh ${found}, apa kabar ran? gimana nih? lancar lancar? aman?`);
                            kirimData(found, expected, "SMA Muhammadiyah 1 Bandung", "2022-2025", kelas.toUpperCase(), sapaan);
                        } 
                        break;
                    } else {
                        alert('Siapa itu? Jangan ngaku-ngaku deehh! isinya yang bener kocaakk');
                    }
                } catch (err) {
                    console.log(err.message);
                    return;
                }
            }
            alert(`Semoga kabarnya baik-baik ajaaa yaaa, selamat bernostalgia di web Angkatan Kelas 12 SMA Muhammadiyah 1 Bandung Tahun Ajaran 2022-2025`);
            musikOtomatis();
            document.body.classList.remove('no-scroll');
            document.getElementById('scrollHint').classList.add('visible');

        } else {
            alert(`Owwhh dari ${asal_sekolah}, selamat datang Tamu Kehormatan SMAMSA, selamat datang di SMAMSA Nostalgic`)
            const namaTamu = tanya('Kalau boleh tau, siapa namanya niicchh?');
            const keperluan = tanya('Ada keperluan apa niicchh? mampir ke web SMAMSA Nostalgic, just asking hehe');
            alert(`Owwhh mau ${keperluan}, sekali lagi selamat datang di SMAMSA Nostalgic, semoga betaaahh yaaa ${namaTamu}, selamat menikmati SMAMSA Nostalgic ${namaTamu}`);
            kirimData(namaTamu, "Tamu Kehormatan", asal_sekolah, "Tamu Kehormatan", "Tamu Kehormatan", keperluan);
            musikOtomatis();
            
            document.body.classList.remove('no-scroll');
            document.getElementById('scrollHint').classList.add('visible');

        }

    } catch (error) {
        console.log(error.message);
    }
});

window.addEventListener('scroll', () => {
    const hint = document.getElementById('scrollHint');
    if (hint && hint.classList.contains('visible')) {
        hint.classList.remove('visible');
    }
});

const tontonBtn = document.getElementById('tontonVideoBtn');
const selesaiBtn = document.getElementById('selesaiMenontonBtn');
const videoWrapper = document.getElementById('videoWrapper');

tontonBtn.addEventListener('click', () => {
    if (musikNyala) {
        audio.pause();
        musikNyala = false;
        musicBtn.textContent = 'Musik: ON';
    }

    videoWrapper.style.display = 'block';
    videoWrapper.scrollIntoView({ behavior: 'smooth' });
});

selesaiBtn.addEventListener('click', () => {
    const video = document.getElementById('videoKenangan');
    video.pause();
    video.currentTime = 0;
    audio.currentTime = 0;
    audio.play().catch(err => console.log('Gagal mainkan musik ulang:', err));
    musikNyala = true;
    musicBtn.textContent = 'Musik: OFF';
})
