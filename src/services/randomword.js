const origin = 'https://random-words-api.vercel.app';

export default async () =>
   (await fetch(`${origin}/word`))
      .json()
      .then(response => response[0].word.toLowerCase())
      .catch(() => 404);
