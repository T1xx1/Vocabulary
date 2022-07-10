import info from '../constants/info';
import storage from '../helpers/storage';
import Words from './words';
import Settings from './settings';
import results from '../layouts/results';
import Dictionary from '../services/dictionary';
import Google from '../components/google';
import Report from '../components/report';
import Search from '../layouts/search';
import { createRoot } from 'react-dom/client';

function App() {
   let load = () => {
      let defaultword = storage.read().settings.defaultWord;
      let result = createRoot(document.querySelector('#result'));
      let url = new URL(window.location.href);
      let word;

      let urlWord = url.searchParams.get('search');

      if (urlWord) {
         word = urlWord;
      } else word = defaultword;

      Dictionary(word).then(response => {
         let error = () => result.render(<>
            <div>Cannot find <span className='word'>{word}</span></div>
            <Google search={word} />
            <Report word={word} />
         </>);

         if (response.title) {
            error();
         } else results(response);
      });

      let importWord = url.searchParams.get('import').split(',');
      let saved = storage.read().saved;

      for (let word of importWord) saved.push(word);

      //storage.update('saved', new Set(saved));
   };
   let reload = () => window.location.href = info.start_url;

   if (storage.read() === null) storage.init();

   return <div id='app' onLoad={load}>
      <header>
         <h1 onClick={reload} title={info.start_url}>{info.name}</h1>
         <div>
            <Words />
            <Settings />
         </div>
      </header>
      <Search />
      <div id='result'></div>
   </div>;
}

export default App;