import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./styles.css"
function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("https://api-silvianet.vercel.app/api/email/", formData);

      Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Tu mensaje ha sido enviado correctamente.",
        icon: "success",
        confirmButtonText: "Cerrar",
        timer: 2000,
        timerProgressBar: true,
        willClose: () => {
          setFormData({
            fullName: "",
            phone: "",
            email: "",
            message: "",
          });
        },
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar el mensaje. Intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Cerrar",
        timer: 2000,
        timerProgressBar: true,
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full px-4 py-2 border rounded"
          placeholder="Nombre completo"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 border rounded"
          type="tel"
          placeholder="Teléfono"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 border rounded"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full px-4 py-2 border rounded"
          placeholder="Mensaje"
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
       <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          disabled={isLoading}  
        >
          {isLoading ? (
            <div className="spinner"></div> 
          ) : (
            'Enviar mensaje'
          )}
        </button>
      </form>

    </div>
  );
}

export default ContactForm;