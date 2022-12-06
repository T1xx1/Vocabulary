import React from 'react';

import Word from '../../../../../components/word';

export default function List({ val, setSearch }) {
   return (
      <div id='list'>
         {val.map(word => (
            <Word
               key={word}
               setSearch={setSearch}>
               {word}
            </Word>
         ))}
      </div>
   );
}
