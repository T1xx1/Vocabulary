import React from 'react';

import Arrow from '../assets/arrow';

export default function Up() {
   return (
      <button
         id='up'
         onClick={() => window.scroll(0, 0)}>
         <Arrow />
      </button>
   );
}
