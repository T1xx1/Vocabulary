import React, { useEffect, useState, useReducer } from 'react';

import Signature from './snippets/signature';

import reducer from './reducer';
import sbc from './sbc';

import Header from './layouts/header';
import Search from './layouts/navbar';
import Up from './layouts/up';

import storage from './storage';
import url from './url';

export default function App() {
   const [value, dispatch] = useReducer(reducer, storage.value);

   useEffect(() => {
      sbc(value.words, 3, dispatch);

      dispatch({
         type: 'words history new',
      });

      url(value.settings, setSearch, dispatch);
   }, []);

   useEffect(() => {
      storage.value = value;
      storage.write();
   }, [value]);

   let [search, setSearch] = useState('');
   let [result, setResult] = useState(<></>);

   return (
      <>
         <Header
            value={value}
            setSearch={setSearch}
            dispatch={dispatch}
         />
         <Search
            v={value.words}
            search={search}
            setSearch={setSearch}
            setResult={setResult}
            dispatch={dispatch}
         />
         <div id='result'>{result}</div>
         <Signature />
         <Up />
         
      </>
   );
}
