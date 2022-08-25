import api from '../data/api.json';

export default async function Dictionary(word) {
   return await fetch(`${api.dictionary}/api/v2/entries/en/${word}`)
      .then(response => response.json())
      .catch(() => {
         return new Error('Word not found');
      });
}
