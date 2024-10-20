const exampleSet = new Set([1,1,1,1,2,2,2,3]);

exampleSet.add(9).add(7)

console.log(exampleSet.has(3))
console.log(exampleSet.delete(9))

console.log(exampleSet);

exampleSet.clear()
console.log(exampleSet.size)