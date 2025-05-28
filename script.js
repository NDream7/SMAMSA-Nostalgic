const nama_siswa_kelas_12IPS = ['Fairuz', 'Fatimah', 'Hari', 'Karmila', 'Insan', 'Milano', 'Zeihan', 'Rauf', 'Nailah', 'Putri', 'Kurnia', 'Safwana', 'Shidqi', 'Syaira', 'Ujang']
const nama_siswa_kelas_12MIPA = ['Aisyah', 'Aldi', 'Aliffa', 'Arsya', 'Fatma', 'Maurel', 'Abim', 'Mutia', 'Nabilla', 'Mega', 'Nikita', 'Raihan', 'Dwi', 'Salwa', 'Sofi', 'Susan', 'Syahrani']

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
                    const found = daftarNama.find(n => n.toLowerCase() === nama.toLowerCase());
                    if (found) {
                        alert(`Haaiii ${nama}, apa kabarnyaaa? Semoga baik-baik ajaaa, selamat bernostalgia di web Angkatan Kelas 12 SMA Muhammadiyah 1 Bandung Tahun Ajaran 2022-2025`);
                        break;
                    } else {
                        alert('Siapa itu? Jangan ngaku-ngaku deehh! Coba isi lagi yang bener yaa...');
                    }
                } catch (err) {
                    console.log(err.message);
                    return;
                }
            }

        } else {
            asal_sekolah = 'Tamu Kehormatan';
            alert(`Selamat datang di SMAMSA ${asal_sekolah}`);
        }

    } catch (error) {
        console.log(error.message);
    }
});



