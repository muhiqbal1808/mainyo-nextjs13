import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import "@styles/global.css";

export const metadata = {
  title: "MainYo Indonesia",
  description: "Mainyo Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
