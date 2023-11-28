import { NumbersCollection } from "./data-structures/NumbersCollections";
import { CharactersCollection } from "./data-structures/CharactersCollection";
import { LinkedList } from "./data-structures/LinkedList";

// Sorting a string
const charactersCollection = new CharactersCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.collection);

// Sorting an array of numbers
const numbersCollection = new NumbersCollection([1, 2, 3, 45, 3, 34, -1]);
numbersCollection.sort();
console.log(numbersCollection.data);

// Sorting a linked list
const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(24);
linkedList.add(34);
linkedList.add(56);
linkedList.add(32);
linkedList.sort();
console.log(linkedList.print());
