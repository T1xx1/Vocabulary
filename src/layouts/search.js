import { createRoot } from 'react-dom/client';
import Dictionary from '../services/dictionary';
import Google from '../components/google';
import random from '../assets/img/random.png';
import lens from '../assets/img/lens.png';
import Button from '../components/button';
import results from './results';
import Randomword from '../services/randomword';
import Report from '../components/report';

function Search({ search }) {
   let keyboard = event => {
      if (event.key === 'Enter') research();
   };
   let load = () => research(search);
   let random_ = () => Randomword().then(result => research(result[0]));
   let research = (word = document.querySelector('input[type="search"]').value) => {
      let result = createRoot(document.querySelector('#result'));

      if (word && word !== '') {
         word = word.toLowerCase();

         document.querySelector('input[type="search"]').value = word;

         result.render(<span>Searching <b className='word'>${word}</b>...</span>);

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
      } else result.innerHTML = '';
   };

   return <nav onLoad={load}>
      <input type='search' autoFocus list='datalist' onKeyUp={keyboard} placeholder='Search word...' />
      <div>
         <Button src={random} title='Random' click={random_} />
         <Button src={lens} title='Search' click={research} />
      </div>
   </nav>;
}

export default Search;