import React from 'react';

import { ImgButton } from 'reactyio';

import src from './arrowup.svg';

export default function GoUp() {
   return (
      <ImgButton
         src={src}
         alt='Up'
         id='goup'
         onClick={() => window.scroll(0, 0)}
      />
   );
}
