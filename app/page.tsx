import Navbar from "./components/Navbar.jsx";
import AboutPractice from "./components/AboutPractice.jsx";
import Office from "./components/Office.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#1e252b] selection:bg-[#3b6e6c]/20">

      <Navbar />
    
      <AboutPractice />
 
      <Office />

      <Footer />
    </main>
  );
}
