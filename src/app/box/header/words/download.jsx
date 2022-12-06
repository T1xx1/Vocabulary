import React from 'react';

import { ImgButton, funcs, utils } from 'reactyio';

import downarrow from '../../../../assets/img/downarrow.png';

export default function Download({ v }) {
   return (
      <ImgButton
         src={downarrow}
         onClick={() => {
            funcs.Snackbar('Downloading...');

            utils.Download(`Vocabulary ${new Date().toISOString()}.txt`, 'text/plain', JSON.stringify(v).slice(1).replace(']', '').replaceAll('"', ''));

            funcs.Snackbar('Download completed');
         }}
      />
   );
}
