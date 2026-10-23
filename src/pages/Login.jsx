import "../assets/styles/login.css";
import { Logo } from "../components/loginRegis/logo";
import { Title } from "../components/loginRegis/title";
import { UserName } from "../components/loginRegis/userName";
import { Password } from "../components/loginRegis/password";
import { NewAccount } from "../components/loginRegis/newAccount";
import { LoginRegisBtn } from "../components/loginRegis/loginRegisBtn";

const LoginPage = () => {
  return (
    <>
      <main className="login-page">
        <form action="" method="get">
          <div className="login-container">
            <Logo />
            <Title title={"Masuk"} subTitle={"Selamat datang kembali"} />
            <UserName />
            <div className="password-container">
              <Password paraPassword={"Kata Sandi"} />
              <NewAccount/>
            </div>
            <LoginRegisBtn upBtn={"Masuk"} downBtn={"Masuk dengan Google"} />
          </div>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
