function Randomword() {
   return fetch('https://random-word-api.herokuapp.com/word').then(response => response.json());
}

export default Randomword;