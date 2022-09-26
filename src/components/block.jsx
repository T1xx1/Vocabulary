import React from 'react';

import List from './list';

export default function Block({ title, v, setSearch }) {
   return (
      <div className='block'>
         <b>{title}</b>
         <ul>
            <List v={v} setSearch={setSearch} />
         </ul>
      </div>
   );
}
