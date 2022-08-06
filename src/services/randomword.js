export default async function Randomword() {
   return await fetch('https://random-word-api.herokuapp.com/word').then(response => response.json());
}