const nama_siswa_kelas_12IPS = ['Fairuz Nafisa(Uus)', 'Fatimah Alzakiyyah Salsabila(Timeh)', 'Hari Hamdani', 'Karmila Vega(Mila)', "Ma'rifatul Insan", 'Milano Putris(Minos)', 'Muhamad Zeihan Alghifari(Jehan)', 'Muhammad Rauf Fauzan', 'Nailah Halimatus Sadiyah Ramdan(Nai)', 'Putri Zahrah(Mput)', 'Rangga Kurnia(Rakur)', 'Safwana Rasyida Putri(Sapa)', 'Shidqi Muhammad Fauzan', 'Syaira Zahra Fadillah(Sera)', 'Ujang Sandi']
const nama_siswa_kelas_12MIPA = ['Aisyah Septiani(Iseh)', 'Aldi Wijaya(Yudi)', 'Aliffa Euis Harummi(Ipeh)', 'Arsya Naovarrahma(Aca)', 'Fatma Fauziyyah(Ama)', 'Maurel Khulaida Afifatul Aini', 'Muhammad Arya Bima Prasetianto(Abim)', 'Mutia Mauludiah(Muti)', 'Nabilla Aufaa(Bila)', 'Neneng Mega Khoerunisa', 'Nikita Rizki Mutiara(Niki)', 'Raihan Muhammad Fauzi(Ehan)', 'Rangga Dwi Ramadhani Widilaksono(Dwi)', 'Siti Salwa Nurjannah', 'Sofi Ismayanti', 'Susan Amelia Syakira(Meli)', 'Syahrani T. Sabran(Rani)']

const startBtn = document.getElementById('startBtn');
const musicBtn = document.getElementById('musicBtn');
const audio = document.getElementById('backsound');

let musikNyala = false;

musicBtn.addEventListener('click', () => {
    if (musikNyala) {
        audio.pause();
        musicBtn.textContent = 'Musik: ON';
    } else {
        audio.currentTime = 0;
        audio.play().catch(err => console.log('Gagal mainkan audio:', err));
        musicBtn.textContent = 'Musik: OFF';
    }
    musikNyala = !musikNyala;
});

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

