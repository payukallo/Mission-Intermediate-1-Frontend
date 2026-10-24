import "../assets/styles/index.css";
import { Navbar } from "../components/home/navbar";
import { HeadText } from "../components/home/headText";
import { HeadBtn } from "../components/home/headBtn";
import { ContentMovie } from "../components/home/contentMovies";
import { Footer } from "../components/home/footer";

const HomePage = () => {
  return (
    <>
      <main className="home-page">
        <Navbar />
        <header>
          <div className="header">
            <HeadText />
            <HeadBtn />
          </div>
        </header>
        <ContentMovie />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
