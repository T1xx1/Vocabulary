import React from 'react';

import info from '../../data/info.json';

import Settings from './settings';
import Words from './words';

export default function Header({ value, setSearch, dispatch }) {
   return (
      <header>
         <h1 onClick={() => (window.location.href = info.start_url)}>{info.name}</h1>
         <div>
            <Words
               v={value.words.saved}
               setSearch={setSearch}
               dispatch={dispatch}
            />
            <Settings
               value={value}
               setSearch={setSearch}
               dispatch={dispatch}
            />
         </div>
      </header>
   );
}
