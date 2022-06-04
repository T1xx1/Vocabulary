import ReactDOM from 'react-dom/client';
import archieve from '../../assets/images/archieve.png';
import trash from '../../assets/images/trash.png';
import storage from '../../helpers/storage';
import Word from '../../components/word';
import Button from '../../components/button';
import Dialog from '../../components/dialog';

function Archieve() {
   return Dialog('Archieve', archieve, '', {
      beginning: () => {
         let archieved = storage.read().archieved;

         let node;

         function del(event) {
            event = event.target.parentNode.parentNode;
            event.parentNode.removeChild(event);

            archieved.splice(archieved.indexOf(event.querySelector('.word').innerHTML), 1);

            storage.update('archieved', archieved);

            //Snackbar
         }

         if (archieved.length === 0) {
            node = <h3>You haven't archieved any word</h3>;
         } else node = <div>
            <h3 id='length'>{archieved.length} archieved words</h3>
            <ul>
               {archieved.sort().map(word => <div key={word} flex='' highlight=''>
                  <Word inner={word} />
                  <Button src={trash} title='Delete' click={del} />
               </div>)}
            </ul>
         </div>;

         ReactDOM.createRoot(document.querySelector('#Archieve>div')).render(node);
      }
   });
}

export default Archieve;