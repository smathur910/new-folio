import Button from "./components/shared/Button";
import Footer from "./components/shared/Footer"

export default function HomePage() {
  return (
    <>
      <div className="col-12">
        <h1 className="text-center">Welcome to My Portfolio</h1>
        <Button />
      </div>
      <section className="footer">
        <Footer />
      </section>
    </>
  );
}