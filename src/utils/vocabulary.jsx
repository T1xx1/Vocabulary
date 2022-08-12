import info from '../data/info.json';

import LocalStorage from '../snippets/localstorage';

export default class Vocabulary extends LocalStorage {
   constructor() {
      super(info.name, '2.0', {
         words: {
            history: [],
            saved: []
         },
         settings: {}
      });

      if (this.value === null) this.init();
   }


   isSaved(word) {
      return this.value.words.saved.includes(word) ? true : false;
   }
   save(word) {
      this.value.words.saved = [...new Set([...this.value.words.saved, word])];
   }
   rm(word) {
      this.value.words.saved = this.value.words.saved.filter(w => word !== w);
   }
}