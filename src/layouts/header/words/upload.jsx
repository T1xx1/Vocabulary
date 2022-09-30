import React from 'react';

import Snackbar from '../../../snippets/snackbar';

import uparrow from '../../../assets/uparrow.png';

import Imgbutton from '../../../components/imgbutton';

export default function Upload({ dispatch }) {
   return (
      <>
         <Imgbutton
            src={uparrow}
            onClick={e => e.target.parentNode.nextElementSibling.click()}
         />
         <input
            type='file'
            hidden
            onChange={e => {
               let reader = new FileReader();

               reader.readAsText(e.target.files[0]);
               reader.onload = async () => {
                  Snackbar('Uploading...');

                  dispatch({
                     type: 'words saved add',
                     payload: reader.result.replaceAll('\r\n', '').replaceAll(/,+/g, ',').split(','),
                  });

                  Snackbar('Upload completed');
               };
            }}
         />
      </>
   );
}
