import React from 'react';

export default function CustomWord({ val, setSearch, dispatch }) {
   return (
      <div id='customWord'>
         <h2>Custom word</h2>
         <input
            type='text'
            onChange={e => {
               let word = e.target.value;

               dispatch({
                  type: 'settings wordAtOpening customWord',
                  payload: word,
               });

               setSearch(word);
            }}
            placeholder='Word...'
            value={val.customWord}
         />
      </div>
   );
}
