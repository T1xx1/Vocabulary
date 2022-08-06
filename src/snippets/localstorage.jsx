class Localvocabulary {
   constructor(name, version, initial) {
      this.initial = initial;
      this.name = name;
      this.key = `${name} ${version}`;
      this.version = version;
      
      this.read();

      if (this.value === null) this.init();
   }

   del() {
      localvocabulary.removeItem(this.key);
   }
   init() {
      this.value = this.initial;
      this.write();
   }
   read() {
      this.value = JSON.parse(window.localvocabulary.getItem(this.key));
   }
   write() {
      window.localvocabulary.setItem(this.key, JSON.stringify(this.value));
   } 
}

export default Localvocabulary;