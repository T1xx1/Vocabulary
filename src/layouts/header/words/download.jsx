import React from 'react';

import download from '../../../snippets/download';
import Snackbar from '../../../snippets/snackbar';

import downarrow from '../../../assets/downarrow.png';

import Imgbutton from '../../../components/imgbutton';

export default function Download({ v }) {
   return (
      <Imgbutton
         src={downarrow}
         onClick={() => {
            Snackbar('Downloading...');

            download(`Vocabulary ${new Date().toISOString()}.txt`, 'text/plain', JSON.stringify(v).slice(1).replace(']', '').replaceAll('"', ''));

            Snackbar('Download completed');
         }}
      />
   );
}
