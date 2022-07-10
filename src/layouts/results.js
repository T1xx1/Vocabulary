import { createRoot } from 'react-dom/client';
import Button from '../components/button';
import Google from '../components/google';
import chain from '../assets/img/chain.png';
import info from '../constants/info';
import Snackbar from '../components/snackbar';
import storage from '../helpers/storage';

function results(results) {
   let node = '';
   let result = createRoot(document.querySelector('#result'));

   let copy = () => {
      navigator.clipboard.writeText(`${info.start_url}?search=${results.word}`);

      Snackbar('Link copied to clipboard');
   }
   let check = () => {
      for (let word of storage.read().saved) {console.log(word)
         if (word === results.word) {
            document.querySelector('input[type="checkbox"]').checked = true;

            return;
         }
      }
   }
   let save = () => {
      let saved = storage.read().saved;

      if (document.querySelector('input[type="checkbox"]').checked) {
         saved.push(results.word);

         Snackbar('Word saved');
      } else {
         for (let i = 0; i < saved.length; i++) {
            if (saved[i] === results.word) {
               saved.splice(i, 1);

               break
            }
         }

         Snackbar('Word unsaved');
      }

      storage.update('saved', saved);
   }

   results = results[0];
   results.meanings.forEach(meaning => {
      let block = (title, obj) => {
         if (Object.keys(obj).length !== 0) {
            let node = `<div><span>${title}</span><ul>`;

            for (let key in obj) node += `<li>${obj[key]}</li>`;

            node += `</ul></div>`;

            return node;
         }
      };

      node += `<div><h3>${meaning.partOfSpeech}</h3><ol><li><b>${meaning.definitions[0].definition}</b></li>`;

      meaning.definitions.slice(1, 5).forEach(definition => {
         node += `<li>${definition.definition}</li>`;
      });

      node += `</ol></div>`;
      node += block('Synonyms', meaning.synonyms);
      node += block('Antonyms', meaning.antonyms);
   });

   if (results.sourceUrls.length !== 0) {
      node += '<br><div><b>Sources</b><ul>';

      results.sourceUrls.forEach(source => node += `<li><a href='${source}'>${new URL(source).host}</a></li>`);

      node += '</ul></div>';
   }

   result.render(<>
      <div onLoad={check}>
         <div>
            <h2 className='word'>{results.word}</h2>
            <span>{results.phonetic}</span>
         </div>
         <div>
            <input type='checkbox' onClick={save} />
            <Button src={chain} title='Copy link' click={copy} />
         </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: node }}></div>
      <Google search={results.word} />
   </>);
}

export default results;