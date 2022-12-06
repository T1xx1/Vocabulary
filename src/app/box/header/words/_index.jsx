import React from 'react';

import { Dialog, ImgButton } from 'reactyio';

import List from '../../../../components/list';

import vocabulary from '../../../../assets/img/vocabulary.png';
import Bar from './bar';

export default function Words({ val, setSearch, dispatch }) {
   return (
      <Dialog
         id='words'
         title='Words'
         trigger={
            <ImgButton
               src={vocabulary}
               alt='Words'
            />
         }>
         <Bar
            val={val}
            setSearch={setSearch}
            dispatch={dispatch}
         />
         {val.length === 0 ? (
            <h2>No words saved</h2>
         ) : (
            <List
               val={val}
               setSearch={setSearch}
            />
         )}
      </Dialog>
   );
}
