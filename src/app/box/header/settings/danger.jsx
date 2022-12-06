import React from 'react';

import { funcs } from 'reactyio';

export default function Danger({ dispatch }) {
   return (
      <div id='danger'>
         <h2>Danger zone</h2>
         <div>
            <button
               onClick={() => {
                  dispatch({
                     type: 'words history del',
                  });

                  funcs.Snackbar('History cleaned');
               }}>
               Clean history
            </button>
            <button
               onClick={() => {
                  dispatch({
                     type: 'words reported del',
                  });

                  funcs.Snackbar('Reports cleaned');
               }}>
               Clean reports
            </button>
            <button
               onClick={() => {
                  if (window.confirm('Are you sure you want to reset everything?')) {
                     dispatch({
                        type: 'settings reset',
                     });

                     funcsSnackbar('Reset completed');
                  }
               }}>
               Reset
            </button>
            <button
               onClick={() => {
                  if (window.confirm('Are you sure you want to delete everything?')) {
                     dispatch({
                        type: 'settings del',
                     });

                     window.close();
                  }
               }}>
               Close
            </button>
         </div>
      </div>
   );
}
