import info from './data/info.json';

export default function sbc(v, currentVersion, dispatch) {
   let version = (version, cb) => {
      let key = `${info.name} ${version}`;

      if (localStorage.getItem(key) !== null) {
         cb(JSON.parse(localStorage.getItem(key)));

         if (version < currentVersion) localStorage.removeItem(key);
      }
   };

   /*
   1.0
   {
      "words": [],
      "history": []
   }
   */

   // Deprecated
   version('2.0', old => {
      dispatch({
         type: 'words history add',
         payload: old.words.history,
      });

      dispatch({
         type: 'words saved add',
         payload: old.words.saved,
      });
   });

   /*
   {
      "words": {
         "history": [],
         "reported": [],
         "saved": []
      },
      "settings": {
         "defaultWord": "welcome"
      }
   }
   */

   version(3, () => {
      dispatch({
         type: 'edit',
         payload: state => {
            if (!state.words.reported) state.words.reported = [];

            return {
               ...state,
            };
         },
      });

      // Fix population 'reported' error in v1.4.1
      dispatch({
         type: 'edit',
         payload: state => {
            if (state.reported) delete state.reported;

            return {
               ...state,
            };
         },
      });
   });
}
