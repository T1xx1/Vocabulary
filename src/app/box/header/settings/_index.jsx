import React from 'react';

import { Dialog, ImgButton } from 'reactyio';

import gear from './_icon.png';

import Danger from './danger';
import Info from './info';
import Report from './report';
import WordAtOpening from './wordAtOpening/_index';

export default function Settings({ val, setSearch, dispatch }) {
   return (
      <Dialog
         id='settings'
         title='Settings'
         trigger={
            <ImgButton
               src={gear}
               alt='Settings'
            />
         }>
         <WordAtOpening
            val={val.settings.wordAtOpening}
            setSearch={setSearch}
            dispatch={dispatch}
         />
         <Report
            val={val}
            setSearch={setSearch}
            dispatch={dispatch}
         />
         <Danger dispatch={dispatch} />
         <Info />
      </Dialog>
   );
}
