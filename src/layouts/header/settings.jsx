import React from 'react';

import Dialog from '../../snippets/dialog';
import Report from '../../components/report';
import Snackbar from '../../snippets/snackbar';

import gear from '../../assets/gear.png';
import info from '../../data/info.json';

export default function Settings({ value, setSearch, dispatch }) {
   return (
      <Dialog
         id='settings'
         trigger={
            <img
               src={gear}
               alt='Settings'
            />
         }
         icon={gear}>
         <div id='defaultWord'>
            <span>Deafult word</span>
            <input
               type='text'
               autoFocus={false}
               onChange={e => {
                  dispatch({
                     type: 'edit',
                     payload: state => {
                        return {
                           ...state,
                           settings: {
                              defaultWord: e.target.value,
                           },
                        };
                     },
                  });
               }}
               placeholder='Word...'
               value={value.settings.defaultWord ?? ''}
            />
         </div>
         <h2>Report a word</h2>
         <Report
            v={value.words.reported}
            setSearch={setSearch}
            dispatch={dispatch}
         />
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
                  Clear history
               </button>
               <button
                  type='button'
                  onClick={() => {
                     dispatch({
                        type: 'words reported del',
                     });

                     Snackbar('Reports cleared');
                  }}>
                  Clear reports
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
         <span>
            {info.name} {info.version}
         </span>
      </Dialog>
   );
}
