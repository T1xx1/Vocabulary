import React from 'react';

export default function Imgbutton({ src, alt, type, onClick }) {
   return (
      <button
         type={type}
         className='imgbutton'
         onClick={onClick}>
         <img
            src={src}
            alt={alt}
         />
      </button>
   );
}
