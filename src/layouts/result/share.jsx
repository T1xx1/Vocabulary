import React from 'react';

import share from '../../assets/share.svg';
import info from '../../data/info.json';

import Imgbutton from '../../components/imgbutton';

export default function Share({ word }) {
   return (
      <Imgbutton
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
