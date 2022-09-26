import React from 'react';

import Report from '../../components/report';

import Bar from './bar';

export default function result(v, response, defaultV, setSearch, setResult, dispatch, children) {
   setResult(
      <>
         <Bar
            v={v}
            response={response}
            dispatch={dispatch}
         />
         <div id='word'>{children}</div>
         <Report
            v={v}
            defaultV={defaultV}
            setSearch={setSearch}
            dispatch={dispatch}
         />
      </>
   );
}
