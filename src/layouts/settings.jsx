import React from 'react';
import { useEffect, useReducer } from 'react';

import Dialog from '../snippets/dialog';
import download from '../snippets/download';

import gear from '../assets/gear.png';

import Snackbar from '../components/snackbar';
import Dictionary from '../services/dictionary';

export default function Settings({ value, dispatch }) {
   let [settings, dispatchS] = useReducer((state, action) => {
      switch (action.type) {
         case 'defaultWord':
            return {
               ...state,
               defaultWord: action.payload,
            };
         default:
            return settings;
      }
   }, value.settings);

   useEffect(() => {
      dispatch({
         type: 'edit',
         payload: {
            settings: settings,
         },
      });
   }, [settings]);

   return (
      <Dialog id='settings' icon={gear}>
         <div id='defaultWord'>
            <span>Deafult word</span>
            <input
               type='text'
               onChange={e => {
                  dispatchS({
                     type: 'defaultWord',
                     payload: e.target.value.toLowerCase(),
                  });
               }}
               placeholder='Word...'
               value={settings.defaultWord ?? ''}
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
                        reader.onload = () => {
                           let words = String(reader.result.replaceAll('\r\n', '').replaceAll(/,+/g, ',')).split(',');

                           words.forEach(word => {
                              Dictionary(word).catch(() => {
                                 words.filter(w => word !== w);
                              });
                           });

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
