import React from 'react';

import Block from '../../components/block';

import Sources from './sources';

export default function word(v, setSearch) {
   return (
      <>
         {v.meanings.map(meaning => (
            <div key={meaning.partOfSpeech}>
               <h2>{meaning.partOfSpeech}</h2>
               <ol>
                  {meaning.definitions.slice(0, 5).map(word => (
                     <li key={word.definition}>{word.definition}</li>
                  ))}
               </ol>
               {meaning.synonyms.length !== 0 && (
                  <Block
                     title='Synonyms'
                     v={meaning.synonyms}
                     setSearch={setSearch}
                  />
               )}
               {meaning.antonyms.length !== 0 && (
                  <Block
                     title='Antonyms'
                     v={meaning.antonyms}
                     setSearch={setSearch}
                  />
               )}
            </div>
         ))}
         <Sources v={v.sourceUrls} />
      </>
   );
}
