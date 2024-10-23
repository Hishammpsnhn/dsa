class Node {
  constructor() {
    this.children = {};
    this.endOfWord = false;
    this.count = 0;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let cur = this.root;
    for (let char of word) {
      if (!cur.children[char]) {
        cur.children[char] = new Node();
      }
      cur = cur.children[char];
      cur.count++;
    }
    cur.endOfWord = true;
  }
  // search(word){
  //     let cur = this.root;
  //     for(let char of word){
  //         if(!cur.children[char]){
  //             return false
  //         }
  //         cur = cur.children[char]
  //     }
  //     return cur.endOfWord
  // }
  delete(prefix){
    let cur = this.root;
    let stack = []
    for(let char of prefix){
      if(!cur.children[char]){
        return false
      }
      stack.push([cur,char])
      cur = cur.children[char]
    }

    if(!cur.endOfWord){
      return false
    }
    cur.endOfWord = false;
    while(stack.length>0){
      const [parent,node] = stack.pop()
      if(!cur.children && Object.keys(cur.children).length ===0){
        delete parent.children[node]
      }
      cur = parent
    }
    return true
  }
  search(word) {
    let cur = this.root;
    for (let char of word) {
      if (!cur.children[char]) {
        return cur.count;
      }
      cur = cur.children[char];
    }
    return cur.count;
  }
  searchWords(word) {
    let cur = this.root;

    for (let char of word) {
      if (!cur.children[char]) {
        return [];
      }
      cur = cur.children[char];
    }
    return this.searchHelper(cur, word);
  }
  searchHelper(cur, word) {
    let res = [];
    if (cur.endOfWord) {
      res.push(word);
    }
    for (let node in cur.children) {
      res = res.concat(this.searchHelper(cur.children[node], word + node));
    }

    return res;
  }
}
const obj = new Trie();
obj.insert("hello");
obj.insert("hai");
obj.insert("h");
obj.insert("cat");
obj.insert("catter");
console.log(obj.searchWords("c"));
obj.delete("catter");
 console.log(obj.searchWords("c"));
// console.log(obj)
