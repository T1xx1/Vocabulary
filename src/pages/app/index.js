import info from '../../constants/info';
import storage from '../../helpers/storage';
import Words from '../words/index';
import Settings from '../settings/index';

function App() {
   function url() {
      let url = new URL(window.location.href);
      //let word = url.searchParams.get('word');

      // if (word) Search
   }
   function reload() {
      window.location.href = info.start_url;
   }

   if (storage.read() === null) storage.init();

   return <div id='app' onLoad={url}>
      <header flex=''>
         <h1 onClick={reload} title={info.start_url}>{info.name}</h1>

         <div flex=''>
            <Words />
            <Settings />
         </div>
      </header>

      <div id='results'></div>
   </div>;
}

export default App;