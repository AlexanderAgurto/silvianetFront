import React from 'react';

function Map() {
  return (
    <div className="relative h-[400px]">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3982.4917664922277!2d-80.22777414417925!3d-3.4727812173372037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90339b6c055bf3f1%3A0x3dbfb0b27caeeaa7!2sSilvi!5e0!3m2!1ses-419!2sec!4v1731452789607!5m2!1ses-419!2sec" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      ></iframe>
    </div>
  );
}

export default Map;
