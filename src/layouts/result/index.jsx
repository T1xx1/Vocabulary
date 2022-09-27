import React from 'react';

import Report from '../../components/report';

import Bar from './bar';

export default function result(v, response, defaultV, setSearch, setResult, dispatch, children) {
   setResult(
      <>
         <Bar
            v={v.saved}
            response={response}
            dispatch={dispatch}
         />
         <div id='word'>{children}</div>
         <Report
            v={v.reported}
            defaultV={defaultV}
            setSearch={setSearch}
            dispatch={dispatch}
         />
      </>
   );
}
