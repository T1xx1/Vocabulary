import { json } from '../App';
import '../App.css';

function Result(word) {
     let results_node = document.querySelector('#results');
     let vocabulary = json.read();

     results_node.innerHTML = `Searching <b>${word}</b>...`;

     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(response => response.json()).then(result => {
          if (result.title) {
               throwErr(word);
          } else {
               let word = result[0];

               let tot = `<h2>${word.word} <small>${word.phonetic ?? ''}</small></h2>`;

               vocabulary.history[word.word] = '';

               json.write(vocabulary);

               word.meanings.forEach(meaning => {
                    tot += `<div id='type'><h3>${meaning.partOfSpeech}</h3>`;

                    if (meaning.definitions.length !== 0) {
                         tot += `<div><b>Definitions</b><ol>`;

                         meaning.definitions.forEach(definition => {
                              tot += `<li>${definition.definition}</li>`;
                         });

                         tot += `</ol></div>`;
                    }

                    if (meaning.synonyms.length !== 0) {
                         tot += `<div><b>Synonyms</b><ul>`;

                         meaning.synonyms.forEach(synonym => {
                              tot += `<li>${synonym}</li>`;
                         });

                         tot += '</ul></div>';
                    }

                    if (meaning.antonyms.length !== 0) {
                         tot += `<div><b>antonyms</b><ul>`;

                         meaning.antonyms.forEach(antonym => {
                              tot += `<li>${antonym}</li>`;
                         });

                         tot += '</ul></div>';
                    }

                    tot += `</div><hr>`;
               });

               if (word.sourceUrls.length !== 0) {
                    tot += `<b>Sources</b><ul>`;

                    word.sourceUrls.forEach(source => {
                         tot += `<li><a href='${source}'>${source}</a></li>`;
                    });

                    tot += '</ul>';
               }

               results_node.innerHTML = tot;
          }
     }).catch(() => throwErr(word));
}
function throwErr(word) {
     document.querySelector('#results').innerHTML = `<span id='error'>Can't find <b>${word}</b></span>`;
}

export default Result;