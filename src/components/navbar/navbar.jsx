import logo from "../../assets/img/logo.jpeg";
function Navbar() {
    return (
      <header className="bg-indigo-600 text-white shadow-lg">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="SilviaNet Logo" className="w-10 h-10 rounded-full" />
            <span className="text-2xl font-bold">SilviaNet</span>
          </div>
          <ul className="hidden md:flex space-x-6 ">
            <li><a href="#home" className="hover:underline font-bold text-lg">Inicio</a></li>
            <li><a href="#about" className="hover:underline font-bold text-lg">Acerca de nosotros</a></li>
            <li><a href="#plans" className="hover:underline font-bold text-lg">Planes de Internet</a></li>
            <li><a href="#contact" className="hover:underline font-bold text-lg">Contáctanos</a></li>
          </ul>
        </nav>
      </header>
    );
  }

  export default Navbar;