import React, { useEffect } from 'react';

import crossarrows from '../../assets/crossarrows.png';
import lens from '../../assets/lens.png';

import Dictionary from '../../services/dictionary';
import Random from '../../services/random';

import Word from '../../components/word';

import result from '../result';
import word from '../result/word';

export default function Navbar({ v, search, setSearch, setResult, dispatch }) {
   let research = () => setSearch(document.querySelector('input[type="search"]').value);

   useEffect(() => {
      try {
         if ([null, ''].includes(search.replaceAll(' ', ''))) throw <></>;
         if (!window.navigator.onLine) throw setResult(<>No internet connection</>);
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
               v.saved,
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
               v.saved,
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
      <nav>
         <input
            type='search'
            list='datalist'
            onKeyUp={e => {
               if (e.key === 'Enter') research();
               if (e.ctrlKey && e.key === 'q')
                  try {
                     document.querySelector('input[type="checkbox"]').click();
                  } catch {}
            }}
            placeholder='Search a word...'
            defaultValue={search}
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
            <img
               src={crossarrows}
               alt='Random'
               onClick={async () => setSearch(await Random())}
            />
            <img
               src={lens}
               alt='Search'
               onClick={research}
            />
         </div>
      </nav>
   );
}
