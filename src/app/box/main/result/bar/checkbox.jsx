import React from 'react';

import { funcs } from 'reactyio';

export default function Checkbox({ val, response, dispatch }) {
   return (
      <input
         type='checkbox'
         id='checkbox'
         defaultChecked={val.includes(response.word)}
         onChange={e => {
            if (e.target.checked) {
               dispatch({
                  type: 'saved words add',
                  payload: [response.word],
               });

               funcs.Snackbar('Word saved');
            } else {
               dispatch({
                  type: 'saved words rm',
                  payload: response.word,
               });

               funcs.Snackbar('Word removed');
            }
         }}
      />
   );
}
