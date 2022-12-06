import React from 'react';

import info from '../../../data/meta.json';

import Settings from './settings/_index';
import Words from './words/_index';

export default function Header({ val, setSearch, dispatch }) {
   return (
      <header>
         <h1 onClick={() => (window.location.href = info.start_url)}>{info.name}</h1>
         <div>
            <Words
               val={val.saved.words}
               setSearch={setSearch}
               dispatch={dispatch}
            />
            <Settings
               val={val}
               setSearch={setSearch}
               dispatch={dispatch}
            />
         </div>
      </header>
   );
}
