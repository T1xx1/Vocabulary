import { useState } from 'react';

import info from './data/info.json';

import Search from './layouts/search';
import Settings from './pages/settings';
import Words from './pages/words';
import Vocabulary from './utils/vocabulary';

export default function App() {
   const vocabulary = new Vocabulary();

   const [value, setValue] = useState(vocabulary.value);

   let [search, setSearch] = useState(null);
   let [result, setResult] = useState(null);

   let update = () => {
      setValue(vocabulary.value);

      vocabulary.write();
   };

   /*let defaultWord = vocabulary.value.settings.defaultWord;
   let url = new URL(window.location.href);
   let word;

   let urlWord = url.searchParams.get('search');

   if (urlWord) {
      word = urlWord;
   } else if (defaultWord) word = defaultWord;*/

   //setSearch(word);

   //let importWord = url.searchParams.get('import');

   //if (importWord) vocabulary.value.words.saved = [...new Set([...vocabulary.value.words.saved, ...importWord.split(',')])]

   return <>
      <header>
         <h1 onClick={() => window.location.href = info.start_url} title={info.start_url}>{info.name}</h1>
         <div>
            <Words value={value} vocabulary={vocabulary} update={update} />
            <Settings value={value} vocabulary={vocabulary} update={update} />
         </div>
      </header>
      <Search search={search} setSearch={setSearch} setResult={setResult} vocabulary={vocabulary} update={update} />
      <div id='results'>{result}</div>
   </>;
}