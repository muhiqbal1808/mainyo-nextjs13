import "@styles/global.css";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full py-10">
      <div className="px-5">
        <div className="flex items-center justify-between p-1 mx-auto text-center">
          <div className="">
            <p className="text-[10px] uppercase">
              &copy; mainyo indonesia 2022
            </p>
          </div>
          <div>
            <ul className="flex gap-5 text-[10px]">
              <li>
                <Link className="" href="/aboutus">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/callus">Call Us</Link>
              </li>
              <li>
                <Link href="/terms">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 text-[15px]">
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
