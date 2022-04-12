import ReactDOM from 'react-dom';

import '../css/style.css';

import json from '../js/json';

import Results from './results';

function Input(props) {
     function datalist() {
          ReactDOM.render(
               <datalist id='datalist'>{[...new Set(json.read().history)].map(word => <option key={word}>{word}</option>)}</datalist>,
               document.querySelector('#input>div')
          );
     }
     function research(event) {
          if (event.key === 'Enter') search();
     }
     function search() {
          let word = document.querySelector('input').value.toLowerCase();

          if (word) {
               Results(word);
          } else document.querySelector('#results').innerHTML = '';
     }

     if (props.word) {
          setTimeout(() => {
               document.querySelector('input').value = props.word;
               Results(props.word);
          }, 1);
     }

     return <div id='input' onClick={datalist}>
          <input type='text' autoFocus list='datalist' onKeyUp={research} placeholder='Type your word here...' />

          <button><img src='https://img.icons8.com/ios-glyphs/30/000000/search--v1.png' className='small' alt='Search' onClick={search} /></button>
          
          <div></div>
     </div>;
}

export default Input;