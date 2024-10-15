let word1 = "Dylan"
let word2 = "Isreal"
let num1 = 2
let num2 = 3

const fullName = `${num1 + num2} ${word1} ${word2}`;
console.log(fullName)

//multi line strings
let example = `${word1} 
${word2}
${num1 + num2}`

document.getElementById('example').innerText = example