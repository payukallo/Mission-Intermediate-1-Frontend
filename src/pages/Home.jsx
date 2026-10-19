import "../assets/styles/index.css";
import MovieLogo from "../assets/logo/movie.png";
import Profile from "../assets/logo/profile.png"
import Movie1 from "../assets/images/movie1.png"
import Movie2 from "../assets/images/movie2.png"
import Movie3 from "../assets/images/movie3.png"
import Movie4 from "../assets/images/movie4.png"
import Movie5 from "../assets/images/movie5.png"
import Movie6 from "../assets/images/movie6.png"
import Movie7 from "../assets/images/movie7.png"
import Movie8 from "../assets/images/movie8_18.png"
import Movie9 from "../assets/images/movie9_17.png"
import Movie10 from "../assets/images/movie10.png"
import Movie11 from "../assets/images/movie11.png"
import Movie12 from "../assets/images/movie12.png"
import Movie13 from "../assets/images/movie13.png"
import Movie14 from "../assets/images/movie14_15.png"
import Movie15 from "../assets/images/movie14_15.png"
import Movie16 from "../assets/images/movie16.png"
import Movie17 from "../assets/images/movie9_17.png"
import Movie18 from "../assets/images/movie8_18.png"
import Movie19 from "../assets/images/movie19.png"


const HomePage = () => {
  return (
    <>
      <nav className="body-large-medium">
        <div className="navbar">
          <img className="logo" src={MovieLogo} width={163} height={44}/>
          <a href="">Series</a>
          <a href="">Film</a>
          <a href="">Daftar Saya</a>
        </div>
        <div className="profile">
          <img src={Profile} />
          <select name="account" id="account" className="body-small-medium">
            <option>Profil</option>
            <option>Ubah Premium</option>
            <option>Keluar</option>
          </select>
        </div>
      </nav>
      <header>
        <div className="header">
          <div className="head">
            <div className="head-text">
              <h1 className="heading-1">Duty After School</h1>
              <p className="body-large-medium">
                Sebuah benda tak di kenal mengambil ahli dunia. Dalam
                keputusasaan, Departement Pertahanan mulai merekrut lebih banyak
                tentara, termasuk siswa sekolah menengah. Mereka pun segera
                menjadi pejuang garis depan dalam perang.
              </p>
            </div>
            <div className="head-btn">
              <div className="btn-left">
                <button className="btn-primary-shadow">Mulai</button>
                <button className="btn-secondary-contained info">
                  <img src="./assets/logo/!.png" alt="" />
                  Selengkapnya
                </button>
                <span className="age body-large-regular">18+</span>
              </div>
              <img src="/assets/logo/mute-volume.png" alt="" />
            </div>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="continue-movies">
          <h3 className="heading-3">Melanjutkan Tonton Film</h3>
          <div className="movie-top">
            <div className="box-top">
              <img src={Movie1} alt="" />
              <div className="heading-6">
                <p className="text-left">Don't Look Up</p>
                <p className="text-right">★ 4.5/5</p>
              </div>
            </div>
            <div className="box-top">
              <img src={Movie2} alt="" />
              <div className="heading-6">
                <p className="text-left">All of Us Dead</p>
                <p className="text-right">★ 4.2/5</p>
              </div>
            </div>
            <div className="box-top">
              <img src={Movie3} alt="" />
              <div className="heading-6">
                <p className="text-left">Blue Lock</p>
                <p className="text-right">★ 4.6/5</p>
              </div>
            </div>
            <div className="box-top">
              <img src={Movie4} alt="" />
              <div className="heading-6">
                <p className="text-left">A Man Called Otto</p>
                <p className="text-right">★ 4.4/5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="movies">
          <h3 className="heading-3">Top Rating Film dan Series Hari Ini</h3>
          <div className="movie-list">
            <div className="box">
              <img src={Movie5} alt="" />
              <div>
                <p className="text" />
              </div>
            </div>
            <div className="box">
              <img src={Movie6} alt="" />
              <div>
                <p className="text" />
              </div>
            </div>
            <div className="box">
              <img src={Movie7} alt="" />
              <div>
                <p className="text" />
              </div>
            </div>
            <div className="box">
              <img src={Movie8} alt="" />
              <div>
                <p className="text" />
              </div>
            </div>
            <div className="box">
              <img src={Movie9} alt="" />
              <div>
                <p className="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="movies">
          <h3 className="heading-3">Film Trending</h3>
          <div className="movie-list">
            <div className="box">
              <img src={Movie10} alt="" />
              <div>
                <p className="text" />
              </div>
            </div>
            <div className="box">
              <img src={Movie11} alt="" />
              <div>
                <p className="text" />
              </div>
            </div>
            <div className="box">
              <img src={Movie12} alt="" />
              <div>
                <p className="text" />
              </div>
            </div>
            <div className="box">
              <img src={Movie13} alt="" />
              <div>
                <p className="text" />
              </div>
            </div>
            <div className="box">
              <img src={Movie14} alt="" />
              <div>
                <p className="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="movies">
          <h3 className="heading-3">Rilis Baru</h3>
          <div className="movie-list">
            <div className="box">
              <img src={Movie15} alt="" />
              <div>
                <p className="text" />
              </div>
            </div>
            <div className="box">
              <img src={Movie16} alt="" />
              <div>
                <p className="text" />
              </div>
            </div>
            <div className="box">
              <img src={Movie17} alt="" />
              <div>
                <p className="text" />
              </div>
            </div>
            <div className="box">
              <img src={Movie18} alt="" />
              <div>
                <p className="text" />
              </div>
            </div>
            <div className="box">
              <img src={Movie19} alt="" />
              <div>
                <p className="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="body-medium-medium">
        <div className="foot-logo">
          <img className="logo" src={MovieLogo} alt="" />
          <div>@ 2023 Chill All Rights Reserved.</div>
        </div>
        <div className="right-foot">
          <div className="foot-genre">
            <div className="body-medium-bold">Genre</div>
            <div className="genre">
              <div className="genre-list">
                <a href="">Aksi</a>
                <a href="">Anaka-anak</a>
                <a href="">Anime</a>
                <a href="">Britania</a>
              </div>
              <div className="genre-list">
                <a href="">Drama</a>
                <a href="">Fantasi Ilmiah &amp; Fantasi</a>
                <a href="">Kejahatan</a>
                <a href="">KDrama</a>
              </div>
              <div className="genre-list">
                <a href="">Komedi</a>
                <a href="">Petualanga</a>
                <a href="">Perang</a>
                <a href="">Romantis</a>
              </div>
              <div className="genre-list">
                <a href="">Sains &amp; Alam</a>
                <a href="">Thriller</a>
              </div>
            </div>
          </div>
          <div className="foot-help">
            <div className="body-medium-bold">Bantuan</div>
            <div className="help-list">
              <a href="">FAQ</a>
              <a href="">Kontak Kami</a>
              <a href="">Privasi</a>
              <a href="">Syarat &amp; Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
