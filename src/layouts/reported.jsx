import React from 'react';

import Dialog from '../snippets/dialog';

import reported from '../data/reported.json';

import Word from '../components/word';

export default function Reported() {
   return (
      <Dialog id='reported'>
         <ul>
            {reported.map(word => (
               <li key={word}>
                  <Word>{word}</Word>
               </li>
            ))}
         </ul>
      </Dialog>
   );
}
