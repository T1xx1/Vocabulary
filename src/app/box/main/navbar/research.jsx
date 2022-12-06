import React from 'react';

import Word from '../../../../components/word';

import dictionary from '../../../../services/dictionary';

import result from '../result/_index';
import word from '../result/word';

export default function research(val, search, setSearch, setResult, dispatch) {
   dictionary(search).then(response => {
      try {
         if (response === undefined) throw null;
      } catch {
         return result(
            val,
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
      }

      dispatch({
         type: 'words history add',
         payload: [search],
      });

      return result(
         val,
         response,
         {
            word: response.word,
         },
         setSearch,
         setResult,
         dispatch,
         word(response, setSearch)
      );
   });
}
