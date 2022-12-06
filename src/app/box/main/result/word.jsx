import React from 'react';

import Block from '../../../../components/block';

import Sources from './sources';

export default function word(val, setSearch) {
   return (
      <>
         {val.meanings.map(meaning => (
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
                     val={meaning.synonyms}
                     setSearch={setSearch}
                  />
               )}
               {meaning.antonyms.length !== 0 && (
                  <Block
                     title='Antonyms'
                     val={meaning.antonyms}
                     setSearch={setSearch}
                  />
               )}
            </div>
         ))}
         <Sources val={val.sourceUrls} />
      </>
   );
}
