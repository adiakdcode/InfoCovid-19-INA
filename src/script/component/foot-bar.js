
class FootBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        footer{
            
            background: url(src/image/covid-bg.png) no-repeat center, #5bbff5 ; 
            padding: 20px 0;
            font-family: sans-serif;
          }
          
          .footer-container{
            max-width: 1300px;
            margin: auto;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap-reverse;
          }
          
          .logo{
            width: 180px;
          }
          
          .social-media{
            margin: 20px 0;
          }
          
          .social-media a{
            color: #001a21;
            margin-right: 25px;
            font-size: 22px;
            text-decoration: none;
            transition: .3s linear;
          }
          
          .social-media a:hover{
            color: #fc5c65;
          }
          
          .right-col h1{
            font-size: 26px;
          }
          
          .border{
            width: 100px;
            height: 4px;
            background: #fc5c65;
          }
          
          .newsletter-form{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          
          .txtb{
            flex: 1;
            padding: 18px 40px;
            font-size: 16px;
            color: #293043;
            background: #ddd;
            border: none;
            font-weight: 700;
            outline: none;
            border-radius: 30px;
            min-width: 260px;
          }
          
          .btn{
            padding: 18px 40px;
            font-size: 16px;
            color: #f1f1f1;
            background: #fc5c65;
            border: none;
            font-weight: 700;
            outline: none;
            border-radius: 30px;
            margin-left: 20px;
            cursor: pointer;
            transition: opacity .3s linear;
          }
          
          .btn:hover{
            opacity: .7;
          }
          @media screen and (max-width:960px) {
            .footer-container{
              max-width: 600px;
            }
            .right-col{
              width: 100%;
              margin-bottom: 60px;
            }
          
            .left-col{
              width: 100%;
              text-align: center;
            }
          }
          
          
          @media screen and (max-width:700px){
            .btn{
              margin: 0;
              width: 100%;
              margin-top: 20px;
              }
          }
          .note h1{
            font-size: 16px;
          }
          
       
        </style>
        <nav>
        <footer>
            <div class="footer-container">
              <div class="left-col">
                <div class="social-media">
                  <a href="#"><i class="fab fa-facebook-f"><img src="src/image/fb.png"width="50px"></i></a>
                  <a href="#"><i class="fab fa-twitter"><img src="src/image/twitter.png"width="50px"></i></a>
                  <a href="#"><i class="fab fa-instagram"><img src="src/image/ig.png"width="50px"></i></a>
                </div>
                <p class="rights-text">© 2020 AdiaK Projec[T]</p>
                <p>Data Api yang digunakan Pada situs ini diambil dari : <br>
                https://indonesia-covid-19.mathdro.id/api |
                https://indonesia-covid-19.mathdro.id/api/provinsi</p>
              </div>
      
              <div class="right-col">
                <h1>INFO COVID-19</h1>
                <p>Info resmi mengenai COVID-19 di Indonesia dapat anda akses<br>
                Pada Laman : </p>
                <a href="https://covid19.go.id"> covid19.go.id</a>
                <div class="border"></div>
                <p>Enter Your Email to get our news and updates.</p>
                <form action="" class="newsletter-form">
                  <input type="text" class="txtb" placeholder="Enter Your Email">
                  <input type="submit" class="btn" value="submit">
                </form>
              </div>
            </div>
            
          </footer>`;
            }
        }

customElements.define("foot-bar", FootBar);