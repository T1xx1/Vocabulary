import React from 'react';

import Report2 from '../../../../components/report';

export default function Report({ val, setSearch, dispatch }) {
   return (
      <div>
         <h2>Report a word</h2>
         <Report2
            val={val.saved.reports}
            setSearch={setSearch}
            dispatch={dispatch}
         />
      </div>
   );
}
