import React from 'react';
import { useEffect, useState } from 'react';

import arrows from '../assets/arrows.png';
import lens from '../assets/lens.png';

import Dictionary from '../services/dictionary';
import Error from './error';
import Random from '../services/random';
import Report from './report';
import Word from '../components/word';
import Bar from './bar';

export default function Search({ value, dispatch, search, setSearch, setResults }) {
   let [input, setInput] = useState(search);

   let research = () => setSearch(document.querySelector('input[type="search"]').value);

   useEffect(() => {
      try {
         if ([null, ''].includes(search.replaceAll(' ', ''))) throw <></>;
         if (!navigator.onLine)
            throw (
               <Error value={value} dispatch={dispatch} search={search} setSearch={setSearch}>
                  No internet connection
               </Error>
            );
      } catch (node) {
         setResults(node);

         return;
      }

      setInput(search);
      setResults(
         <span>
            Searching <Word setSearch={setSearch}>{search}</Word>
            ...
         </span>
      );

      Dictionary(search)
         .then(response => {
            response = response[0];

            setResults(
               <>
                  <Bar value={value} dispatch={dispatch} search={search} setSearch={setSearch} phonetic={response.phonetic} />
                  <div>
                     {response.meanings.map(meaning => {
                        return (
                           <div key={meaning.partOfSpeech}>
                              <h3>{meaning.partOfSpeech}</h3>
                              <ol>
                                 {meaning.definitions.slice(0, 5).map(word => (
                                    <li key={word.definition}>{word.definition}</li>
                                 ))}
                              </ol>
                              {meaning.synonyms.length !== 0 && (
                                 <div>
                                    <b>Synonyms</b>
                                    <ul>
                                       {meaning.synonyms.map(word => (
                                          <li key={word}>
                                             <Word setSearch={setSearch}>{word}</Word>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              )}
                              {meaning.antonyms.length !== 0 && (
                                 <div>
                                    <b>Antonyms</b>
                                    <ul>
                                       {meaning.antonyms.map(word => (
                                          <li key={word}>
                                             <Word setSearch={setSearch}>{word}</Word>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              )}
                           </div>
                        );
                     })}
                  </div>
                  {response.sourceUrls.length !== 0 && (
                     <div id='sources'>
                        <b>Sources</b>
                        <ul>
                           {response.sourceUrls.map(source => (
                              <li key={source}>
                                 <a href={source}>{new URL(source).host}</a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  )}
               </>
            );
         })
         .catch(() => {
            setResults(
               <Error value={value} dispatch={dispatch} search={search} setSearch={setSearch}>
                  <div>
                     <span>Word </span>
                     <Word setSearch={setSearch}>{search}</Word>
                     <span> not found </span>
                  </div>
                  <Report word={search} />
               </Error>
            );
         });
   }, [search]);

   return (
      <nav id='search'>
         <input
            type='search'
            list='datalist'
            onChange={e => setInput(e.target.value.toLowerCase())}
            onKeyUp={e => {
               if (e.key === 'Enter') research();
               if (e.ctrlKey === true && e.key === 'q')
                  try {
                     document.querySelector('input[type="checkbox"]').click();
                  } catch {}
            }}
            placeholder='Search a word...'
            value={input}
         />
         <datalist id='datalist'>
            {value.words.history.map(word => (
               <option key={word}>{word}</option>
            ))}
         </datalist>
         <div>
            <img src={arrows} alt='Random' onClick={() => Random().then(word => setSearch(word[0]))} />
            <img src={lens} alt='Search' onClick={research} />
         </div>
      </nav>
   );
}
