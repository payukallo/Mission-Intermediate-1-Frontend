import "../assets/styles/register.css";
import { Logo } from "../components/Logo";
import { Title } from "../components/Title";
import { UserName } from "../components/UserName";
import { Password } from "../components/Password";
import { HasAccount } from "../components/HasAccount";
import { LoginRegisBtn } from "../components/LoginRegisBtn";

const RegisterPage = () => {
  return (
    <>
      <main className="register-page">
        <form action="" method="post">
          <div className="register-container">
            <Logo />
            <Title title={"Daftar"} subTitle={"Selamat datang!"} />
            <UserName />
            <Password paraPassword={"Kata Sandi"} />
            <div className="password-container">
              <Password paraPassword={"Konfirmasi Kata Sandi"} />
              <HasAccount />
            </div>
            <LoginRegisBtn upBtn={"Daftar"} downBtn={"Daftar dengan Google"} />
          </div>
        </form>
      </main>
    </>
  );
};

export default RegisterPage;
