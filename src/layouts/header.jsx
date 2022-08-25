import React from 'react';

import Settings from './settings';
import Words from './words';

export default function Header({ value, dispatch, setSearch }) {
   return (
      <header>
         <h1>Vocabulary</h1>
         <div>
            <Words value={value} dispatch={dispatch} setSearch={setSearch} />
            <Settings value={value} dispatch={dispatch} />
         </div>
      </header>
   );
}
