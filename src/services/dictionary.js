function Dictionary(word) {
   try {
      return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(response => response.json());
   } catch {
      return Promise.reject();
   }
}

export default Dictionary;