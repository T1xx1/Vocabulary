import React, { useState } from 'react';

import Navbar from './navbar/_index';

export default function Main({ val, dispatch }) {
   let [search, setSearch] = useState(new URL(location.href).searchParams.get('q') ?? '');
   let [result, setResult] = useState(null);

   return (
      <Navbar
         val={val}
         search={search}
         setSearch={setSearch}
         setResult={setResult}
         dispatch={dispatch}
      />
   );
}
