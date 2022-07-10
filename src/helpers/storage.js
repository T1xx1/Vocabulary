import info from '../constants/info';
import { initial } from '../constants/variables';

let key = `${info.name} ${info.version}`;

const storage = {
   read: () => {
      return JSON.parse(localStorage.getItem(key));
   },
   write: obj => localStorage.setItem(key, JSON.stringify(obj)),

   init: () => storage.write(initial),

   update: (key, obj) => {
      let temp = storage.read();

      temp[key] = obj;

      storage.write(temp);
   },
};

export default storage;