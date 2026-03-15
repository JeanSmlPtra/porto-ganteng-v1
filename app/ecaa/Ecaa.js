"use client";

export default function Ecaa() {
  return (
    <div className="ecaa-root min-h-screen flex items-center justify-center p-6 bg-[#FDE3A7]">
      <div className="card">
        <div className="imgBox">
          <div className="bark"></div>
          <img src="/images/cover.jpeg" alt="cover" />
        </div>
        <div className="details">
          <div className="mb-5 mt-[-20px]">
          <h4 className="color1 pr-[150px]">Helloww</h4>
          <h4 className="color2">(Sweetheart)</h4>
          </div>
          <div className="mr-5">
          <p>DEAR My Sweetheart, Ecaa</p>
          <p>You look incredibly beautiful today</p>
          <p>and somehow you always manage to brighten my day</p>
          <p>without even trying.</p>
          <p>The more I talk with you</p>
          <p>the more I realize how special you are to me.</p>
          <p>So I just want to say it honestly—I like you, and I’d love the chance to be something more than friends.</p>
          </div>
          <div className="mr-5 mt-5">
            <p className="text-right">I hope we'll be together for infinity</p>
            <p className="text-right">Sam</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Indie+Flower');
        @import url('https://fonts.googleapis.com/css?family=Amatic+SC');

        .ecaa-root {
          font-family: 'Indie Flower', cursive !important;
          background: #FDE3A7;
        }

        .ecaa-root ::selection { background: transparent; }

        .ecaa-root h4 { font-size: 26px; line-height: 1px; font-family: 'Amatic SC', cursive !important; }

        .color1{color:#1BBC9B}
        .color2{color:#C0392B}

        .card {
          color: #013243;
          position: relative;
          width: 300px;
          height: 400px;
          background: #e0e1dc;
          transform-style: preserve-3d;
          transform: perspective(2000px);
          box-shadow: inset 300px 0 50px rgba(0,0,0,.5), 20px 0 60px rgba(0,0,0,.5);
          transition: 1s;
        }

        .card:hover { transform: perspective(2000px) rotate(15deg) scale(1.02); box-shadow: inset 20px 0 50px rgba(0,0,0,.5), 0 10px 100px rgba(0,0,0,.5); }

        .card:before { content:''; position: absolute; top: -5px; left: 0; width: 100%; height: 5px; background: #BAC1BA; transform-origin: bottom; transform: skewX(-45deg); }

        .card:after { content: ''; position: absolute; top: 0; right: -5px; width: 5px; height: 100%; background: #92A29C; transform-origin: left; transform: skewY(-45deg); }

        .card .imgBox { width: 100%; height: 100%; position: relative; transform-origin: left; transition: .7s; overflow: hidden; }

        .card .bark { position: absolute; background: #e0e1dc; width: 100%; height: 100%; opacity: 0; transition: .7s; }

        .card .imgBox img { width: 100%; height: 100%; object-fit: cover; }

        .card:hover .imgBox { transform: rotateY(-135deg); }

        .card:hover .bark { opacity: 1; transition: .6s; box-shadow: 300px 200px 100px rgba(0, 0, 0, .4) inset; }

        .card .details { position: absolute; top: 0; left: 0; box-sizing: border-box; padding: 0 0 0 10px; z-index: 3; margin-top: 70px; opacity: 0; transform: translateY(8px); transition: opacity .45s ease, transform .45s ease; }

        .card .details p { font-size: 15px; line-height: 1.4; transform: rotate(-2deg); padding: 0 0 0 20px; }

        .card:hover .details { opacity: 1; transform: translateY(0); }

        .card .details h4 { text-align: center; }

        .text-right { text-align: right; }
      `}</style>
    </div>
  );
}