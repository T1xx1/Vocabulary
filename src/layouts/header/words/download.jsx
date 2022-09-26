import React from 'react';

import Divimg from '../../../snippets/divimg';
import download from '../../../snippets/download';
import Snackbar from '../../../snippets/snackbar';

import downarrow from '../../../assets/downarrow.png';

export default function Download({ v }) {
   return (
      <Divimg
         src={downarrow}
         onClick={() => {
            Snackbar('Downloading...');

            download(`Vocabulary ${new Date().toISOString()}.txt`, 'text/plain', JSON.stringify(v).slice(1).replace(']', '').replaceAll('"', ''));

            Snackbar('Download completed');
         }}
      />
   );
}
