import search from '../assets/images/search.png';
import Button from '../components/button';

function Search() {
   let keyboard = event => {
      if (event.key === 'Enter') research();
   }
   let research = () => {
      let word = document.querySelector('input[type="text"]').value.toLowerCase();

      if (word) {
         console.log(word)
      } else document.querySelector('#results').innerHTML = '';
   }

   return <nav>
      <input type='text' autoFocus onKeyUp={keyboard} placeholder='Search word...' />
      <Button src={search} title='Cerca' click={research} />
   </nav>
}

export default Search;