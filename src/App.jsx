import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Plans from "./components/plans/plans";
import Map from "./components/contacts/map";
import ContactForm from "./components/contacts/contactForm";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden max-w-full scroll-smooth">
      <Navbar />
      <main>
        <Home />
        <About />
        <Plans />
        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
            <Map />
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
