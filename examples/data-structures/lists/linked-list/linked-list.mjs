import { LinkedList } from "../../../../data-structures/lists/linked-list/linked-list.mjs";

const linkedList = new LinkedList();

linkedList.append(5);
linkedList.append(10);
linkedList.append(15);
linkedList.append(20);
linkedList.prepend(25);
linkedList.prepend(30);
linkedList.append(35);

console.log(`${linkedList}`);
