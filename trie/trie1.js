class TrieNode{
    constructor(){
        this.children = {}
        this.endOfWord = false;
        this.count = 0
    }
}

class Tries{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let cur = this.root;
        for(let str of word){
            if(!cur.children[str]){
                cur.children[str] = new TrieNode()
            }
            cur = cur.children[str]; 
            cur.count++
        }
        cur.endOfWord = true
    }
    search(word){
        let cur = this.root;
        for(let str of word){
            if(!cur.children[str]){
                return false
            }
            cur = cur.children[str]
        }
        return cur.count
    }
    // startWith(str){
    //     let cur = this.root;
    //     for(let letter of str){
    //         if(!cur.children[letter]){
    //             return false
    //         }
    //         cur = cur.children[letter]
    //     }
    //     return true
    // }
    searchWords(prefix){
        let cur = this.root;
        for(let char of prefix){
            if(!cur.children[char]){
                return []
            }
            cur = cur.children[char]
        }
        return this._searchWordsHelper(cur,prefix)
    }
    _searchWordsHelper(cur,prefix){
        let res = []
        if(cur.endOfWord){
            res.push(prefix)
        }
        for(let char in cur.children){
            res = res.concat(this._searchWordsHelper(cur.children[char],prefix+char))
        }
        return res
    }
}
const obj  =  new Tries()
obj.insert("hello")
obj.insert("hai")
obj.insert("helicap")
obj.insert("apple")
obj.insert("orange")
console.log(obj)
//  obj.searchWords("h")
 console.log(obj.search("h"))
// console.log(obj.startWith("h"))