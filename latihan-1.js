//contoh 5 Objek didunia nyata

var manusia = {
    kepala: 1,
    mata: 2,
    telinga: 2,
    tangan: 2,
    kaki: 2,
    jariTangan: 10,
    jariKaki: 10,
};

var namaProperti;
    for (namaProperti in manusia) {
        document.write(namaProperti + ": " + manusia[namaProperti] + '</br>');
}

document.write('</br>')

var baju = {
    jenis: "Gaun",
    kain: "Sutra"
};

var kemeja = Object.create(baju);
kemeja.jenis = "Kemeja ";
kemeja.kerah = true ;

var nama;
for (nama in kemeja) {
    document.write(nama + ": " + kemeja[nama]+'</br>');
}
document.write('</br>');

var mobil = {
    merek:"toyota",
    warna: "merah",
    roda: 4,
    mesin:1,
};

var namaProperti;
    for (namaProperti in mobil) {
        document.write(namaProperti + ": " + mobil[namaProperti] + '</br>');
}

document.write('</br>');

var komputer={
    monitor:" LG 4k ",
    CPU:" Asus ",
    mouse: " Logitec ",
    kyboard: " Logitec ",
};


var gabung;
for(gabung in komputer){
    document.write(gabung + ": " + komputer[gabung]+ '<br>')
}

document.write('</br>');

    var pesawat = {
    pesawat: "garuda indonesia ",
    sayap: "2",
    body:" 1 ",
    Ban: " 9 ",
    kursi_penumpang: " 160 "
};

var namaS;
    for(namaS in pesawat)
    {
        document.write(namaS + ": " + pesawat[namaS] + '<br>')
    }