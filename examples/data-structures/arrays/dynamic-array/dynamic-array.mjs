import { _Array } from "../../../../data-structures/arrays/dynamic-array/dynamic-array.mjs";

const goods = new _Array();

goods.push("milk");
goods.push("water");
goods.push("tea");
const count = goods.push("coffee");

console.log({ length: goods.length, count, "goods[2]": goods.access(2) });

const lastGood = goods.pop();

console.log({ length: goods.length, lastGood });

const deletedGood = goods.delete(1);

console.log({ length: goods.length, deletedGood });
