import "../assets/styles/login.css";
import { Logo } from "../components/Logo";
import { Title } from "../components/Title";
import { UserName } from "../components/UserName";
import { Password } from "../components/Password";
import { NewAccount } from "../components/NewAccount";
import { LoginRegisBtn } from "../components/LoginRegisBtn";

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
              <NewAccount />
            </div>
            <LoginRegisBtn upBtn={"Masuk"} downBtn={"Masuk dengan Google"} />
          </div>
        </form>
      </main>
    </>
  );
};

// hello

export default LoginPage;
