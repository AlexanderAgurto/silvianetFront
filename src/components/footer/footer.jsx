import React from "react";

function Footer() {
  return (
    <footer className="bg-indigo-600 text-white py-8 text-center">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">SilviaNet</h3>
          <p>Proveedor líder de servicios de Internet</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                Acerca de nosotros
              </a>
            </li>
            <li>
              <a href="#plans" className="hover:underline">
                Planes de Internet
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <ul className="space-y-2">
            <li>Teléfono: 099 560 6792</li>
            <li>Email: silvianethuaquillas@gmail.com</li>
            <li>
              Dirección: José Maria Urbina y Manabí (Cdla. Los Artesanos, cerca
              de Picanteria Aventura)
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.facebook.com/people/SilviaNet/100063849338431/?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SilviaNet. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
