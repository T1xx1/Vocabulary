import React from 'react';

import { ImgButton } from 'reactyio';

import randomWord from '../../../../../services/randomword';

import icon from './crossedarrows.svg';

export default function Random({ setSearch }) {
   return (
      <ImgButton
         src={icon}
         alt='Random'
         onClick={async () => setSearch(/*await randomWord()*/"random")}
      />
   );
}
