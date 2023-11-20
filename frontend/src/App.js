import Banner from "./components/Banner";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
// import Sidebar from "./components/Sidebar";
import SignIn from "./components/SignIn";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      {/* <Sidebar /> */}
      <FAQ />
      <Testimonials />
      <Pricing />
      <CTA />
      <SignIn />
      <Footer />
    </>
  )
}