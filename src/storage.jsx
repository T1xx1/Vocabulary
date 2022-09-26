import LocalStorage from './snippets/localstorage';

import info from './data/info.json';
import initial from './data/initial.json';

export default new LocalStorage(info.name, 3, initial);