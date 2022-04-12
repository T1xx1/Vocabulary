let name = 'Vocabulary';
let obj = {
   history: [],
   learned: []
};

const json = {
   read: () => {
      return JSON.parse(window.localStorage.getItem(name));
   },
   write: obj => {
      window.localStorage.setItem(name, JSON.stringify(obj));
   },

   init: () => {
      json.write(obj);
   },

   push: (key, value) => {
      let vocabulary = json.read();

      vocabulary[key].push(value);

      json.update(key, [...new Set(vocabulary[key])]);
   },
   update: (key, obj) => {
      let vocabulary = json.read();

      vocabulary[key] = obj;

      json.write(vocabulary);
   },
};

export default json;