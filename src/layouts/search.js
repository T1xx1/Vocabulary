import { createRoot } from 'react-dom/client';
import Dictionary from '../services/dictionary';
import Google from '../components/google';
import random from '../assets/images/random.png';
import search from '../assets/images/search.png';
import Button from '../components/button';
import results from './results';
import Randomword from '../services/randomword';
import Snackbar from '../components/snakcbar';

function Search(props) {
   let keyboard = event => {
      if (event.key === 'Enter') research();
   };
   let load = () => research(props.search);
   let random_ = () => Randomword().then(result => research(result[0]));
   let research = (word = document.querySelector('input[type="search"]').value) => {
      let result = createRoot(document.querySelector('#result'));

      if (word && word !== '') {
         word = word.toLowerCase();

         document.querySelector('input[type="search"]').value = word;

         result.render(<span>Searching <b className='word'>${word}</b>...</span>);

         Dictionary(word).then(response => {
            let error = () => result.render(<>
               <div>Canno't find <span className='word'>{word}</span></div>
               <Google search={word} />
            </>);

            try {
               if (response.title) {
                  error();
               } else results(response);
            } catch {
               error();
            }
         });
      } else result.innerHTML = '';
   };

   return <nav onLoad={load}>
      <input type='search' autoFocus onKeyUp={keyboard} placeholder='Search word...' />
      <div>
         <Button src={random} title='Random' click={random_} />
         <Button src={search} title='Search' click={research} />
      </div>
   </nav>;
}

export default Search;