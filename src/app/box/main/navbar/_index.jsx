import React, { useEffect, useState } from 'react';

import Datalist from './datalist';
import research from './research';

import Random from './random/_index';
import Search from './search/_index';

export default function Navbar({ val, search, setSearch, setResult, dispatch }) {
   let [input, setInput] = useState(search);

   useEffect(() => {
      try {
         if ([null, ''].includes(search.replaceAll(' ', ''))) throw '';
         if (!window.navigator.onLine) throw 'No internet connection';
      } catch (m) {
         setResult(m);

         return;
      }

      setInput(search);

      setResult(<span>Searching '{search}'...</span>);

      research(val, search, setSearch, setResult, dispatch);
   }, [search]);

   return (
      <form
         id='nav'
         onKeyUp={e => {
            if (e.ctrlKey && e.key === 'q')
               try {
                  document.querySelector('[type="checkbox"]').click();
               } catch {}
         }}
         onSubmit={e => {
            e.preventDefault();

            setSearch(input);
         }}>
         <input
            type='search'
            list='datalist'
            onChange={e => setInput(e.target.value.toLowerCase())}
            placeholder='Search a word...'
            value={input}
         />
         <Datalist val={val} />
         <div>
            <Random setSearch={setSearch} />
            <Search />
         </div>
      </form>
   );
}
