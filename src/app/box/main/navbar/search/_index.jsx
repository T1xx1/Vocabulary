import React from 'react';

import { ImgButton } from 'reactyio';

import icon from './lens.svg';

export default function Search() {
   return (
      <ImgButton
         src={icon}
         alt='Search'
         type='submit'
      />
   );
}
