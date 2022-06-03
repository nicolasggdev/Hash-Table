class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    const index = this._hash(key);

    const bucket = this.data[index];

    if (bucket && bucket.length >= 0) {
      this.data[index].push([key, value]);
    } else {
      this.data[index] = [];

      this.data[index].push([key, value]);
    }
  }

  get(key) {
    const index = this._hash(key);

    const bucket = this.data[index];

    if (bucket && bucket.length > 0) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    } else {
      return undefined;
    }
  }

  remove(key) {
    const index = this._hash(key);

    const bucket = this.data[index];

    if (bucket && bucket.length > 0) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return this.data.splice(i, 1);
        }
      }
    } else {
      return undefined;
    }
  }
}

// Define array size
const myHashTable = new HashTable(10);

// Add elements
myHashTable.set("name", "nicolas");

myHashTable.set("email", "nicolas@gmail.com");

myHashTable.set("tel", "3147974978");

// Get elements
const name = myHashTable.get("name");

console.log(name);

/*
[
  [
    ["email", "prueba@gmail.com"],
    ["tel", "123456789"],
  ],
  [],
  [["prueba", "123"], ["name", "nicolas"]]
  [],
] 
*/
