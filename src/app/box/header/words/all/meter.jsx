import React from 'react';

import constants from '../../../../../data/constants.json';

export default function Meter({ val }) {
   return (
      <div id='meter'>
         <meter
            max={constants.words}
            value={val}></meter>
         <span>
            {val} / {constants.words} • {((100 / constants.words) * val).toFixed(2)}%
         </span>
      </div>
   );
}
