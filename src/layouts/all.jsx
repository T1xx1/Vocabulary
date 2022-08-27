import React from 'react';

import grid from '../assets/grid.png';
import constants from '../data/constants.json';

import Dialog from '../snippets/dialog';
import Word from '../components/word';

export default function All({ value, setSearch }) {
   return (
      <Dialog id='all' icon={grid}>
         <div>
            <progress max={constants.words} value={value.words.saved.length}></progress>
            <div>
               {value.words.saved.length} / 500.000 • {((100 / constants.words) * value.words.saved.length).toFixed(2)}%
            </div>
         </div>
         <div>
            {value.words.saved.map(word => (
               <Word setSearch={setSearch} key={word}>
                  {word}
               </Word>
            ))}
         </div>
      </Dialog>
   );
}
