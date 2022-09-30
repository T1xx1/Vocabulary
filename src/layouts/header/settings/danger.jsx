import React from 'react';

import Snackbar from '../../../snippets/snackbar';

export default function Danger({ dispatch }) {
   return (
      <div id='danger'>
         <h2>Danger zone</h2>
         <div>
            <button
               type='button'
               onClick={() => {
                  dispatch({
                     type: 'words history del',
                  });

                  Snackbar('History cleaned');
               }}>
               Clean history
            </button>
            <button
               type='button'
               onClick={() => {
                  dispatch({
                     type: 'words reported del',
                  });

                  Snackbar('Reports cleaned');
               }}>
               Clean reports
            </button>
            <button
               type='button'
               onClick={() => {
                  if (window.confirm('Are you sure you want to reset everything?')) {
                     dispatch({
                        type: 'settings reset',
                     });

                     Snackbar('Reset completed');
                  }
               }}>
               Reset
            </button>
            <button
               type='button'
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
