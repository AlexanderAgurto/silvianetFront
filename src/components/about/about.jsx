import React from 'react';
import aboutImage from '../../assets/img/img_4.jpg';

function About() {
  return (
    <section id="about" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={aboutImage} alt="About us" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">Acerca de Nosotros</h2>
          <p className="text-lg mb-4 text-justify">
            En SilviaNet, nos dedicamos a proporcionar un servicio de internet confiable y rápido a nuestros clientes. Con años de experiencia en la industria, estamos comprometidos en conectar a las personas con el mundo a través de una conexión segura y estable.
          </p>
          <p className="text-lg mb-4 text-justify">
            Nuestro equipo de expertos trabaja constantemente para mejorar nuestra red, implementar nuevas tecnologías y garantizar la satisfacción de nuestros clientes. Nos enorgullece ser una empresa local que entiende las necesidades de nuestra comunidad.
          </p>
          <p className="text-lg text-justify">
            Únete a nosotros y experimenta un servicio de internet diseñado pensando en ti.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
