import SideNav from "../Navbar/SideNav";
import Footer from "../Footer/Footer";
import logo from "../../images/25452.svg";
import React, { Fragment } from "react";

const RecipesPage = (props) => {
  return (
    <Fragment>
    <div className="flex flex-col bg-cover bg-fixed background-img min-h-screen">
      <img src={logo} className="h-48 xl:hidden" alt="vegan-friendly logo" />
      <div className=" flex flex-row justify-center">
        <SideNav className="absolute left-10" page={props.page} />
        <div className="xl:pt-[150px] w-full flex-col lg:w-7/12">
          {props.children}
        </div>
      </div>
    </div>
      <Footer />
    </Fragment>
  );
};

export default RecipesPage;
