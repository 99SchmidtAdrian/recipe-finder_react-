import AboutVeganism from "../AboutVeganism/AboutVeganism";
import Footer from "../Footer/Footer";
import SearchBar from "../Search/SearchBar";

const MainPage = () => {
  return (
    <div className="bg-cover bg-fixed background-img">
      <SearchBar />
      <AboutVeganism />
      <Footer />
    </div>
  );
};

export default MainPage;
