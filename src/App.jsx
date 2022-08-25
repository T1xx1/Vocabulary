import React from 'react';
import { useEffect, useState, useReducer } from 'react';

import LocalStorage from './snippets/localstorage';

import initial from './data/initial.json';

import Header from './layouts/header';
import Search from './layouts/search';

export default function App() {
   const storage = new LocalStorage('Vocabulary', '2.0', initial);

   const [value, dispatch] = useReducer((state, action) => {
      switch (action.type) {
         case 'clear':
            return {
               ...state,
               words: {
                  ...state.words,
                  history: [],
               },
            };
         case 'edit':
            return {
               ...state,
               ...action.payload,
            };
         case 'history':
            return {
               ...state,
               words: {
                  ...state.words,
                  history: [...new Set([...state.words.history, ...action.payload])],
               },
            };
         case 'reset':
            return initial;
         case 'rm':
            return {
               ...state,
               words: {
                  ...state.words,
                  saved: state.words.saved.filter(w => action.payload !== w),
               },
            };
         case 'save':
            return {
               ...state,
               words: {
                  ...state.words,
                  saved: [...new Set([...state.words.saved, ...action.payload])],
               },
            };
         default:
            return value;
      }
   }, storage.value);

   useEffect(() => {
      storage.value = value;
      storage.write();
   }, [value]);

   let [search, setSearch] = useState('');
   let [results, setResults] = useState(<></>);

   useEffect(() => {
      if (localStorage.getItem('Vocabulary') !== null) {
         let old = JSON.parse(localStorage.getItem('Vocabulary'));

         dispatch({
            type: 'save',
            payload: old.learned,
         });

         dispatch({
            type: 'history',
            payload: old.history,
         });

         localStorage.removeItem('Vocabulary');
      }

      let url = new URL(window.location.href);

      setSearch(value.settings.defaultWord || url.searchParams.get('q') || '');

      let importUrl = url.searchParams.get('import');

      if (importUrl) {
         dispatch({
            type: 'save',
            payload: importUrl.split(','),
         });
      }
   }, []);

   return (
      <>
         <Header value={value} dispatch={dispatch} setSearch={setSearch} />
         <Search value={value} dispatch={dispatch} search={search} setSearch={setSearch} setResults={setResults} />
         <div id='results'>{results}</div>
      </>
   );
}
