import React from 'react';

import All from './all/_index';
import Download from './download';
import Upload from './upload';

export default function Bar({ val, setSearch, dispatch }) {
   return (
      <div id='bar'>
         <input
            type='text'
            onKeyUp={e => {
               e.target.parentNode.nextElementSibling.childNodes.forEach(word => {
                  if (word.innerHTML.includes(e.target.value.toLowerCase())) {
                     word.removeAttribute('hidden');
                  } else word.setAttribute('hidden', '');
               });
            }}
            placeholder={`Search among ${val.length} saved words...`}
         />
         <div>
            <All
               val={val}
               setSearch={setSearch}
            />
            <Download val={val} />
            <Upload dispatch={dispatch} />
         </div>
      </div>
   );
}
