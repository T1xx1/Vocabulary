class LocalStorage {
   constructor(name, version, initial) {
      this.initial = initial;
      this.name = name;
      this.version = version;
      
      this.key = `${name} ${version}`;
      
      this.read();
   }

   del() {
      window.localStorage.removeItem(this.key);
   }
   init() {
      this.value = this.initial;
      this.write();
   }
   read() {
      this.value = JSON.parse(window.localStorage.getItem(this.key));
   }
   write() {
      window.localStorage.setItem(this.key, JSON.stringify(this.value));
   } 
}

export default LocalStorage;