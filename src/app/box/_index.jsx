import React from 'react';

import Header from './header/_index';
import Main from './main/_index';

export default function Box({ val, dispatch }) {
   return (
      <div id='box'>
         <Header
            val={val}
            dispatch={dispatch}
         />
         <Main
            val={val}
            dispatch={dispatch}
         />
      </div>
   );
}
