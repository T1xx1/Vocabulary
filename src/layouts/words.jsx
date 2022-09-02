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
                           document.querySelector('#words #list').childNodes.forEach(div => {
                              if (div.querySelector('.word').innerHTML.toLowerCase().includes(e.target.value.toLowerCase())) {
                                 div.removeAttribute('hidden');
                              } else div.setAttribute('hidden', '');
                           });
                        }}
                        placeholder='Search in saved words...'
                     />
                     <span id='length'>{value.words.saved.length} words saved</span>
                  </div>
                  <All value={value} setSearch={setSearch} />
               </div>
               <div id='list'>
                  {value.words.saved.sort().map(word => (
                     <div key={word}>
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
                        />
                     </div>
                  ))}
               </div>
            </>
         )}
      </Dialog>
   );
}
