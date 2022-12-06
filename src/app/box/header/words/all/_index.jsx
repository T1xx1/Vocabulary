import React from 'react';

import { Dialog, ImgButton } from 'reactyio';

import icon from './grid.svg';

import List from './list';
import Meter from './meter';

export default function All({ val, setSearch }) {
   return (
      <Dialog
         id='all'
         title='All'
         trigger={
            <ImgButton
               src={icon}
               id='all'
            />
         }>
         <Meter val={val.length} />
         <List
            val={val}
            setSearch={setSearch}
         />
      </Dialog>
   );
}
