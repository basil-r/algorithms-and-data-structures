const reverse = (text) => [...text].reverse().join("");

const start = performance.now();
const backwards = reverse("Hello world! It is awesome.");
const end = performance.now();

console.log({ backwards, time: end - start });
