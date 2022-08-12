import Dialog from '../snippets/dialog';
import trash from '../assets/img/trash.png';
import book from '../assets/img/book.png';
import Word from '../components/word';
import All from './all';
import Snackbar from '../components/snackbar';

export default function Words({ value, vocabulary, update }) {
   return <Dialog
      id='words'
      icon={book}
      inner={<>
         {value.words.saved.length === 0 ? <>
            <h3>No words saved</h3>
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
               }} placeholder='Search saved words...' />
               <h3 id='length'>{value.words.saved.length} saved words</h3>
               <All value={value} />
            </div>
            <div>{value.words.saved.sort().map(word => <div key={word}>
               <Word inner={word} />
               <img src={trash} title='Delete' onClick={e => {
                  e = e.target.parentNode.parentNode.parentNode;

                  vocabulary.rm(e.querySelector('.word').innerHTML);

                  update();

                  Snackbar('Word removed');
               }} />
            </div>)}</div>
         </>}
      </>}
   />;
}