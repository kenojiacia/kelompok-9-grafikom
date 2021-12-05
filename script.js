function dda(x1, y1, x2, y2) {
    var hasil = '';
    var dx = x2 - x1;
    var dy = y2 - y1;
    // Tergantung pada nilai absolut dx dan dy
    // pilih jumlah langkah untuk menempatkan piksel sebagai
    // Langkah

    //Fungsi Math.abs() mengembalikan nilai absolut dari suatu angka. Artinya, ia kembali jika positif atau nol, dan negasi jika negatif. xxxx
    // gunakan stepnya
    if (Math.abs(dx) > Math.abs(dy)) {
        var step = Math.abs(dx);
    } else if (Math.abs(dy) > Math.abs(dx)) {
        var step = Math.abs(dy);
    }
    //untuk increment dan decrementnya
    var x_inc = dx / step;
    var y_inc = dy / step;

    for (var i = 1; i <= step; i++) {
        var putpixel = (x1, x2);
        x1 = x1 + x_inc;
        y1 = y1 + y_inc;


    }
    return x1;
}


console.log(dda(2, 1, 8, 5));