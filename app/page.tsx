import Button from "./components/shared/Button";
import Footer from "./components/shared/Footer"
import './assets/css/global.css'
import Home from "./(pages)/Home";

export default function HomePage() {
  return (
    <>
    <section className="header">

    </section>
      <div className="col-12 main-container">
        <Home/>
      </div>
      <section className="footer">
        <Footer />
      </section>
    </>
  );
}