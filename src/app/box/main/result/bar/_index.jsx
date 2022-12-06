import React from 'react';

import Word from '../../../../../components/word';

import Checkbox from './checkbox';
import Share from './share/_index';
import Translate from './translate/_index';

export default function Bar({ val, response, dispatch }) {
   return (
      <div id='bar'>
         <div>
            <h2>
               <Word>{response.word}</Word>
            </h2>
            {response.phonetic && <span>/{response.phonetic.replace(/[/[\]]/g, '')}/</span>}
         </div>
         <div>
            <Checkbox
               val={val}
               response={response}
               dispatch={dispatch}
            />
            <Translate word={response.word} />
            <Share word={response.word} />
         </div>
      </div>
   );
}
