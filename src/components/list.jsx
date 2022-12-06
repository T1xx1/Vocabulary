import React from 'react';

import Word from './word';

export default function List({ val, setSearch }) {
   return (
      <ul className='list'>
         {val.sort().map(word => (
            <li key={word}>
               <Word setSearch={setSearch}>{word}</Word>
            </li>
         ))}
      </ul>
   );
}
