import '../css/style.css';

import info from './../constants/info';
import json from '../js/json';

import GitHub from './github';

function Settings() {
   let settings = {
      backup: () => {
         let backup = {
            version: info.version,
            data: json.read()
         };
         window.localStorage.setItem('backup', JSON.stringify(backup));

         alert('Backup created');
      },
      clearHistory: () => {
         json.update('history', []);

         alert('History cleaned');
      },
      deleteEverything: () => {
         json.init();

         alert('Deleted everything');
      },
      deleteLearnedWords: () => {
         json.update('learned', []);

         alert('All learned words deleted');
      },
      downloadWords: () => {
         let a = document.createElement('a');
         let words = json.read();

         let blob = new Blob([JSON.stringify(words)], {
            type: 'application/json'
         });

         let url = URL.createObjectURL(blob);

         a.download = 'words.json';
         a.href = url;
         a.click();

         alert('Words downloaded');
      },
      restoreBackup: () => {
         let backup = JSON.parse(window.localStorage.getItem('backup'));

         if (info.version === backup.version) {
            json.write(backup.data);

            alert('Backup restored');
         } else alert('Backup is outdated');
      }
   };

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
            <button onClick={settings.downloadWords}>Download words</button>
            <hr />
            <h3>Backup</h3>
            <button onClick={settings.backup}>Backup</button>
            <button onClick={settings.restoreBackup}>Restore backup</button>
            <hr />
            <h3>Danger zone</h3>
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