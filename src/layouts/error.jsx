import React from 'react';

import Bar from './bar';

export default function Error({ value, dispatch, search, setSearch, children }) {
   return (
      <>
         <Bar value={value} dispatch={dispatch} search={search} setSearch={setSearch} />
         <div className='error'>{children}</div>
      </>
   );
}
