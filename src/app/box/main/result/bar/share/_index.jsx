import React from 'react';

import { ImgButton } from 'reactyio';

import info from '../../../../../../data/meta.json';

import icon from './share.svg';

export default function Share({ word }) {
   return (
      <ImgButton
         src={icon}
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
