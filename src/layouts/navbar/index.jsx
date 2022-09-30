import React, { useEffect, useState } from 'react';

import crossarrows from '../../assets/crossarrows.png';
import lens from '../../assets/lens.png';

import Dictionary from '../../services/dictionary';
import Random from '../../services/random';

import Word from '../../components/word';

import result from '../result';
import word from '../result/word';
import Imgbutton from '../../components/imgbutton';

export default function Navbar({ v, search, setSearch, setResult, dispatch }) {
   let [input, setInput] = useState(search);

   let research = word => setSearch(word.toLowerCase());

   useEffect(() => {
      try {
         if (!window.navigator.onLine) throw setResult('No internet connection');
         if ([null, ''].includes(search.replaceAll(' ', ''))) throw <></>;
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

      Dictionary(search)
         .then(response =>
            result(
               v,
               response,
               {
                  word: response.word,
               },
               setSearch,
               setResult,
               dispatch,
               word(response, setSearch)
            )
         )
         .catch(() => {
            result(
               v,
               {
                  word: search,
               },
               {
                  word: search,
                  description: 404,
               },
               setSearch,
               setResult,
               dispatch,
               <>
                  <span>Word </span>
                  <Word setSearch={setSearch}>{search}</Word>
                  <span> not found</span>
               </>
            );
         });
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

            research(e.target.children[0].value);
         }}>
         <input
            type='search'
            list='datalist'
            onChange={e => setInput(e.target.value.toLowerCase())}
            placeholder='Search a word...'
            value={input}
         />
         <datalist id='datalist'>
            {[
               ...v.history.reduce((result, arr) => {
                  arr.forEach(word => result.add(word));

                  return result;
               }, new Set()),
            ]
               .sort()
               .map(word => (
                  <option key={word}>{word}</option>
               ))}
         </datalist>
         <div>
            <Imgbutton
               src={crossarrows}
               alt='Random'
               onClick={async () => setSearch(await Random())}
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
