import { utils } from 'reactyio';

import info from '../data/meta.json';
import initial from '../data/initial.json';

export default new utils.LocalStorage(info.name, 4, initial, upgrade => {
   upgrade(3, state => ({
      saved: {
         history: state.words.history,
         reports: state.words.reports,
         words: state.words.saved,
      },
      settings: {
         ...state.settings,
         wordAtOpening: {
            _default: state.settings.defaultWord,
            _type: 'customWord',
            customWord: state.settings.defaultWord,
            wordOfTheDay: {
               date: '1970-01-01',
               word: 'welcome',
            },
         },
      },
   }));
});

/*

4
{
   "saved": {
      "history": [[]],
      "words": [],
      "reports": []
   },
   "settings": {
      "wordAtOpening": {
         "_default": "welcome",
         "_type": "customWord",
         "customWord": "welcome",
         "wordOfTheDay": {
            "date": "1970-01-01",
            "word": "welcome"
         }
      }
   }
}

3
{
   "words": {
      "history": [[]],
      "reported": [],
      "saved": []
   },
   "settings": {
      "defaultWord": "welcome"
   }
}

2.0
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

1.0
{
   "words": [],
   "history": []
}

*/
