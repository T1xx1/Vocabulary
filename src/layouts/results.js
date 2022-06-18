import { createRoot } from 'react-dom/client';
import Google from '../components/google';

function results(results) {
   let node = '';
   let result = createRoot(document.querySelector('#result'));

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

      node += '</ul><div>';
   }

   result.render(<>
      <div>
         <div>
            <h2 className='word'>{results.word}</h2>
            <span>{results.phonetic}</span>
         </div>
         <div></div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: node }}></div>
      <Google search={results.word} />
   </>);

}

export default results;