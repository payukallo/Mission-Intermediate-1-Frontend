import "../assets/styles/register.css";
import { Logo } from "../components/loginRegis/logo";
import { Title } from "../components/loginRegis/title";
import { UserName } from "../components/loginRegis/userName";
import { Password } from "../components/loginRegis/password";
import { HasAccount } from "../components/loginRegis/hasAccount";
import { LoginRegisBtn } from "../components/loginRegis/loginRegisBtn";



const RegisterPage = () => {
  return (
    <>
      <main className="register-page">
        <form action="" method="post">
          <div className="register-container">
            <Logo />
            <Title title={"Daftar"} subTitle={"Selamat datang!"} />
            <UserName />
            <Password
              paraPassword={"Kata Sandi"}
              />
            <div className="password-container">
              <Password
              paraPassword={"Konfirmasi Kata Sandi"}
              />
              <HasAccount/>
            </div>
            <LoginRegisBtn
            upBtn={"Daftar"}
            downBtn={"Daftar dengan Google"}
            />
          </div>
        </form>
      </main>
    </>
  );
};

export default RegisterPage;
