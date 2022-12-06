import React from 'react';

import Report from '../../../../components/report';

import Bar from './bar/_index';

export default function result(val, response, report, setSearch, setResult, dispatch, children) {
   setResult(
      <>
         <Bar
            val={val.words}
            response={response}
            dispatch={dispatch}
         />
         <div>{children}</div>
         <Report
            val={val.reports}
            defaultV={report}
            setSearch={setSearch}
            dispatch={dispatch}
         />
      </>
   );
}
