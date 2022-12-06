import React from 'react';

import List from './list';

export default function Block({ title, val, setSearch }) {
   return (
      <div className='block'>
         <b>{title}</b>
         <ul>
            <List val={v} setSearch={setSearch} />
         </ul>
      </div>
   );
}
