import initial from '../data/initial.json';

import randomWord from '../services/randomword';

import localstorage from './localstorage';

export default (state, { payload, type }) => {
   type = type.split(' ');

   switch (type[0]) {
      case 'saved':
         switch (type[1]) {
            case 'history':
               switch (type[2]) {
                  case 'add':
                     state.saved.history.at(-1).push(...payload);

                     return state;
                  case 'del':
                     state.saved.history = initial.words.history;

                     return state;
                  case 'new':
                     state.saved.history = [...state.saved.history, []];

                     return state;
               }
               break;
            case 'words':
               switch (type[2]) {
                  case 'add':
                     state.saved.words = [...new Set([...state.saved.words, ...payload])];

                     return state;
                  case 'rm':
                     state.saved.words = state.saved.words.filter(w => payload !== w);

                     return state;
               }
               break;
            case 'reported':
               switch (type[2]) {
                  case 'add':
                     state.saved.reports = [...new Set([...state.saved.reports, ...payload])];

                     return state;
                  case 'del':
                     state.saved.reports = initial.saved.reports;

                     return state;
               }
               break;
         }
      case 'settings':
         switch (type[1]) {
            case 'wordAtOpening':
               switch (type[2]) {
                  case '_default':
                     state.settings.wordAtOpening._default = payload;

                     return state;
                  case '_type':
                     state.settings.wordAtOpening._type = payload;
                     console.log(payload);
                     return state;
                  case 'customWord':
                     state.settings.wordAtOpening.customWord = payload;

                     return state;
                  case 'wordOfTheDay':
                     state.settings.wordAtOpening.wordOfTheDay.date = new Date().toISOString().split('T')[0];

                     randomWord().then(w => (state.settings.wordAtOpening.wordOfTheDay.word = w));

                     return state;
               }

               break;
            case 'del':
               localstorage.del();

               break;

            case 'reset':
               return initial;
         }

         break;
      default:
         return state;
   }
};
