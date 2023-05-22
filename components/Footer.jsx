import "@styles/global.css";
import Link from "next/link";
import { BsFacebook, BsTiktok, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full py-5">
      <div className="px-5">
        <div className="flex items-center justify-between p-1 mx-auto text-center">
          <div className="">
            <p className="text-[7px] uppercase md:text-[10px]">
              &copy; mainyo indonesia 2022
            </p>
          </div>
          <div>
            <ul className="flex gap-2 md:gap-5 text-[8px] md:text-[10px]">
              <li>
                <Link className="" href="/aboutus">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/callus">Call Us</Link>
              </li>
              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 text-[10px] md:text-[15px]">
           <a href="https://facebook.com" target="_blank"><BsFacebook /></a> 
           <a href="https://tiktok.com" target="_blank"><BsTiktok /></a>
           <a href="https://instagram.com/mainyo.id" target="_blank"><BsInstagram /></a>
           <a href="https://youtube.com" target="_blank"><BsYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
