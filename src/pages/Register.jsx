import { NavLink } from "react-router";
import "../assets/styles/register.css";
import MovieLogo from "../assets/logo/movie.png";
import GoogleLogo from "../assets/logo/google.png"

const RegisterPage = () => {
  return (
    <>
      <main className="registerPage">
        <div className="containerRegister">
          <div className="logo">
            <img id="logo" src={MovieLogo} width={163} height={44}  />
          </div>
          <div className="title">
            <h3 className="heading-3">Daftar</h3>
            <p className="body-medium-regular">Selamat datang!</p>
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
          <div className="password body-large-medium">
            <label htmlFor="password">Kata Sandi</label>
            <input
              className="body-medium-regular"
              id="password"
              type="password"
              placeholder="Masukkan kata sandi"
            />
          </div>
          <div className="password-container">
            <div className="password body-large-medium">
              <label htmlFor="password">Konfirmasi Kata Sandi</label>
              <input
                className="body-medium-regular"
                id="password"
                type="password"
                placeholder="Masukkan kata sandi"
              />
            </div>
            <div className="account body-medium-regular">
              <span>
                Sudah punya akun?{" "}
                  <NavLink to="/login" className="body-small-regular">
                  Masuk
                </NavLink>
              </span>
            </div>
          </div>
          <div className="login body-medium-semiBold">
            <button className="body-medium-semiBold" id="regis">
              Daftar
            </button>
            <span className="body-small-medium">Atau</span>
            <button className="google-login body-medium-semiBold">
              <img src={GoogleLogo} width={18} />
              Daftar dengan Goggle
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
