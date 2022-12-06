const origin = `https://api.dictionaryapi.dev`;

export default async word => (await fetch(`${origin}/api/v2/entries/en/${word}`)).json().then(data => data[0]);
