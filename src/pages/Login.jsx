import { NavLink } from "react-router";
import "../assets/styles/login.css";
import MovieLogo from "../assets/logo/movie.png";
import GoogleLogo from "../assets/logo/google.png";

const LoginPage = () => {
  return (
    <>
      <main className="loginPage">
        <div className="containerLogin">
          <div className="logo">
            <img id="logo" src={MovieLogo} width={163} height={44} />
          </div>
          <div className="title">
            <h3 className="heading-3">Masuk</h3>
            <p className="body-medium-regular">Selamat datang kembali</p>
          </div>
          <div className="userName body-large-medium">
            <label htmlFor="userName">Username</label>
            <input
              className="body-medium-regular"
              id="userName"
              type="text"
              placeholder="Masukkan username"
            />
          </div>
          <div className="password-container">
            <div className="password body-large-medium">
              <label htmlFor="password">Kata Sandi</label>
              <input
                className="body-medium-regular"
                id="password"
                type="password"
                placeholder="Masukkan kata sandi"
              />
            </div>
            <div className="newAccount body-medium-regular">
              <span>
                Belum punya akun?{" "}
                <NavLink to="/register" className="body-small-regular">
                  Daftar
                </NavLink>
              </span>
              <a href="">Lupa kata sandi?</a>
            </div>
          </div>
          <div className="login">
            <button className="body-medium-semiBold" id="log">
              Masuk
            </button>
            <span className="body-small-medium">Atau</span>
            <button className="google-login body-medium-semiBold">
              <img src={GoogleLogo} width={18} />
              Masuk dengan Goggle
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
