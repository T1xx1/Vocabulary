import info from '../constants/info';
import storage from '../helpers/storage';
import Words from './words';
import Settings from './settings';
import Search from '../layouts/search';

function App() {
   function url() {
      let url = new URL(window.location.href);

      let word = url.searchParams.get('search');

      if (word) Search(word);

      //import
   }
   function reload() {
      window.location.href = info.start_url;
   }

   if (storage.read() === null) storage.init();

   return <div id='app' onLoad={url}>
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