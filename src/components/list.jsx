import React from 'react';

import Word from './word';

export default function List({ v, setSearch }) {
   return v.map(word => (
      <li key={word}>
         <Word setSearch={setSearch}>{word}</Word>
      </li>
   ));
}
