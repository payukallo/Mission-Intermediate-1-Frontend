import "../assets/styles/myList.css";
import { Footer } from "../components/Footer.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { MyListMovies } from "../components/MyListMovies.jsx";

const MyListPage = () => {
  return (
    <>
      <main className="my-list-page">
        <Navbar />
        <MyListMovies />
        <Footer />
      </main>
    </>
  );
};

export default MyListPage;
