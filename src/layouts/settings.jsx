import React from 'react';

import Dialog from '../snippets/dialog';
import download from '../snippets/download';

import gear from '../assets/gear.png';

import Snackbar from '../components/snackbar';
import Dictionary from '../services/dictionary';

export default function Settings({ value, dispatch }) {
   return (
      <Dialog id='settings' icon={gear}>
         <div id='defaultWord'>
            <span>Deafult word</span>
            <input
               type='text'
               onChange={e => {
                  dispatch({
                     type: 'edit',
                     payload: {
                        settings: {
                           ...value.settings,
                           defaultWord: e.target.value.toLowerCase(),
                        },
                     },
                  });
               }}
               placeholder='Word...'
               value={value.settings.defaultWord ?? ''}
            />
         </div>
         <div>
            <h2>Files</h2>
            <div id='files'>
               <button
                  type='button'
                  onClick={() => {
                     download(
                        `Vocabulary ${new Date().toISOString()}.txt`,
                        'text/plain',
                        JSON.stringify(value.words.saved).slice(1).replace(']', '').replaceAll('"', '')
                     );

                     Snackbar('Words downloaded');
                  }}
               >
                  Download words
               </button>
               <div>
                  <span>Upload words</span>
                  <input
                     type='file'
                     onChange={e => {
                        let reader = new FileReader();

                        reader.readAsText(e.target.files[0]);
                        reader.onload = async () => {
                           let words = reader.result.replaceAll('\r\n', '').replaceAll(/,+/g, ',').split(',');

                           Snackbar('Uploading...');

                           /* for (let word of words) {
                              await Dictionary(word).catch(() => {
                                 words = words.filter(w => w !== word);
                              });
                           } */

                           dispatch({
                              type: 'save',
                              payload: words,
                           });

                           Snackbar(`Upload completed`);
                        };
                     }}
                  />
               </div>
            </div>
         </div>
         <div>
            <h2>Danger zone</h2>
            <div id='dangerZone'>
               <button
                  type='button'
                  onClick={() => {
                     dispatch({
                        type: 'clear',
                     });

                     Snackbar('History cleaned');
                  }}
               >
                  Clear history
               </button>
               <button
                  type='button'
                  onClick={() => {
                     if (window.confirm('Are you sure you want to delete all words?')) {
                        dispatch({
                           type: 'edit',
                           payload: {
                              words: {
                                 ...value.words,
                                 saved: [],
                              },
                           },
                        });

                        Snackbar('Words deleted');
                     }
                  }}
               >
                  Delete words
               </button>
               <button
                  type='button'
                  onClick={() => {
                     if (window.confirm('Are you sure you want to reset everything?')) {
                        dispatch({
                           type: 'reset',
                        });

                        Snackbar('Reset completed');
                     }
                  }}
               >
                  Reset
               </button>
            </div>
         </div>
      </Dialog>
   );
}
