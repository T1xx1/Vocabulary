import React from 'react';

import Snackbar from '../../snippets/snackbar';

export default function Checkbox({ v, response, dispatch }) {
   return (
      <input
         type='checkbox'
         id='checkbox'
         defaultChecked={v.includes(response.word)}
         onChange={e => {
            if (e.target.checked) {
               dispatch({
                  type: 'words saved add',
                  payload: [response.word],
               });

               Snackbar('Word saved');
            } else {
               dispatch({
                  type: 'words saved rm',
                  payload: response.word,
               });

               Snackbar('Word removed');
            }
         }}
      />
   );
}
