import { createRoot } from 'react-dom/client';
import box from '../assets/img/box.png';
import trash from '../assets/img/trash.png';
import vocabulary from '../assets/img/vocabulary.png';
import storage from '../helpers/storage';
import Archieve from './archieve';
import Word from '../components/word';
import Button from '../components/button';
import Dialog from '../components/dialog';

function Words() {
   return Dialog('words', vocabulary, <></>, () => { }, () => {
      let node;
      let saved = storage.read().saved;

      let arch = event => {
         event = event.target.parentNode.parentNode;
         event.parentNode.removeChild(event);

         let word = event.querySelector('.word').innerHTML;

         saved.splice(saved.indexOf(word), 1);

         storage.update('saved', saved);
         storage.update('archieved', [...storage.read().archieved, word]);

         //Snackbar
      }
      let del = event => {
         event = event.target.parentNode.parentNode;
         event.parentNode.removeChild(event);

         saved.splice(saved.indexOf(event.querySelector('.word').innerHTML), 1);

         storage.update('saved', saved);

         //Snackbar
      }
      let search = () => {
         let input = document.querySelector('input[type="text"]');
         let ul = document.querySelector('ul');

         ul.childNodes.forEach(div => {
            if (div.querySelector('.word').innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
               div.removeAttribute('hidden');
            } else div.setAttribute('hidden', '');
         });
      };

      if (saved.length === 0) {
         node = <>
            <Archieve />
            <h3>You haven't saved any word</h3>
         </>;
      } else node = <>
         <div>
            <input type='text' onKeyUp={search} placeholder='Word' />
            <Archieve />
            <h3 id='length'>{saved.length} saved words</h3>
         </div>
         <ul>
            {saved.sort().map(word => <div key={word}>
               <Word inner={word} />
               <div>
                  <Button src={box} title='Archieve' click={arch} />
                  <Button src={trash} title='Delete' click={del} />
               </div>
            </div>)}
         </ul>
      </>;

      createRoot(document.querySelector('#words>dialog>div')).render(node);
   });
}

export default Words;