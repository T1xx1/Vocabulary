import ReactDOM from 'react-dom';

import '../css/style.css';

import json from '../js/json';

import Learn from './learn';
import Share from './share';

function Result(word) {
     let results = '';

     let results_node = document.querySelector('#results');

     function error() {
          ReactDOM.render(
               <span className='error'>Can't find <b className='word'>{word}</b></span>,
               results_node
          );
     }

     ReactDOM.render(
          <span>Searching <b className='word'>{word}</b>...</span>,
          results_node
     );

     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(response => response.json()).then(result => {
          if (result.title) {
               error();
          } else {
               result = result[0];

               result.meanings.forEach(meaning => {
                    function block(key) {
                         if (meaning[key].length !== 0) {
                              results += `<div><b>${key.charAt(0).toUpperCase() + key.substring(1)}</b><ul>`;

                              meaning[key].map(subkey => results += `<li class='word'>${subkey}</li>`);

                              results += `</ul></div>`;
                         }
                    }

                    results += `<h3 class='partOfSpeech'>${meaning.partOfSpeech}</h3><div><b>Definitions</b><div>`;

                    meaning.definitions.forEach(definition => {
                         results += `<span>${definition.definition}</span><br>`;
                    });

                    results += '</div></div>';

                    block('synonyms');
                    block('antonyms');
               });

               if (result.sourceUrls.length !== 0) {
                    results += '<br><hr><div><b>Sources</b><ul>';

                    result.sourceUrls.forEach(source => results += `<li><a href='${source}'>${source}</a></li>`);

                    results += '</ul><div>';
               }

               ReactDOM.render(
                    <>
                         <header>
                              <h2>
                                   <span className='word'>{result.word}</span>
                                   <small>{result.phonetic}</small>
                              </h2>

                              <nav>
                                   <Learn />
                                   <Share word={result.word} />
                              </nav>
                         </header>

                         <div dangerouslySetInnerHTML={{ __html: results }}></div>
                    </>,
                    results_node
               );

               json.push('history', result.word);
          }
     }).catch(() => error());
}

export default Result;