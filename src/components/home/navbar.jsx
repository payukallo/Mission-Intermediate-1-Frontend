import MovieLogo from "../../assets/logo/movie.png";
import Profile from "../../assets/logo/profile.png";

export function Navbar() {
  return (
    <nav className="body-large-medium">
      <div className="navbar">
        <img className="logo" src={MovieLogo} width={163} height={44} />
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
  );
}
