import phone from "../../images/phone.svg";
import facebook from "../../images/facebook-logo.svg";
import email from "../../images/e-mail.svg";
import MobileNav from "../Navbar/MobileNav";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-sm absolute w-full h-[100px] 2xl:mt-[-100px]">
      <div className="felx flex-col text-gray-200 font-light text-center">
        <div className="flex flex-col my-auto py-5">
          <div className="flex flex-row mx-auto">
            <a
              href="https://www.facebook.com/adrian.schmidt.142687/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={facebook}
                alt="facebook link"
                className="w-3 mt-1 mr-1"
              />
            </a>
            <a
              href="https://www.facebook.com/adrian.schmidt.142687/"
              target="_blank"
              rel="noreferrer"
            >
              Adrian Schmidt
            </a>
          </div>
          <div className="flex flex-row mx-auto">
            <a href="tel:+36305762059">
              <img src={phone} alt="phone" className="w-3 mt-1 mr-1" />
            </a>
            <a href="tel:+36305762059">+36305762059</a>
          </div>
          <div className="flex flex-row mx-auto">
            <a href="99schmidt.adrian@gmail.com">
              <img src={email} alt="e-mail" className="w-3 mt-1 mr-1" />
            </a>
            <a href="mailto:99schmidt.adrian@gmail.com">
              99schmidt.adrian@gmail.com
            </a>
          </div>
        </div>
      </div>
      <MobileNav />
    </footer>
  );
};

export default Footer;
