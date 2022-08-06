import Archieve from './archieve';
import box from '../assets/img/box.png';
import Dialog from '../components/dialog';
import trash from '../assets/img/trash.png';
import book from '../assets/img/book.png';
import Word from '../components/word';
import All from './all';
import Snackbar from '../components/snackbar';

export default function Words({ value, setValue, vocabulary }) {
   return Dialog('words', book, <>
      {value.words.saved.length === 0 ? <>
         <Archieve words={value} vocabulary={vocabulary} />
         <h3>You haven't saved any word</h3>
      </> : <>
         <div>
            <input type='text' onKeyUp={() => {
               let input = document.querySelector('input[type="text"]');
               let ul = document.querySelector('#words>dialog>div>div:nth-child(2)');

               ul.childNodes.forEach(div => {
                  if (div.querySelector('.word').innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
                     div.removeAttribute('hidden');
                  } else div.setAttribute('hidden', '');
               });
            }} placeholder='Search in saved words...' />
            <h3 id='length'>{value.words.saved.length} saved words</h3>
            <Archieve words={value} vocabulary={vocabulary} />
            <All value={value} />
         </div>
         <div>
            {value.words.saved.sort().map(word => <div key={word}>
               <Word inner={word} />
               <div>
                  <img src={box} title='Archieve' onClick={e => {
                     e = e.target.parentNode.parentNode.parentNode;

                     e.parentNode.removeChild(e);

                     vocabulary.words.saved.archieve(e.querySelector('.word').innerHTML);

                     Snackbar('Word archived');
                  }} />
                  <img src={trash} title='Delete' onClick={e => {
                     e = e.target.parentNode.parentNode.parentNode;

                     e.parentNode.removeChild(e);

                     vocabulary.words.saved.remove(e.querySelector('.word').innerHTML);

                     Snackbar('Word removed');
                  }} />
               </div>
            </div>)}
         </div>
      </>}
   </>);
}