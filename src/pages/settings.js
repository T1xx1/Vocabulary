import Dialog from '../snippets/dialog';

import Credits from './credits';
import download from '../utils/download';
import gear from '../assets/img/gear.png';
import Snackbar from '../components/snackbar';

export default function Settings({ vocabulary, value, setValue }) {
   let setting = {
      backup: () => {
         window.localStorage.setItem('backup', JSON.stringify(value));

         Snackbar('Backup created');
      },
      defaultWord: () => {
         if (!vocabulary.value.settings.defaultWord) vocabulary.settings = {};

         vocabulary.settings.defaultWord = document.querySelector('#settings').querySelector('input').value;
         setValue(vocabulary.value);
      },
      deleteBackup: () => {
         window.confirm('Are you sure you want to delete the backup') && window.localStorage.removeItem('backup');

         Snackbar('Backup deleted');
      },
      deleteSavedWords: () => {
         if (window.confirm('Are you sure you want to delete all words')) vocabulary.value.words.saved = [];

         setValue(vocabulary.value);

         Snackbar('Words deleted');
      },
      downloadWords: () => {
         download('Vocabulary words.txt', JSON.stringify(vocabulary.value.words.saved));

         Snackbar('Words downloaded');
      },
      /*reset: () => {
         window.confirm('Are you sure you want to reset all?') && 

         Snackbar('Resetted');
      },*/
      restoreBackup: () => {
         window.confirm('Are you sure you want to restore the backup?') && vocabulary.write(JSON.parse(window.localStorage.getItem('backup')));

         Snackbar('Restored');
      },
      uploadWords: () => {
         let input = document.querySelector('input[type="file"]');

         let reader = new FileReader();

         reader.readAsText(input.files[0]);

         reader.onload = () => {
            try {
               vocabulary.value.words.saved = [...vocabulary.value.words.saved, ...JSON.parse(reader.result)];

               Snackbar('Words uploaded');
            } catch {
               alert('Invalid file format');
            }
         };
      }
   };

   return <Dialog id='settings' icon={gear}>
      <div>
         <span>Deafult word</span>
         <input type='text' placeholder='Word' onKeyUp={setting.defaultWord} defaultValue={value.settings.defaultWord} />
      </div>
      <h2>Backup</h2>
      <div>
         <button onClick={setting.backup}>Backup</button>
         <button onClick={setting.restoreBackup}>Restore backup</button>
         <button onClick={setting.deleteBackup}>Delete backup</button>
      </div>
      <h2>Files</h2>
      <div>
         <button onClick={setting.downloadWords}>Download words</button>
      </div>
      <div>
         <span>Upload words</span>
         <input type='file' onChange={setting.uploadWords} />
      </div>
      <h2>Danger zone</h2>
      <div>
         <button onClick={setting.clearHistory}>Clear history</button>
         <button onClick={setting.deleteSavedWords}>Delete saved words</button>
         <button onClick={setting.reset}>Reset</button>
      </div>
      <hr />
      <div>
         <Credits />
      </div>
   </Dialog>;
}