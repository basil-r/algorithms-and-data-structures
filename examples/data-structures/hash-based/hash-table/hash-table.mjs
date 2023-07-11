import { HashTable } from "../../../../data-structures/hash-based/hash-table/hash-table.mjs";

const hashTable = new HashTable(100);

hashTable.set("water", 100);
hashTable.set("milk", 50);
hashTable.set("tea", 20);
hashTable.set("coffee", 300);

const milkCount = hashTable.get("milk");
const undefinedCount = hashTable.get("not exists");

console.log({ milkCount, undefinedCount });

console.log(hashTable.keys())