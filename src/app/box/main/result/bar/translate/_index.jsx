import { ImgButton } from 'reactyio';

import icon from './letter.svg';

export default function translate({ word }) {
   return (
      <ImgButton
         src={icon}
         onClick={() => window.open(`https://translate.google.it?q=${word}`)}
      />
   );
}
