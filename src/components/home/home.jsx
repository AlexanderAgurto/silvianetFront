import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../../assets/img/img_5.jpg";
import img2 from "../../assets/img/img_6.jpg";
import img3 from "../../assets/img/img_3.jpg";
const images = [img1, img2, img3];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-[500px] sm:h-[600px] md:h-[666px] overflow-hidden w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
      <h1 className="absolute bottom-4  ml-10 left-4 text-2xl md:text-6xl font-bold text-gray-50 text-center bold">
        Proveedor de Internet
        <br />
        "SilviaNet"
      </h1>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hidden sm:block"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hidden sm:block"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
}

export default Home;