startBtn.addEventListener('click', () => {
    alert('Selamat datang di web Kelas 12 SMA Muhammadiyah 1 Bandung');

    try {
        let asal_sekolah = tanya('Kamu dari SMA manaaa?').toLowerCase();

        if (asal_sekolah === 'sma muhammadiyah 1 bandung') {
            asal_sekolah = 'Murid Kesayangan';
            alert(`Selamat datang kembaliii ${asal_sekolah} para guru, wkwkwk`);

            let kelas;
            while (true) {
                try {
                    kelas = tanya('Kamu dari kelas apa niiihh??? (IPS atau MIPA)').toLowerCase();
                    if (kelas === 'ips' || kelas === 'mipa') break;
                    alert('Kelas apaan tuuhh? Gak ada di SMAMSA kelas itu, isinya yang beneerr kocaakk');
                } catch (err) {
                    console.log(err.message);
                    return;
                }
            }

            const daftarNama = (kelas === 'ips') ? nama_siswa_kelas_12IPS : nama_siswa_kelas_12MIPA;
            alert(`Owh kamu dari kelas ${kelas}, berarti kamu salah satu dari:\n${daftarNama.map(n => '- ' + n).join('\n')}`);

            let nama;
            while (true) {
                try {
                    nama = tanya('Kalau gitu nama kamu siapa niicchh?');
                    const found = daftarNama.find(n => n.toLowerCase().includes(nama.toLowerCase()));
                    if (found) {
                        if (found.includes('Fairuz Nafisa(Uus)')){
                            alert(`Eeehh ${found}, apa kabaarr bu KM, wkwkwk, gimana us? masih sama si aa kakel? WAKAKAKAK`);
                        } else if (found.includes('Fatimah Alzakiyyah Salsabila(Timeh)')){
                            alert(`EH ${found}? Apa kabs? si kull, kece, cicingeun wkwkwk, masih intropert kah? xixi`);
                        } else if (found.includes('Hari Hamdani')){
                            alert(`Halo bang ${found}, apa kabar? aman aman? lancar?`);
                        } else if (found.includes('Karmila Vega(Mila)')){
                            alert(`EH ${found}? Apa kabar miill? gimans gimans? aman? lancar?`);
                        } else if (found.includes("Ma'rifatul Insan")){
                            alert(`Eeeyy ${found}, apa kabs bang? lancar lancar bang?`);
                        } else if (found.includes('Milano Putris(Minos)')){
                            alert(`Eeehh ${found}, apa kabs nooosss? gimana gimana nich, masih nempel sama cowok tele? WKWKWKWK`);
                        } else if (found.includes('Muhamad Zeihan Alghifari(Jehan)')){
                            alert(`Eh bang ${found}, apa kabar banh? masih menjomok-jomok kaahh? WKWKWKWK`);
                        } else if (found.includes('Muhammad Rauf Fauzan')){
                            alert(`Halo bang ${found}, apa kabar? aman lah yaa? lancar?`);
                        } else if (found.includes('Nailah Halimatus Sadiyah Ramdan(Nai)')){
                            alert(`Eeehh ${found}, apa kabaarr mba e? masih ha he ho kah? WKWKWKWK`);
                        } else if (found.includes('Putri Zahrah(Mput)')){
                            alert(`Eeehh${found}, apa kabaarr mpuutt? gimana nich masih sama si aa jangkung kah? WKWKWK`);
                        } else if (found.includes('Rangga Kurnia(Rakur)')){
                            alert(`Anjaaayyy ${found}, apa kabaarr pak booss? wkwkwk, gimana nih? lancar lancar bisnisnya?`);
                        } else if (found.includes('Safwana Rasyida Putri(Sapa)')){
                            alert(`Eeehh ${found}, apa kabar sap? mba e masih nyantel sama aa brondong kaahh? WKWKWKWK`);
                        } else if (found.includes('Shidqi Muhammad Fauzan')){
                            alert(`Halo bang ${found}, apa kabar pria dingin? wkwkwk, gimana? aman aman? lancar?`);
                        } else if (found.includes('Syaira Zahra Fadillah(Sera)')){
                            alert(`Eeehh ${found}, apa kabaarr nicchh ser? masih nolep aja nih lep? WKWKWKW, gimans sama si seangkatan? AHAHAHA`);
                        } else if (found.includes('Ujang Sandi')){
                            alert(`Anjay halooo ${found}, apa kabar pak ketu hw? wkwkwk, gimana gimana? lancar lancar?`);
                        } else if (found.includes('Aisyah Septiani(Iseh)',)){
                            alert(`Eh ${found}, apa kabar iseh? wkwkwk, gimana? aman? lancar lancar?`);
                        } else if (found.includes('Aldi Wijaya(Yudi)')){
                            alert(`Anjaaayyy ${found}, apa kabaarr ceess? kumaha di jepang? damang? WKWKWK, lancar lancar?`);
                        } else if (found.includes('Aliffa Euis Harummi(Ipeh)')){
                            alert(`Eeehh ${found}, apa kabaarr ipeehh? aku shock sih pas tau soal kamu sama si aa padus, bisa bisanyaaa wkwkwk, tapi gimana? aman? lancar?`);
                        } else if (found.includes('Arsya Naovarrahma(Aca)')){
                            alert(`Eeehh ${found}, apa kabar caaa? gimans gimans? lancaarr? karate jan lupa dipake buat menghadapi buaya ca, wkwkwk`);
                        } else if (found.includes('Fatma Fauziyyah(Ama)')){
                            alert(`Eeehh ${found}, apa kabs ma? gimans sama aa ujang? masih aman dan lancar kaahh? wkwkwk`);
                        } else if (found.includes('Maurel Khulaida Afifatul Aini')){
                            alert(`Eh ${found}, apa kabar rel? aman aman? lancar?`);
                        } else if (found.includes('Muhammad Arya Bima Prasetianto(Abim)')){
                            alert(`Eh abang ${found}, kau ngapain kocak? kau editornya bege, KWOCAK BEEUUTT WKWKWKW, tapi apa kabar banh?`);
                        } else if (found.includes('Mutia Mauludiah(Muti)')){
                            alert(`Eh ${found}, apa kabar mut? gimana? aman kah? lancar lancar?`);
                        } else if (found.includes('Nabilla Aufaa(Bila)')){
                            alert(`Eeehh ${found}, apa kabs bilbil? wkwkwk, gimana niihh? aman aman? lancaarr?`);
                        } else if (found.includes('Neneng Mega Khoerunisa')){
                            alert(`Eh ${found}, apa kabar neneng megak? wkwkwk, gimana gimana? lancarkaann? aman aman?`);
                        } else if (found.includes('Nikita Rizki Mutiara(Niki)')){
                            alert(`Eeehh ${found}, apa kabaarr niikk? si aa clbk ya sama si itu? wkwkwk, gimana nih? amankan? lancar lancar?`);
                        } else if (found.includes('Raihan Muhammad Fauzi(Ehan)')){
                            alert(`Anjaaayyy ${found}, apa kabs bang? kumaha damang kotak? AWOKWOKWOK, canda canda, tapi kumaha gawe? lancar lancar? aman?`);
                        } else if (found.includes('Rangga Dwi Ramadhani Widilaksono(Dwi)')){
                            alert(`Anjaaayyy ${found}, apa kaabbss wiii? wkwkwk, kumaha damaanngg? kumaha kelanjutan jeung si S heum? WAKAKAKA, tapi aman aman? lancar?`);
                        } else if (found.includes('Siti Salwa Nurjannah')){
                            alert(`Eh ${found}, apa kabar wa? gimana? aman aman? lancar?`);
                        } else if (found.includes('Sofi Ismayanti')){
                            alert(`Eeehh ${found}, apa kabaarr soopp? wkwkwk, gimana gimana? amankaahh? lancar lancar sop?`);
                        } else if (found.includes('Susan Amelia Syakira(Meli)')){
                            alert(`Eeehh ${found}, apa kabar mel? gimana kabar sama si aa smk? WKWKWK, gimana gimana? aman? lancar?`);
                        } else if (found.includes('Syahrani T. Sabran(Rani)')){
                            alert(`Eh ${found}, apa kabar ran? gimana nih? lancar lancar? aman?`);
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
        } else {
            asal_sekolah = 'Tamu Kehormatan';
            alert(`Selamat datang di SMAMSA ${asal_sekolah}`);
        }

    } catch (error) {
        console.log(error.message);
    }
});



