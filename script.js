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

startBtn.addEventListener('click', () => {

    alert('Selamat datang di web Kelas 12 SMA Muhammadiyah 1 Bandung')

    function tanya(pertanyaan) {
        const jawab = prompt(pertanyaan)
        if (jawab === null || jawab.trim() === '') {
            alert('Yaahh udah mau pergi lagi yaa? Yaudah deh gapapaa, jangan lupa mampir lagi yaa :)')
            throw new Error('Prompt dibatalkan user.')
        }
        return jawab.trim()
    }
    
    try {
        let asal_sekolah = tanya('Kamu dari SMA manaaa?(inget penulisannya harus bener kayak yang di awal)')
    
        if (asal_sekolah == 'SMA Muhammadiyah 1 Bandung') {
            asal_sekolah = 'Murid Kesayangan'
            alert(`Selamat datang kembaliii ${asal_sekolah} para guru, wkwkwk`)
    
            let kelas = tanya('Kamu dari kelas apa niiihh???(inget huruf besar semua)')
           
            if (kelas == 'IPS') {
                kelas = 'IPS'
                alert(`owh kamu dari kelas ${kelas}, berarti kamu salah satu dari:\n${nama_siswa_kelas_12IPS.map(nama => '- ' + nama).join('\n')}\ndoonngg?`)
                let nama = tanya('Kalau gitu nama kamu siapa niicchh?').trim()
            if (nama_siswa_kelas_12IPS.includes(nama)){
                    alert(`Haaiii ${nama}, apa kabarnyaaa? semoga baik baik ajaaa, selamat bernostalgia di web Angkatan Kelas 12 SMA Muhammadiyah 1 Bandung Tahun Ajaran 2022-2025`)
                } else {
                    alert('siapa itu? jangan ngaku ngaku deehh')
                }
            } else if (kelas == 'MIPA') {
                kelas = 'MIPA'
                alert(`owh kamu dari kelas ${kelas}, berarti kamu salah satu dari:\n${nama_siswa_kelas_12MIPA.map(nama => '- ' + nama).join('\n')}\ndoonngg?`)
                let nama = tanya('Kalau gitu nama kamu siapa niicchh?').trim()
                if (nama_siswa_kelas_12MIPA.includes(nama)){
                    alert(`Haaiii ${nama}, apa kabarnyaaa? semoga baik baik ajaaa, selamat bernostalgia di web Angkatan Kelas 12 SMA Muhammadiyah 1 Bandung Tahun Ajaran 2022-2025`)
                } else {
                    alert('siapa itu? jangan ngaku ngaku deehh')
            }
            } else {
                alert('Kelas apaan tuuhh? gada di smamsa kelas itu, jangan ngaku ngaku')
            }
        } else {
            asal_sekolah = 'Tamu Kehormatan'
            alert(`Selamat datang di SMAMSA ${asal_sekolah}`)
        }
    } catch (error) {
        console.log(error.message)
    }
});



