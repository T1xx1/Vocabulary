export default async () =>
   await fetch('https://random-words-api.vercel.app/word')
      .then(response => response.json())
      .then(data => data[0].word.toLowerCase())
      .catch(() => '404');
