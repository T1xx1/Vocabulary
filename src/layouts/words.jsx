import React from 'react';

import Dialog from '../snippets/dialog';

import book from '../assets/book.png';
import trash from '../assets/trash.png';

import Snackbar from '../components/snackbar';
import Word from '../components/word';
import All from '../layouts/all';

export default function Words({ value, dispatch, setSearch }) {
   return (
      <Dialog id='words' icon={book}>
         {value.words.saved.length === 0 ? (
            <h3>No words saved</h3>
         ) : (
            <>
               <div>
                  <div>
                     <input
                        type='text'
                        onKeyUp={e => {
                           document.querySelector('#words ul').childNodes.forEach(li => {
                              if (li.querySelector('.word').innerHTML.toLowerCase().includes(e.target.value.toLowerCase())) {
                                 li.removeAttribute('hidden');
                              } else li.setAttribute('hidden', '');
                           });
                        }}
                        placeholder='Search in saved words...'
                     />
                     <span id='length'>{value.words.saved.length} words saved</span>
                  </div>
                  <All value={value} setSearch={setSearch} />
               </div>
               <ul>
                  {value.words.saved.sort().map(word => (
                     <li key={word}>
                        <Word setSearch={setSearch}>{word}</Word>
                        <img
                           src={trash}
                           alt='Delete'
                           onClick={e => {
                              dispatch({
                                 type: 'rm',
                                 payload: e.target.previousElementSibling.innerHTML,
                              });

                              Snackbar('Word removed');
                           }}
                           title='Delete'
                        />
                     </li>
                  ))}
               </ul>
            </>
         )}
      </Dialog>
   );
}
