import '../css/style.css';

import json from '../js/json';

import Header from './header';
import Input from './input';

function App() {
   let url = new URL(window.location.href);

   let word = String(url.searchParams.get('word') ?? '');
   let importArray = url.searchParams.get('import');

   if (json.read() === null) json.init();
   if (importArray) json.update('learned', [...new Set(json.read().learned.concat(...importArray.split(',')))]);

   return <div id='box'>
      <Header />
      <Input word={word} />

      <div id='results'></div>
   </div>;
}

export default App;