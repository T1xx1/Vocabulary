import info from './data/info.json';

export default function sbc(v, currentVersion, dispatch) {
   let version = (version, cb) => {
      let key = `${info.name} ${version}`;

      if (localStorage.getItem(key) !== null) {
         cb(JSON.parse(localStorage.getItem(key)));

         if (version < currentVersion) localStorage.removeItem(key);
      }
   };

   // Deprecated
   version('2.0', old => {
      console.log(old);

      dispatch({
         type: 'words history add',
         payload: old.words.history,
      });

      dispatch({
         type: 'words reported add',
         payload: old.words.saved,
      });

      dispatch({
         type: 'words saved add',
         payload: old.words.saved,
      });
   });

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
   });
}
