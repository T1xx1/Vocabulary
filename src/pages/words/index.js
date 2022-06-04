import ReactDOM from 'react-dom/client';
import archieve from '../../assets/images/archieve.png';
import trash from '../../assets/images/trash.png';
import vocabulary from '../../assets/images/vocabulary.png';
import storage from '../../helpers/storage';
import Archieve from '../archieve';
import Word from '../../components/word';
import Button from '../../components/button';
import Dialog from '../../components/dialog';

function Words() {
   return Dialog('Words', vocabulary, '', {
      during: () => {
         let saved = storage.read().saved;

         let node;

         function arch(event) {
            event = event.target.parentNode.parentNode;
            event.parentNode.removeChild(event);

            let word = event.querySelector('.word').innerHTML;

            saved.splice(saved.indexOf(word), 1);

            storage.update('saved', saved);
            storage.update('archieved', [...storage.read().archieved, word]);

            //Snackbar
         }
         function del(event) {
            event = event.target.parentNode.parentNode;
            event.parentNode.removeChild(event);

            saved.splice(saved.indexOf(event.querySelector('.word').innerHTML), 1);

            storage.update('saved', saved);

            //Snackbar
         }

         if (saved.length === 0) {
            node = <h3>You haven't saved any word</h3>;
         } else node = <div>
            <Archieve />
            <h3 id='length'>{saved.length} saved words</h3>
            <ul>
               {saved.sort().map(word => <div key={word} flex='' highlight=''>
                  <Word inner={word} />
                  <div>
                     <Button src={archieve} title='Archieve' click={arch} />
                     <Button src={trash} title='Delete' click={del} />
                  </div>
               </div>)}
            </ul>
         </div>;

         ReactDOM.createRoot(document.querySelector('#Words>div')).render(node);
      }
   });
}

export default Words;