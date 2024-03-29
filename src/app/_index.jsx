import React, { useEffect, useReducer } from 'react';

import { Sign } from 'reactyio';

import meta from '../data/meta';

import localstorage from './localstorage';
import reducer from './reducer';

import Box from './box/_index';
import GoUp from './goup/_index';

export default function App() {
   const [value, dispatch] = useReducer(reducer, localstorage.value);

   useEffect(() => localstorage.write(value), [value]);
   useEffect(() => {
      let i = new URL(location.href).searchParams.get('i');

      if (i)
         dispatch({
            type: 'saved words add',
            payload: i.split(','),
         });
   }, []);

   return (
      <>
         <Box
            val={value}
            dispatch={dispatch}
         />
         <GoUp />
         <Sign user={meta.author} />
      </>
   );
}
