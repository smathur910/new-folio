
import Button from "./components/shared/Button";
import Footer from "./components/shared/Footer"
import './assets/css/global.css'
import Home from "./(pages)/Home";
import Header from "./components/shared/Header";

export default function HomePage() {
  return (
    <> 
      <div className="col-12">
        <Home />
      </div>
    </>
  );
}