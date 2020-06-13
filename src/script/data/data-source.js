function loadContent() {
    var xhr = new XMLHttpRequest();
    var xhr2 = new XMLHttpRequest();
    /*Web Api yang digunakan */
    var url1 = "https://indonesia-covid-19.mathdro.id/api";
    var url2 = "https://indonesia-covid-19.mathdro.id/api/provinsi";
    // Membuka jalur untuk ke Web API

    xhr.open("GET", url1, true);
    xhr.onloadend = function () {// Mengambil data dari response.
        if (this.responseText !== "") {
            var data = JSON.parse(this.responseText);
            var totalkasus = document.createElement("H1");
            totalkasus.innerHTML = data.jumlahKasus;
            var mati = document.createElement("H1");
            mati.innerHTML = data.meninggal;
            var sembuh = document.createElement("H1");
            sembuh.innerHTML=data.sembuh;
            var perawatan = document.createElement("H1");
            perawatan.innerHTML=data.perawatan;

            /*Menampilkan data ke berkas HTML dengan id (total_kasus, meninggal, sembuh, perawatan) */
            document.getElementById("total_kasus").append(totalkasus);
            document.getElementById("meninggal").append(mati);
            document.getElementById("sembuh").append(sembuh);
            document.getElementById("perawatan").append(perawatan);


        }
    };
    // Mengirimkan request
    xhr.send();

    xhr2.open("GET", url2, true);
    xhr2.onloadend = function () {// Mengambil data dari response.
        if (this.responseText !== "") {
            var dataProvinsi = JSON.parse(this.responseText);
            var datas_prov = dataProvinsi.data;
            var html = '';
            var cats = [];
            var sers = [];
            var vals = [];
            var sem = [];
            var death = [];
            for (var index = 0; index < datas_prov.length; index++) {
                cats.push(datas_prov[index].provinsi);
                vals.push(datas_prov[index].kasusPosi);
                sem.push(datas_prov[index].kasusSemb);
                death.push(datas_prov[index].kasusMeni);
                
                html += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>';
                html += '<div class="col-sm-3 col-md-3">';
                html += '<div class="card border-primary mb-3" style="width:auto;">';
                html += '<div class="card-header text-center">'+datas_prov[index].provinsi+'</div><div class="card-body">';
                html += '<p class="card-text">Terinfeksi : '+datas_prov[index].kasusPosi+'</p><hr>';
                html += '<p class="card-text">Sembuh : '+datas_prov[index].kasusSemb+'</p><hr>';
                html += '<p class="card-text">Meninggal : '+datas_prov[index].kasusMeni+'</p></div></div></div>';

            }
            document.getElementById("data-prov").innerHTML = html;
            sers.push({name : 'Terinfeksi', data : vals},{name : 'Sembuh' , data : sem}, {name : 'Meniggal' , data : death});

        }
    };
    // Mengirimkan request
    xhr2.send();

}


