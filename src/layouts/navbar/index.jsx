import React, { useEffect, useState } from 'react';

import crossarrows from '../../assets/crossarrows.png';
import lens from '../../assets/lens.svg';

import Random from '../../services/random';

import Imgbutton from '../../components/imgbutton';
import Word from '../../components/word';

import Datalist from './datalist';
import research from './research';

export default function Navbar({ v, search, setSearch, setResult, dispatch }) {
   let [input, setInput] = useState(search);

   useEffect(() => {
      try {
         if (!window.navigator.onLine) throw 'No internet connection';
         if ([null, ''].includes(search.replaceAll(' ', ''))) throw '';
      } catch (node) {
         setResult(node);

         return;
      }

      dispatch({
         type: 'words history add',
         payload: [search],
      });

      setResult(
         <span>
            Searching <Word setSearch={setSearch}>{search}</Word>
            ...
         </span>
      );

      research(v, search, setSearch, setResult, dispatch);
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

            setSearch(e.target.children[0].value.toLowerCase());
         }}>
         <input
            type='search'
            list='datalist'
            onChange={e => setInput(e.target.value.toLowerCase())}
            placeholder='Search a word...'
            value={input}
         />
         <Datalist v={v} />
         <div>
            <Imgbutton
               src={crossarrows}
               alt='Random'
               type='button'
               onClick={async () => {
                  let random = await Random();

                  setInput(random);
                  setSearch(random);
               }}
            />
            <Imgbutton
               src={lens}
               alt='Search'
               type='submit'
            />
         </div>
      </form>
   );
}
