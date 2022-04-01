import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { json } from '../App';
import Results from './results';

function Nav() {
     let vocabulary = json.read();

     function history() {
          return Object.keys(vocabulary.history).reverse().map(word => <option key={word}>{word}</option>);
     }
     function research(event) {
          if (event.key === 'Enter') search();
     }
     function search() {
          let word = document.querySelector('input').value.toLowerCase();

          if (word) {
               Results(word);

               ReactDOM.render(
                    history(),
                    document.querySelector('#datalist')
               );
          } else document.querySelector('#results').innerHTML = '';
     }

     return (
          <nav>
               <input type='text' autoFocus list='datalist' onKeyUp={research} placeholder='Type your word here...' />

               <datalist id='datalist'>{history()}</datalist>

               <img src='https://img.icons8.com/ios-glyphs/30/000000/search--v1.png' alt='Search icon' onClick={search} />
          </nav>
     );
}

export default Nav;