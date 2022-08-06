export default async function Dictionary(word) {
   try {
      return await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(response => response.json());
   } catch {
      return Promise.reject();
   }
}