import React from 'react';

export default function Divimg({ src, onClick }) {
   return (
      <div className='divimg' onClick={onClick}>
         <img src={src} />
      </div>
   );
}
