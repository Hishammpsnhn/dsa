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
  search(word) {
    let cur = this.root;
    for (let char of word) {
      if (!cur.children[char]) {
        return false;
      }
      cur = cur.children[char];
    }
    return cur.endOfWord;
  }
  searchCount(word) {
    let cur = this.root;
    for (let char of word) {
      if (!cur.children[char]) {
        return false;
      }
      cur = cur.children[char];
    }
    return cur.count;
  }
  searchBool(word) {
    let cur = this.root;
    for (let char of word) {
      if (!cur.children[char]) {
        return false;
      }
      cur = cur.children[char];
    }
    return cur.endOfWord;
  }
  searchWords(prefix){
    let cur = this.root;
    for(let char of prefix){
        if(!cur.children[char]){
            return []
        }
        cur = cur.children[char]
    }
    return this.searchWordHelper(cur,prefix)
  }
  searchWordHelper(cur,prefix){
    let res = []
    if(cur.endOfWord){
        res.push(prefix)
    }
    for(let node in cur.children){
        res = res.concat(this.searchWordHelper(cur.children[node],prefix+node))
    }
    return res
  }
  delete(word){
    let cur = this.root;
    let stack = []
    for(let char of word){
        if(!cur.children[char]){
            return false
        }
        stack.push([cur,char])
        cur = cur.children[char]
    }

    if(!cur.endOfWord){
        return false
    }
    cur.endOfWord = false
    console.log("stack",stack)
    while(stack.length >0){
        const [parent,char] = stack.pop()
        if(!cur.endOfWord && Object.keys(cur.children).length === 0){
            delete parent.children[char]
        }
      cur = parent
    }
    return true
  }
}

const obj = new Trie();
obj.insert("hello");
obj.insert("hai");
obj.insert("happy");
obj.insert("cat")
obj.insert("catter")
// console.log(obj);
// console.log(obj.search("helloo"));
// console.log(obj.searchCount(""));
// console.log(obj.searchBool("ha"))
console.log(obj.searchWords("ca"))
obj.delete("c")
console.log(obj.searchWords("c"))

