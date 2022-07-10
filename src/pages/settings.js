import download from '../helpers/download';
import storage from '../helpers/storage';
import gear from '../assets/img/gear.png';
import Dialog from '../components/dialog';
import Snackbar from '../components/snackbar';
import Credits from './credits';
import Info from './info';
import { initial } from '../constants/variables';

function Settings() {
   let setting = {
      clearHistory: () => {
         window.confirm('Are you sure you want to clear the history') && storage.update('history', []);

         Snackbar('History cleared');
      },
      defaultWord: () => {
         let temp = storage.read();

         temp.settings.defaultWord = document.querySelector('#settings').querySelector('input').value;

         storage.write(temp);
      },
      deleteSavedWords: () => {
         window.confirm('Are you sure you want to delete all words') && storage.update('saved', []);

         Snackbar('Words deleted');
      },
      downloadWords: () => {
         download('Vocabulary words.txt', JSON.stringify(storage.read().saved));

         Snackbar('Words downloaded');
      },
      reset: () => {
         window.confirm('Are you sure you want to reset all?') && storage.write(initial);

         Snackbar('Resetted');
      },
      uploadWords: () => {
         let input = document.querySelector('input[type="file"]');
         
         let reader = new FileReader();

         reader.onload = () => {
            try {
               storage.update('saved', [...storage.read().saved, ...JSON.parse(reader.result)]);

               Snackbar('Words uploaded');
            } catch {
               alert('Invalid file format');
            }
         };

         reader.readAsText(input.files[0])
      }
   };

   return Dialog('settings', gear, <>
      <div>
         <span>Deafult word</span>
         <input type='text' placeholder='Word' onKeyUp={setting.defaultWord} />
      </div>
      <h2>Files</h2>
      <div>
         <button onClick={setting.downloadWords}>Download words</button>
         <span>Upload words</span>
         <input type="file" onChange={setting.uploadWords} />
      </div>
      <h2>Danger zone</h2>
      <div>
         <button onClick={setting.clearHistory}>Clear history</button>
         <button onClick={setting.deleteSavedWords}>Delete saved words</button>
         <button onClick={setting.reset}>Reset</button>
      </div>
      <hr />
      <Credits />
      <Info />
   </>, () => document.querySelector('#settings input').value = storage.read().settings.defaultWord);
}

export default Settings;