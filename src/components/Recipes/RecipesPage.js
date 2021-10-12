import SideNav from "../Navbar/SideNav";
import Footer from "../Footer/Footer";

const RecipesPage = (props) => {
  return (
    <div className="flex flex-col bg-cover bg-fixed background-img">
      <div className=" flex flex-row justify-center">
        <SideNav className="absolute left-10" page="recipes" />
        <div className="pt-[150px] flex-col w-7/12 mx-auto">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default RecipesPage
