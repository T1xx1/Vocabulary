import React from 'react';

import arrow from '../assets/arrow.svg';

export default function Up() {
   return (
      <button
         id='up'
         onClick={() => window.scroll(0, 0)}>
         <img
            src={arrow}
            alt='Up'
         />
      </button>
   );
}
