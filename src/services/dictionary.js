function Dictionary(word) {
   return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(response => response.json());
}

export default Dictionary;