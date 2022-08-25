import React from 'react';
import { useEffect, useState } from 'react';

import arrows from '../assets/arrows.png';
import dots from '../assets/dots.png';
import lens from '../assets/lens.png';
import info from '../data/info.json';

import Dictionary from '../services/dictionary';
import Random from '../services/random';
import Report from './report';
import Word from '../components/word';
import Snackbar from '../components/snackbar';

export default function Search({ value, dispatch, search, setSearch, setResults }) {
   let [input, setInput] = useState(search);

   let research = () => setSearch(document.querySelector('input[type="search"]').value);

   useEffect(() => {
      if ([null, ''].includes(search.replaceAll(' ', ''))) {
         setResults('');

         return;
      }

      setInput(search);
      setResults(
         <span>
            Searching <Word w={search} setSearch={setSearch} />
            ...
         </span>
      );

      Dictionary(search)
         .then(response => {
            response = response[0];

            setResults(
               <>
                  <div id='header'>
                     <span>
                        <h2>
                           <Word w={search} setSearch={setSearch} />
                        </h2>
                        {response.phonetic}
                     </span>
                     <div>
                        <input
                           type='checkbox'
                           defaultChecked={value.words.saved.includes(search)}
                           onChange={e => {
                              e = e.target.checked;

                              if (e) {
                                 dispatch({
                                    type: 'save',
                                    payload: [search],
                                 });

                                 Snackbar('Word saved');
                              } else {
                                 dispatch({
                                    type: 'rm',
                                    payload: search,
                                 });

                                 Snackbar('Word removed');
                              }
                           }}
                           title='Save/remove'
                        />
                        <img
                           src={dots}
                           alt='Share'
                           onClick={() => {
                              window.navigator.share({
                                 title: `Word ${search} on Vocabulary`,
                                 url: `${info.start_url}?q=${search}`,
                              });
                           }}
                           title='Share'
                        />
                     </div>
                  </div>
                  <div id='results'>
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
                                             <Word w={word} setSearch={setSearch} />
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
                                             <Word w={word} setSearch={setSearch} />
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
                     <div>
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
               <div className='error'>
                  <div>
                     <span>Word </span>
                     <Word w={search} setSearch={setSearch} />
                     <span> not found </span>
                  </div>
                  <Report w={search} setSearch={setSearch} />
               </div>
            );
         });
   }, [search]);

   return (
      <nav>
         <input
            type='search'
            autoFocus
            list='datalist'
            onChange={e => setInput(e.target.value.toLowerCase())}
            onKeyUp={e => {
               if (e.key === 'Enter') research();
               if (e.ctrlKey === true && e.key === 'q')
                  try {
                     document.querySelector('input[type="checkbox"]').click();
                  } catch {
                     setResults(<div className='error'>Search a word to save it </div>);
                  }
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
            <img src={arrows} alt='Random' onClick={() => Random().then(word => setSearch(word[0]))} title='Random' />
            <img src={lens} alt='Search' onClick={research} title='Search' />
         </div>
      </nav>
   );
}
