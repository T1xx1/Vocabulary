import React from 'react';

import Word from '../../components/word';

import dictionary from '../../services/dictionary';

import result from '../result';
import word from '../result/word';

export default function research(v, search, setSearch, setResult, dispatch) {
   return dictionary(search)
      .then(response =>
         result(
            v,
            response,
            {
               word: response.word,
            },
            setSearch,
            setResult,
            dispatch,
            word(response, setSearch)
         )
      )
      .catch(() => {
         result(
            v,
            {
               word: search,
            },
            {
               word: search,
               description: 404,
            },
            setSearch,
            setResult,
            dispatch,
            <>
               <span>Word </span>
               <Word setSearch={setSearch}>{search}</Word>
               <span> not found</span>
            </>
         );
      });
}
