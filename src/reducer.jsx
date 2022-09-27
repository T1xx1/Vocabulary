import initial from './data/initial.json';

import storage from './storage';

export default (state, action) => {
   try {
      action.type = action.type.split(' ');
   } catch {}

   switch (action.type[0]) {
      case 'edit':
         return action.payload(state);
      case 'words':
         switch (action.type[1]) {
            case 'history':
               switch (action.type[2]) {
                  case 'add':
                     state.words.history[state.words.history.length - 1].push(...action.payload);

                     return {
                        ...state,
                     };
                  case 'del':
                     return {
                        ...state,
                        words: {
                           ...state.words,
                           history: initial.words.history,
                        },
                     };
                  case 'new':
                     return {
                        ...state,
                        words: {
                           ...state.words,
                           history: [...state.words.history, []],
                        },
                     };
               }
               break;
            case 'saved':
               switch (action.type[2]) {
                  case 'add':
                     return {
                        ...state,
                        words: {
                           ...state.words,
                           saved: [...new Set([...state.words.saved, ...action.payload])],
                        },
                     };
                  case 'rm':
                     return {
                        ...state,
                        words: {
                           ...state.words,
                           saved: state.words.saved.filter(w => action.payload !== w),
                        },
                     };
               }
               break;
            case 'reported':
               switch (action.type[2]) {
                  case 'add':
                     return {
                        ...state,
                        words: {
                           ...state.words,
                           reported: [...new Set([...state.words.reported, ...action.payload])],
                        },
                     };
                  case 'del':
                     return {
                        ...state,
                        reported: initial.words.reported,
                     };
               }
               break;
         }
         break;
      case 'settings':
         switch (action.type[1]) {
            case 'close':
               storage.del();

               break;
            case 'reset':
               return initial;
         }
         break;
      default:
         return state;

      /* case 'clear':
         
      case 'edit':
         return {
            ...state,
            ...action.payload,
         };
      case 'history':
         return {
            ...state,
            words: {
               ...state.words,
               history: [...new Set([...state.words.history, ...action.payload])],
            },
         };

      case 'report':
         return {
            ...state,
            words: {
               ...state.words,
               reported: [...new Set([...state.words.reported, ...action.payload])],
            },
         };
      case 'save':
          */
   }
};
