
class Covid19Feed extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = 
        `<style>
        *{
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
          }
        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            align-content: center;
            border-radius: 5px;
            padding: 20px;
            background: white;
            margin-top: 20px;
          }
          #content {
            float: left;
            width: 70%;
            padding-left: 5%;
          }
          .featured-image {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
          }
          .profile img {
            width: 200px;
          }
          .profile header {
            text-align: center;
                 }
          
          aside {
            float: right;
            width: 29%;
            padding-right: 5%;
          }
          @media screen and (max-width: 1000px) {
              #content,
              aside {
                  width: 100%;
                  padding: 0px;
              }
           }
           * {box-sizing:border-box}
           header {
            display: inline;
           }
           
           
          
        </style>
        <div id="content">
            <article id="COVID-19" class="card">
                <img src="src/image/covid.png" class="featured-image" alt="belajar">
                <h2 id="COVID-19">Apa Itu Virus COVID-19 ?</h2>
                <p class="card">Penyakit koronavirus 2019 (bahasa inggris: coronavirus disease 2019, disingkat COVID-19) adalah penyakit menular yang disebabkan oleh SARS-CoV-2, salah satu jenis koronavirus. Penyakit ini mengakibatkan pandemi koronavirus 2019-2020. Penderita COVID-19 dapat mengalami demam, batuk kering, dan kesulitan bernapas, sakit tenggorokan, pilek, atau bersin-bersin lebih jarang ditemukan. Pada penderita paling rentan, penyakit ini dapat berujung pada pneumonia dan kegagalan multiorgan. Infeksi menyebar dari satu orang ke orang lain melalui percikan (droplet) dari saluran pernapasan yang sering dihasilkan saat batuk atau bersin.
                   Sumber : Wikipedia</p>
                
            </article>
            <article id="GEJALA" class="card">
                <h2 id="GEJALA">Apa saja Gejala COVID-19 ?</h2>
                <img src="src/image/covid-19.svg" class="featured-image">
                <p class="card">    
                Secara umum, ada 3 gejala umum yang bisa menandakan seseorang terinfeksi virus Corona, yaitu: <br>
                1. Demam (suhu tubuh di atas 38 derajat Celsius) <br>
                2. Batuk kering <br> 
                3. Sesak napas</p>
                <p class="card">
                Ada beberapa gejala lain yang juga bisa muncul pada infeksi virus Corona meskipun lebih jarang, yaitu: <br>
                1. Diare <br>
                2. Sakit kepala <br>
                3. Konjungtivitis <br>
                4. Hilangnya kemampuan mengecap rasa atau mencium bau <br>
                5. Ruam di kulit</p>
                
            </article>
            
            <article id="PENCEGAHAN" class="card">
                <h2 id="PENCEGAHAN">#LAWAN Penularan COVID-19</h2>
                <img src="src/image/covid-bg.png" class="featured-image">
                <p>Cuci Tangan Menggunakan Sabun
                    Secara teratur dan menyeluruh bersihkan kedua tangan Anda dengan cara menggosokkan sabun ke telapak tangan dan kemudian basuhlah dengan air. Bila perlu cucilah kedua tangan setiap 20 detik sekali atau sesudah Anda melakukan hubungan kontak dengan orang lain.
                    
                    Kenapa? Mencuci tangan dengan sabun dan air dapat membunuh virus yang mungkin ada di telapak tangan Anda.</p>
            </article>
        </div>
        <aside>
            <article class="profile card">
                <header>
                    <h2 id="profile">COVID-19</h2>
                    <p>Coronavirus Disease 2019</p>
                    <figure>
                       <img src="src/image/covid-icon.jfif">
                    </figure>
                </header>
                
           </article>
           <article class="profile card">
           <h2>Cara Lawan COVID-19</h2>
           <div class="card">
             <h1 class="card-title">Cuci tangan</h1>
             <p>sering lah Cuci tangan mengunakan Sabun apabila anda sedang beraktifitas diluar rumah.</p>
           </div>
           <div class="card">
             <h1>Jaga Jarak Aman</h1>
             <p>Apa bila anda berada di tempat umum Jaga jarak min 1 meter.</p>
           </div>
           <div class="card">
             <h1>Gunakan masker</h1>
             <p>Pakailah masker apabila ada berada di luar rumah.</p>
           </div>
           <div class="card">
             <h1>Hindari Kerumunan</h1>
             <p>Usahakan apabila anda di tempat umum hidari kerumunan dengan banyak orang.</p>
           </div>
           
           </article>
        </aside>
        </div>
        `;
            }
        }

customElements.define("content-covid", Covid19Feed);