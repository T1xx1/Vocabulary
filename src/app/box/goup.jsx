import React from 'react';

import { ImgButton } from 'reactyio';

import arrow from '../assets/svg/arrowup.svg';

export default function GoUp() {
   return (
      <ImgButton
         src={arrow}
         alt='Up'
         id='up'
         onClick={() => window.scroll(0, 0)}
      />
   );
}
