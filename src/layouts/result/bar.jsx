import React from 'react';

import Snackbar from '../../snippets/snackbar';

import Word from '../../components/word';
import Share from './share';

export default function Bar({ v, response, dispatch }) {
   return (
      <div id='bar'>
         <div>
            <h2>
               <Word>{response.word}</Word>
            </h2>
            {response.phonetic && <span>/{response.phonetic.replace(/[/[\]]/g, '')}/</span>}
         </div>
         <div>
            <input
               type='checkbox'
               defaultChecked={v.includes(response.word)}
               onChange={e => {
                  e = e.target.checked;

                  if (e) {
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
            <Share word={response.word} />
         </div>
      </div>
   );
}
