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
                    alert('Kelas apaan tuuhh? Gak ada di SMAMSA kelas itu, coba lagi yaa...');
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
                            alert(`Hai ${found}`);
                        } else if (found.includes('Fatimah Alzakiyyah Salsabila(Timeh)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Hari Hamdani')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Karmila Vega(Mila)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes("Ma'rifatul Insan")){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Milano Putris(Minos)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Muhamad Zeihan Alghifari(Jehan)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Muhammad Rauf Fauzan')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Nailah Halimatus Sadiyah Ramdan(Nai)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Putri Zahrah(Mput)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Rangga Kurnia(Rakur)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Safwana Rasyida Putri(Sapa)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Shidqi Muhammad Fauzan')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Syaira Zahra Fadillah(Sera)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Ujang Sandi')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Aisyah Septiani(Iseh)',)){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Aldi Wijaya(Yudi)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Aliffa Euis Harummi(Ipeh)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Arsya Naovarrahma(Aca)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Fatma Fauziyyah(Ama)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Maurel Khulaida Afifatul Aini')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Muhammad Arya Bima Prasetianto(Abim)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Mutia Mauludiah(Muti)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Nabilla Aufaa(Bila)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Neneng Mega Khoerunisa')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Nikita Rizki Mutiara(Niki)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Raihan Muhammad Fauzi(Ehan)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Rangga Dwi Ramadhani Widilaksono(Dwi)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Siti Salwa Nurjannah')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Sofi Ismayanti')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Susan Amelia Syakira(Meli)')){
                            alert(`Hai ${found}`);
                        } else if (found.includes('Syahrani T. Sabran(Rani)')){
                            alert(`Hai ${found}`);
                        } 
                        break;
                    } else {
                        alert('Siapa itu? Jangan ngaku-ngaku deehh! Coba isi lagi yang bener yaa...');
                    }
                } catch (err) {
                    console.log(err.message);
                    return;
                }
            }
            alert(`Apa kabarnyaaa? Semoga baik-baik ajaaa, selamat bernostalgia di web Angkatan Kelas 12 SMA Muhammadiyah 1 Bandung Tahun Ajaran 2022-2025`);
        } else {
            asal_sekolah = 'Tamu Kehormatan';
            alert(`Selamat datang di SMAMSA ${asal_sekolah}`);
        }

    } catch (error) {
        console.log(error.message);
    }
});



