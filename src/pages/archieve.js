import ReactDOM from 'react-dom/client';

import box from '../assets/img/box.png';
import Dialog from '../components/dialog';
import Word from '../components/word';
import trash from '../assets/img/trash.png';
import Snackbar from '../components/snackbar';

export default function Archieve({ words, vocabulary }) {
   return Dialog('archieve', box, <></>, () => {
      let node;

      let del = e => {
         e = e.target.parentNode.parentNode.parentNode;

         e.parentNode.removeChild(e);

         vocabulary.words.remove(e.querySelector('.word').innerHTML);

         Snackbar('Word removed');
      };

      if (words.archieved.length === 0) {
         node = <h3>You haven't archieved any word</h3>;
      } else node = <div>
         <h3 id='length'>{words.archieved.length} archieved words</h3>
         <div>
            {words.archieved.sort().map(word => <div key={word}>
               <Word inner={word} />
               <img src={trash} alt='Delete' onClick={del} />
            </div>)}
         </div>
      </div>;

      ReactDOM.createRoot(document.querySelector('#archieve>dialog>div')).render(node);
   });
}