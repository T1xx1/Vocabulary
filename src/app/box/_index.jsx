import React, { useState } from 'react';

import Header from './header/_index';
import Main from './main/_index';

export default function Box({ val, dispatch }) {
   let [search, setSearch] = useState(null);

   return (
      <div id='box'>
         <Header
            val={val}
            setSearch={setSearch}
            dispatch={dispatch}
         />
         <Main
            val={val}
            setSearch={setSearch}
            dispatch={dispatch}
         />
      </div>
   );
}
