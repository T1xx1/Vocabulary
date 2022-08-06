import Word from './word';

export default function Google({ q }) {
   return <a href={`https://www.google.com/search?q=${q}`}>Search <Word inner={q}/> on Google</a>;
}