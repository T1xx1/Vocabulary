import { useEffect } from 'react';

import arrows from '../assets/img/arrows.png';
import chain from '../assets/img/chain.png';
import info from '../data/info.json';
import lens from '../assets/img/lens.png';

import Dictionary from '../services/dictionary';
import Google from '../components/google';
import Randomword from '../services/randomword';
import Report from '../components/report';
import Word from '../components/word';
import Snackbar from '../components/snackbar';

export default function Search({ search, setSearch, setResult, vocabulary, update }) {
   let random = () => Randomword().then(word => setSearch(word[0]));
   let research = () => setSearch(document.querySelector('#search').value);

   useEffect(() => {
      if (search && search !== '') {
         search = search.toLowerCase();

         setResult(<span>Searching <Word inner={search} />...</span>);

         Dictionary(search).then(response => {
            if (response.title) {
               setResult(<>
                  <div id='error'>Cannot find <Word inner={search} /></div>
                  <Google q={search} />
                  <Report word={search} />
               </>);
            } else {
               vocabulary.value.words.history = [...new Set([...vocabulary.value.words.history, search])];

               update();

               response = response[0];

               setResult(<>
                  <div>
                     <div>
                        <h2><Word inner={search} /></h2>
                        <span>{response.phonetic}</span>
                     </div>
                     <div>
                        <input type="checkbox" defaultChecked={vocabulary.isSaved(search)} onClick={() => {
                           if (vocabulary.isSaved(search)) {
                              vocabulary.rm(search);

                              update();

                              Snackbar('Word unsaved');
                           } else {
                              vocabulary.save(search);

                              update();

                              Snackbar('Word saved');
                           }
                        }} />
                        <img src={chain} alt="Share" onClick={() => {
                           navigator.share({
                              title: `Vocabulary: ${search}`,
                              url: `${info.start_url}?search=${search}`
                           });
                        }} />
                     </div>
                  </div>
                  <div>{response.meanings.map(meaning => {
                     return <div key={meaning.partOfSpeech}>
                        <h3>{meaning.partOfSpeech}</h3>
                        <ol>{meaning.definitions.slice(0, 5).map(word => <li key={word.definition}>{word.definition}</li>)}</ol>
                        {meaning.synonyms.length === 0 ? <></> : <div>
                           <b>Synonyms</b>
                           <ul>{meaning.synonyms.map(word => <li key={word}><Word inner={word} /></li>)}</ul>
                        </div>}
                        {meaning.antonyms.length === 0 ? <></> : <div>
                           <b>Antonyms</b>
                           <ul>{meaning.antonyms.map(word => <li key={word}><Word inner={word} /></li>)}</ul>
                        </div>}
                     </div>;
                  })}</div>
                  {response.sourceUrls.length === 0 ? <></> : <div>
                     <b>Sources</b>
                     <ul>{response.sourceUrls.map(source => <li key={source}><a href={source}>{new URL(source).host}</a></li>)}</ul>
                  </div>}
                  < br />
                  <Google q={response.word} />
               </>);
            }
         });
      } else setResult(<></>);
   }, [search]);

   return <nav>
      <input
         type='search'
         id='search'
         autoFocus
         defaultValue={search}
         onKeyUp={e => {
            if (e.key === 'Enter') research();
         }}
         placeholder='Search a word...'
      />
      <div>
         <img src={arrows} alt='Random' onClick={random} />
         <img src={lens} alt='Search' onClick={research} />
      </div>
   </nav>;
}