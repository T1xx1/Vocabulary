import storage from '../helpers/storage';
import settings from '../assets/images/settings.png';
import Dialog from '../components/dialog';
import Snackbar from '../components/snakcbar';

function Settings() {
   let settings_ = {
      deleteWords: () => {
         storage.update('saved', []);

         Snackbar('Words deleted');
      }
   }

   return Dialog('settings', settings, <>
      <h2>Files</h2>
      <div>
         <button>Download words</button>
         <button>Upload words</button>
      </div>
      <h2>Danger zone</h2>
      <div>
         <button>Clear history</button>
         <button onClick={settings_.deleteWords}>Delete saved words</button>
         <button>Reset</button>
      </div>
      <div></div>
   </>);
}

export default Settings;