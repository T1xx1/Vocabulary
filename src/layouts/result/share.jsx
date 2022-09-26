import React from 'react';

import share from '../../assets/share.png';
import info from '../../data/info.json';

export default function Share({ word }) {
   return (
      <img
         src={share}
         alt='Share'
         onClick={() => {
            window.navigator.share({
               title: `Word '${word}' on ${info.name}`,
               url: `${info.start_url}?q=${word}`,
            });
         }}
      />
   );
}
