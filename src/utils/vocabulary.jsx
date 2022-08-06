import info from './data/info.json';

import Localvocabulary from '../snippets/localvocabulary';

export default class Vocabulary extends Localvocabulary {
   constructor() {
      super(info.name, '2.0', {
         words: {
            archieved: [],
            history: [],
            saved: []
         },
         settings: {}
      });
   }

   arch(word) {
      this.rm(word);
      this.value.words.archieved = [...new Set([...this.value.words.archieved, word])];
   }
   dearch(word) {
      this.value.words.archieved.filter(w => w !== word);
      this.save(word);
   }
   isSaved(word) {
      return this.value.words.saved.includes(word) ? true : false;
   }
   save(word) {
      this.value.words.saved = [...new Set([...this.value.words.saved, word])];
   }
   rm(word) {
      this.value.words.saved.filter(w => w !== word);
   }
}