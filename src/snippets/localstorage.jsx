export default class LocalStorage {
   constructor(name, version, initial) {
      this.initial = initial;
      this.name = name;
      this.version = version;

      this.key = `${name} ${version}`;

      this.init();
   }

   del() {
      window.localStorage.removeItem(this.key);
   }
   init() {
      this.read();

      if (this.value === null) {
         this.value = this.initial;
         this.write();
      }
   }
   read() {
      this.value = JSON.parse(window.localStorage.getItem(this.key));
   }
   write() {
      window.localStorage.setItem(this.key, JSON.stringify(this.value));
   }
}
