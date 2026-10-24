import "../assets/styles/myList.css";
import { Footer } from "../components/home/footer";
import { Navbar } from "../components/home/navbar";
import { MyListMovies } from "../components/myList/myListMovies.jsx";

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
