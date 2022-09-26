import React from 'react';

import Dialog from '../../../snippets/dialog';

import grid from '../../../assets/grid.png';
import constants from '../../../data/constants.json';

import Word from '../../../components/word';

export default function All({ v, setSearch }) {
   return (
      <Dialog
         id='all'
         trigger={<img src={grid} />}>
         <div>
            <meter
               max={constants.words}
               value={v.length}></meter>
            <span>
               {v.length} / {constants.words} • {((100 / constants.words) * v.length).toFixed(2)}%
            </span>
         </div>
         <div>
            {v.map(word => (
               <Word
                  key={word}
                  setSearch={setSearch}>
                  {word}
               </Word>
            ))}
         </div>
      </Dialog>
   );
}
