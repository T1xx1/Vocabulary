import '../css/style.css';

import json from '../js/json';

import GitHub from './github';

function Settings() {
   let settings = {
      clearHistory: () => {
         json.update('history', []);

         alert('History cleaned')
      },
      deleteEverything: () => {
         json.init();

         alert('Deleted everything');
      },
      deleteLearnedWords: () => {
         json.update('learned', []);

         alert('All learned words deleted');
      }
   }

   function close() {
      document.querySelector('#settings').removeAttribute('open');
   }
   function open() {
      document.querySelector('#settings').setAttribute('open', '');
   }

   return <>
      <button><img src="https://img.icons8.com/material-sharp/48/000000/settings.png" className='big' alt='Settings' onClick={open} /></button>

      <dialog id='settings' className='box'>
         <header>
            <h2>Settings</h2>

            <button><img src="https://img.icons8.com/tiny-color/32/000000/experimental-delete-sign-tiny-color.png" className='small' alt='Close' onClick={close} /></button>
         </header>

         <div id='buttons'>
            <button className='delete' onClick={settings.clearHistory}>Clear history</button>
            <button className='delete' onClick={settings.deleteLearnedWords}>Delete all learned words</button>
            <button className='delete' onClick={settings.deleteEverything}>Delete everything</button>
         </div>

         <hr />

         <GitHub />
      </dialog>
   </>;
}

export default Settings;