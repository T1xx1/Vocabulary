import React from 'react';

import Dialog from '../../../snippets/dialog';

import gear from '../../../assets/gear.png';
import info from '../../../data/info.json';

import Imgbutton from '../../../components/imgbutton';
import Report from '../../../components/report';

import DefaultWord from './defaultWord';
import Danger from './danger';

export default function Settings({ value, setSearch, dispatch }) {
   return (
      <Dialog
         id='settings'
         trigger={
            <Imgbutton
               src={gear}
               alt='Settings'
            />
         }>
         <DefaultWord value={value} dispatch={dispatch} />
         <div>
            <h2>Report a word</h2>
            <Report
               v={value.words.reported}
               setSearch={setSearch}
               dispatch={dispatch}
            />
         </div>
         <Danger />
         <span>
            {info.name} {info.version}
         </span>
      </Dialog>
   );
}
