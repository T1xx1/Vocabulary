import api from '../data/api.json';

export default async function Random() {
   return await fetch(`${api.randomWord}/word`).then(response => response.json());
}
