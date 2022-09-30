import React from 'react';

import Word from '../../components/word';
import Share from './share';
import Checkbox from './checkbox';

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
            <Checkbox v={v} response={response} dispatch={dispatch} />
            <Share word={response.word} />
         </div>
      </div>
   );
}
