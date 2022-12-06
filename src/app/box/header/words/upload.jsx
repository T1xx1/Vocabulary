import React from 'react';

import { ImgButton, funcs } from 'reactyio';

import uparrow from '../../../../assets/img/uparrow.png';

export default function Upload({ dispatch }) {
   return (
      <>
         <ImgButton
            src={uparrow}
            onClick={e => e.target.parentNode.nextElementSibling.click()}
         />
         <input
            type='file'
            onChange={e => {
               let reader = new FileReader();

               reader.readAsText(e.target.files[0]);
               reader.onload = async () => {
                  funcs.Snackbar('Uploading...');

                  dispatch({
                     type: 'saved words add',
                     payload: reader.result.replaceAll('\r\n', '').replaceAll(/,+/g, ',').split(','),
                  });

                  funcs.Snackbar('Upload completed');
               };
               reader.onerror = e => funcs.Snackbar('Uploading error');
            }}
         />
      </>
   );
}
