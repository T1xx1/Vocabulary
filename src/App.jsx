import { useEffect, useState } from 'react';

import info from './data/info.json';

import Search from './layouts/search';
import Settings from './pages/settings';
import Words from './pages/words';
import Vocabulary from './utils/vocabulary';

export default function App() {
   const vocabulary = new Vocabulary();

   const [value, setValue] = useState(vocabulary.value);

   useEffect(() => {
      vocabulary.value = value;
      vocabulary.write();
   }, [value]);

   let [search, setSearch] = useState(null)
   let [result, setResult] = useState(null);

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

   return <div id='app'>
      <header>
         <h1 onClick={() => window.location.href = info.start_url} title={info.start_url}>{info.name}</h1>
         <div>
            <Words value={value} setValue={setValue} vocabulary={vocabulary} />
            <Settings vocabulary={vocabulary} value={value} setValue={setValue} />
         </div>
      </header>
      <Search search={search} setSearch={setSearch} setResult={setResult} vocabulary={vocabulary} setValue={setValue} />
      <div id='results'>{result}</div>
   </div>;
}