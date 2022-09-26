export default async word => (await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)).json().then(data => data[0]);
